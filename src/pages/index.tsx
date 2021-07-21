import React from 'react'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
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
import { initializeApollo } from '@graphql/apolloClient'
import { Blob, GetRepositoryObjectsDocument } from '@services/github/client'

type Post = Modify<
  Pick<matter.GrayMatterFile<string>, 'content' | 'data'>,
  { data: BlogMetaData }
>

type Props = {
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

export default function IndexPage(props: Props) {
  const classes = useStyles()

  const dateDescendingOrderPosts = Array.from(props.posts).sort(
    (a, b) => dayjs(b.data.date).date() - dayjs(a.data.date).date(),
  )

  return (
    <>
      <NextSeo
        title="shiiinjiののブログ&ポートフォリオサイトです。"
        description="このサイトはポートフォリオ兼ブログとして開発しております。普段から使っているReact/Next.js/Material-UI/Firebase/GraphQLをベースにしながらも、MDXやNext.js
              Commerceなどの実験場とする予定です。"
        canonical="https://shiiinji-dev.vercel.app/"
        openGraph={{
          url: 'https://shiiinji-dev.vercel.app/',
          title: 'shiiinjiののブログ&ポートフォリオサイトです。',
          description:
            'このサイトはポートフォリオ兼ブログとして開発しております。普段から使っているReact/Next.js/Material-UI/Firebase/GraphQLをベースにしながらも、MDXやNext.js Commerceなどの実験場とする予定です。',
        }}
      />
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
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { repository },
  } = await apolloClient.query({
    query: GetRepositoryObjectsDocument,
    variables: {
      owner: String(process.env.NEXT_PUBLIC_GITHUB_OWNER),
      name: String(process.env.NEXT_PUBLIC_GITHUB_NAME),
      expression: String(process.env.NEXT_PUBLIC_GITHUB_EXPRESSION),
    },
  })

  const posts: Post[] = repository.content?.entries
    ?.map(({ object }: { object: Pick<Blob, 'text'> }) => {
      if (!object?.text) {
        return []
      }
      const grayMatterFile = matter(object.text)

      return {
        content: grayMatterFile.content,
        data: grayMatterFile.data,
      }
    })
    .filter((post: Post) => post.content && post.data)

  return { props: { posts }, revalidate: 60 }
}
