import React, { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import slug from 'rehype-slug'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CodeBlock } from '@components/blog/CodeBlock'
import { CommentsContainer } from '@components/blog/CommentsContainer'
import { CustomH1, Headline } from '@components/blog/CustomH1'
import { A, Div, H2, H3, H4, H5, H6, P } from '@components/blog/HtmlStyles'
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

type ComponentProps<T = unknown> = Record<string, T>

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
  const [headlines, setHeadline] = useState<Headline[]>([])

  const components = useMemo(
    () => ({
      code: CodeBlock,
      a: (componentProps: ComponentProps) => <A {...componentProps} />,
      div: (componentProps: ComponentProps) => <Div {...componentProps} />,
      h1: (componentProps: ComponentProps<string>) => (
        <CustomH1
          {...componentProps}
          id={componentProps.id}
          headlines={headlines}
          setHeadline={setHeadline}
        />
      ),
      h2: (componentProps: ComponentProps) => <H2 {...componentProps} />,
      h3: (componentProps: ComponentProps) => <H3 {...componentProps} />,
      h4: (componentProps: ComponentProps) => <H4 {...componentProps} />,
      h5: (componentProps: ComponentProps) => <H5 {...componentProps} />,
      h6: (componentProps: ComponentProps) => <H6 {...componentProps} />,
      p: (componentProps: ComponentProps) => <P {...componentProps} />,
    }),
    [],
  )

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
      rehypePlugins: [slug],
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
