import React from 'react'
import { NextSeo } from 'next-seo'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import slug from 'rehype-slug'
import { Container } from '@material-ui/core'
import { StaticPage, Props } from '@components/common/StaticPage'
import { initializeApollo } from '@graphql/apolloClient'
import { GetRepositoryObjectDocument } from '@services/github/client'
import { BlogMetaData } from '@services/types'

export default function PrivacyPolicyPage(props: Props) {
  return (
    <>
      <NextSeo
        title="プライバシーポリシー | shiiinji.dev"
        description="shiiinji.devのプライバシーポリシーページです。"
        canonical="https://shiiinji-dev.vercel.app/about/privacy"
        openGraph={{
          url: 'https://shiiinji-dev.vercel.app/about/privacy',
          title: 'プライバシーポリシー | shiiinji.dev',
          description: 'shiiinji.devのプライバシーポリシーページです。',
        }}
      />
      <Container maxWidth="md">
        <StaticPage {...props} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const apolloClient = initializeApollo()

  const {
    data: { repository },
  } = await apolloClient.query({
    query: GetRepositoryObjectDocument,
    variables: {
      owner: String(process.env.NEXT_PUBLIC_GITHUB_OWNER),
      name: String(process.env.NEXT_PUBLIC_GITHUB_NAME),
      expression: String(
        `${process.env.NEXT_PUBLIC_GITHUB_PAGE_EXPRESSION}privacy_policy.mdx`,
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
