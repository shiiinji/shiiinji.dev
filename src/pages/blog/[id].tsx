import React from 'react'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CodeBlock } from '@components/blog/CodeBlock'
import { CommentsContainer } from '@components/blog/CommentsContainer'
import { A, Div, H1, H2, H3, H4, H5, H6, P } from '@components/blog/HtmlStyles'
import { initializeApollo } from '@graphql/apolloClient'
import {
  GetRepositoryObjectDocument,
  GetRepositoryObjectNamesDocument,
  TreeEntry,
} from '@services/github/client'
import { BlogMetaData } from '@services/types'

type Params = { id: string }

type Props = {
  source: MDXRemoteSerializeResult<BlogMetaData>
}

type ComponentProps = Record<string, unknown>

const components = {
  code: CodeBlock,
  a: (props: ComponentProps) => <A {...props} />,
  div: (props: ComponentProps) => <Div {...props} />,
  h1: (props: ComponentProps) => <H1 {...props} />,
  h2: (props: ComponentProps) => <H2 {...props} />,
  h3: (props: ComponentProps) => <H3 {...props} />,
  h4: (props: ComponentProps) => <H4 {...props} />,
  h5: (props: ComponentProps) => <H5 {...props} />,
  h6: (props: ComponentProps) => <H6 {...props} />,
  p: (props: ComponentProps) => <P {...props} />,
}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 900,
    },
    view: {
      backgroundColor: 'black',
    },
  }),
)

export default function BlogPage(props: Props) {
  const classes = useStyles()

  return (
    <>
      <NextSeo
        title={props.source.scope?.title}
        description={props.source.scope?.description}
        canonical={`https://shiiinji-dev.vercel.app/blog/${props.source.scope?.id}`}
        openGraph={{
          url: `https://shiiinji-dev.vercel.app/blog/${props.source.scope?.id}`,
          title: props.source.scope?.title,
          description: props.source.scope?.description,
        }}
      />
      <Box pt={3}>
        <Box pt={3}>
          <Typography
            className={classes.title}
            variant="h4"
            variantMapping={{ h4: 'h1' }}
          >
            {props.source.scope?.title}
          </Typography>
          <Typography variant="caption">
            {dayjs(props.source.scope?.date).format('YYYY/MM/DD')}
          </Typography>
        </Box>
        <Box pt={3}>
          <MDXRemote {...props.source} components={components}></MDXRemote>
        </Box>
        <Box pt={5} pb={5}>
          <CommentsContainer />
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const apolloClient = initializeApollo()

  const {
    data: { repository },
  } = await apolloClient.query({
    query: GetRepositoryObjectDocument,
    variables: {
      owner: String(process.env.NEXT_PUBLIC_GITHUB_OWNER),
      name: String(process.env.NEXT_PUBLIC_GITHUB_NAME),
      expression: String(
        `${process.env.NEXT_PUBLIC_GITHUB_EXPRESSION}${context.params?.id}.mdx`,
      ),
    },
  })

  const grayMatterFile = matter(repository?.content?.text)
  const mdxSource = await serialize(grayMatterFile.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: grayMatterFile.data,
  })

  return {
    props: { source: mdxSource as MDXRemoteSerializeResult<BlogMetaData> },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const apolloClient = initializeApollo()

  const {
    data: { repository },
  } = await apolloClient.query({
    query: GetRepositoryObjectNamesDocument,
    variables: {
      owner: String(process.env.NEXT_PUBLIC_GITHUB_OWNER),
      name: String(process.env.NEXT_PUBLIC_GITHUB_NAME),
      expression: String(`${process.env.NEXT_PUBLIC_GITHUB_EXPRESSION}`),
    },
  })

  const paths = repository.content?.entries
    .map((object: Pick<TreeEntry, 'name'>) => object.name)
    .map((name: string) => ({ params: { id: name.replace(/\.mdx?$/, '') } }))

  return {
    paths,
    fallback: 'blocking',
  }
}
