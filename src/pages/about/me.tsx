import React from 'react'
import { NextSeo } from 'next-seo'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import slug from 'rehype-slug'
import { Container } from '@material-ui/core'
import { StaticPage, Props } from '@components/common/StaticPage'
import { client } from '@graphql/client'
import { GetRepositoryObjectDocument } from '@services/github/client'
import { BlogMetaData } from '@services/types'

export default function AboutMePage(props: Props) {
  return (
    <>
      <NextSeo
        title="shiiinjiの自己紹介ページ | shiiinji.dev"
        description="shiiinji.devのshiiinjiの自己紹介ページです。"
        canonical="https://shiiinji-dev.vercel.app/about/me"
        openGraph={{
          url: 'https://shiiinji-dev.vercel.app/about/me',
          title: 'shiiinjiの自己紹介ページ | shiiinji.dev',
          description: 'shiiinji.devのshiiinjiの自己紹介ページです。',
        }}
      />
      <Container maxWidth="md">
        <StaticPage {...props} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const {
    data: { repository },
  } = await client
    .query(GetRepositoryObjectDocument, {
      owner: String(process.env.NEXT_PUBLIC_GITHUB_OWNER),
      name: String(process.env.NEXT_PUBLIC_GITHUB_NAME),
      expression: String(
        `${process.env.NEXT_PUBLIC_GITHUB_PAGE_EXPRESSION}me.mdx`,
      ),
    })
    .toPromise()

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
