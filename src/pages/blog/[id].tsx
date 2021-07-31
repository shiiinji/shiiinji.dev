import React from 'react'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import slug from 'rehype-slug'
import { Blog, Props } from '@components/blog'
import { client } from '@graphql/client'
import {
  GetRepositoryObjectDocument,
  GetRepositoryObjectNamesDocument,
  TreeEntry,
} from '@services/github/client'
import { BlogMetaData } from '@services/types'

type Params = { id: string }

export default function BlogPage(props: Props) {
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
      <Blog {...props} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const {
    data: { repository },
  } = await client
    .query(GetRepositoryObjectDocument, {
      owner: String(process.env.NEXT_PUBLIC_GITHUB_OWNER),
      name: String(process.env.NEXT_PUBLIC_GITHUB_NAME),
      expression: String(
        `${process.env.NEXT_PUBLIC_GITHUB_EXPRESSION}${context.params?.id}.mdx`,
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

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const {
    data: { repository },
  } = await client
    .query(GetRepositoryObjectNamesDocument, {
      owner: String(process.env.NEXT_PUBLIC_GITHUB_OWNER),
      name: String(process.env.NEXT_PUBLIC_GITHUB_NAME),
      expression: String(`${process.env.NEXT_PUBLIC_GITHUB_EXPRESSION}`),
    })
    .toPromise()

  const paths = repository.content?.entries
    .map((object: Pick<TreeEntry, 'name'>) => object.name)
    .map((name: string) => ({ params: { id: name.replace(/\.mdx?$/, '') } }))

  return {
    paths,
    fallback: 'blocking',
  }
}
