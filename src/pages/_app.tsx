import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FirebaseAppProvider, useAnalytics, useUser } from 'reactfire'
import { ApolloProvider } from '@apollo/client'
import { Container, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { AppDrawer } from '@components/AppDrawer'
import { BottomNavigation } from '@components/BottomNavigation'
import { useApollo } from '@graphql/apolloClient'
import { isBrowserDetect } from '@libs/isBrowserDetect'
import { defaultTheme } from '@styles/theme'
import firebaseConfig from '../firebase/firebaseConfig'

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug AdminUser-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

function MyPageViewLogger() {
  const analytics = useAnalytics()
  const router = useRouter()
  const { data: user } = useUser(undefined, { suspense: true })

  useEffect(() => {
    if (router.asPath !== null && router.asPath !== undefined) {
      if (user) {
        analytics.setUserId(user.uid, { global: true })
      }
      analytics.logEvent('page_view', { page_path: router.asPath })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return null
}

export default function MyApp({
  Component,
  pageProps,
}: AppProps & { apolloClient: any }) {
  const router = useRouter()
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    if (isBrowserDetect()) {
      window.scrollTo(0, 0)
    }
  }, [router.asPath])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
        <ThemeProvider theme={defaultTheme}>
          <ApolloProvider client={apolloClient}>
            <CssBaseline />
            <AppDrawer>
              <Container maxWidth="md">
                <Component {...pageProps} />
              </Container>
              <BottomNavigation />
            </AppDrawer>
          </ApolloProvider>
        </ThemeProvider>
        <React.Suspense fallback={<div />}>
          <MyPageViewLogger />
        </React.Suspense>
      </FirebaseAppProvider>
    </>
  )
}
