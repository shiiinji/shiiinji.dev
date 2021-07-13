import React from 'react'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { Box, Typography } from '@material-ui/core'
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { BlogMetaData } from '@services/types'

type Props = {
  source: MDXRemoteSerializeResult<BlogMetaData>
}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 900,
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
      <MDXRemote {...props.source}></MDXRemote>
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
