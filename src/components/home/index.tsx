import React from 'react'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import Link from 'next/link'
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { BlogMetaData, Modify } from '@services/types'

export type Post = Modify<
  Pick<matter.GrayMatterFile<string>, 'content' | 'data'>,
  { data: BlogMetaData }
>

export type Props = {
  posts: Post[]
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

export function Home(props: Props) {
  const classes = useStyles()

  const dateDescendingOrderPosts = Array.from(props.posts).sort(
    (a, b) => dayjs(b.data.date).date() - dayjs(a.data.date).date(),
  )

  return (
    <Container maxWidth="md">
      <Box pt={3} pb={3}>
        <Link href="/about">
          <div className={classes.link}>
            <Typography
              className={classes.title}
              variant="h4"
              variantMapping={{ h4: 'h1' }}
            >
              Hello shinji-portfolio 👋
            </Typography>
            <Typography variant="subtitle1">
              shiiinjiです。このサイトはポートフォリオ兼ブログとして開発しております。普段から使っているReact/Next.js/Material-UI/Firebase/GraphQLをベースにしながらも、MDXやNext.js
              Commerceなどの実験場とする予定です。
            </Typography>
          </div>
        </Link>
        <Typography variant="subtitle1">サイトのコード →</Typography>
        <Link href="https://github.com/shiiinji/shinji-portfolio">
          <a target="_blank" rel="noopener noreferrer">
            <Typography color="primary">
              https://github.com/shiiinji/shinji-portfolio
            </Typography>
          </a>
        </Link>
      </Box>
      <List>
        {dateDescendingOrderPosts.map((post) => (
          <ListItem key={post.data.id} disableGutters={true}>
            <Link href={`/blog/${post.data.id}`}>
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
    </Container>
  )
}
