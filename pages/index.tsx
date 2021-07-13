import React from 'react'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { BlogMetaData, Modify } from '@services/types'
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils'

type Posts = Modify<
  Pick<matter.GrayMatterFile<string>, 'content' | 'data'>,
  { data: BlogMetaData }
> & {
  filePath: string
}

type Props = {
  posts: Posts[]
}

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      cursor: 'pointer',
    },
    title: {
      fontWeight: 900,
    },
  }),
)

export default function IndexPage(props: Props) {
  const classes = useStyles()

  return (
    <>
      <Box pt={3} pb={3}>
        <Typography className={classes.title} variant="h4">
          Hello shinji-portfolio 👋
        </Typography>
      </Box>
      <List>
        {props.posts.map((post) => (
          <ListItem key={post.data.id} disableGutters={true}>
            <Link href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}>
              <ListItemText
                className={classes.link}
                primary={
                  <Typography className={classes.title} variant="h4">
                    {post.data.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption">
                    {dayjs(post.data.date).format('YYYY/MM/DD')}
                  </Typography>
                }
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const grayMatterFile = matter(matter.read(path.join(POSTS_PATH, filePath)))

    return {
      filePath,
      content: grayMatterFile.content,
      data: grayMatterFile.data,
    }
  })

  return { props: { posts } }
}
