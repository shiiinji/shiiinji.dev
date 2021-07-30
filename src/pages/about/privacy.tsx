import React from 'react'
import { NextSeo } from 'next-seo'
import { Container } from '@material-ui/core'
import { StaticPage } from '@components/common/StaticPage'
import { initializeApollo } from '@graphql/apolloClient'
import {
  GetStaticPageDocument,
  StaticPageType,
} from '@services/graphcms/client'

export default function PrivacyPolicyPage() {
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
        <StaticPage type={StaticPageType.PrivacyPolicy} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GetStaticPageDocument,
    variables: {
      staticPageType: StaticPageType.PrivacyPolicy,
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60 * 60,
  }
}
