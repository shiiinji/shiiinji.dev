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

export default function TermsPage(props: Props) {
  return (
    <>
      <NextSeo
        title="利用規約 | shiiinji.dev"
        description="shiiinji.devの利用規約ページです。"
        canonical="https://shiiinji-dev.vercel.app/about/terms"
        openGraph={{
          url: 'https://shiiinji-dev.vercel.app/about/terms',
          title: '利用規約 | shiiinji.dev',
          description: 'shiiinji.devの利用規約ページです。',
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
        `${process.env.NEXT_PUBLIC_GITHUB_PAGE_EXPRESSION}terms.mdx`,
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
