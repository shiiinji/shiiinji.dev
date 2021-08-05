import React from 'react'
import matter from 'gray-matter'
import { NextSeo } from 'next-seo'
import { Home, Props, Post } from '@components/home'
import { client } from '@graphql/client'
import { Blob, GetRepositoryObjectsDocument } from '@services/github/client'

export default function HomePage(props: Props) {
  return (
    <>
      <NextSeo
        title="shiiinjiのブログ&ポートフォリオサイトです。"
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
      <Home {...props} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client
    .query(GetRepositoryObjectsDocument, {
      owner: String(process.env.NEXT_PUBLIC_GITHUB_OWNER),
      name: String(process.env.NEXT_PUBLIC_GITHUB_NAME),
      expression: String(process.env.NEXT_PUBLIC_GITHUB_EXPRESSION),
    })
    .toPromise()

  const posts: Post[] = data?.repository.content?.entries
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
