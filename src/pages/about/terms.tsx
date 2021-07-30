import React from 'react'
import { NextSeo } from 'next-seo'
import { Container } from '@material-ui/core'
import { StaticPage } from '@components/common/StaticPage'
import { initializeApollo } from '@graphql/apolloClient'
import {
  GetStaticPageDocument,
  StaticPageType,
} from '@services/graphcms/client'

export default function TermsPage() {
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
        <StaticPage type={StaticPageType.Terms} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GetStaticPageDocument,
    variables: {
      staticPageType: StaticPageType.Terms,
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60 * 60,
  }
}
