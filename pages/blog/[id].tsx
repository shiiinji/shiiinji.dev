import React from 'react'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CodeBlock } from '@components/blog/CodeBlock'
import { A, Div, H1, H2, H3, H4, H5, H6, P } from '@components/blog/HtmlStyles'
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils'
import { BlogMetaData } from '@services/types'

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
    <Box pt={3}>
      <Box pt={3}>
        <Typography className={classes.title} variant="h4">
          {props.source.scope?.title}
        </Typography>
        <Typography variant="caption">
          {dayjs(props.source.scope?.date).format('YYYY/MM/DD')}
        </Typography>
      </Box>
      <Box pt={3}>
        <MDXRemote {...props.source} components={components}></MDXRemote>
      </Box>
    </Box>
  )
}

export async function getStaticProps(props: { params: { id: string } }) {
  const grayMatterFile = matter(
    matter.read(path.join(POSTS_PATH, `${props.params.id}.mdx`)),
  )
  const mdxSource = await serialize(grayMatterFile.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: grayMatterFile.data,
  })

  return {
    props: { source: mdxSource },
  }
}

export async function getStaticPaths() {
  const paths = postFilePaths
    .map((filePath) => filePath.replace(/\.mdx?$/, ''))
    .map((id) => ({ params: { id } }))

  return {
    paths,
    fallback: false,
  }
}
