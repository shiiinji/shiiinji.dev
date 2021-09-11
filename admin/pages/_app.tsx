import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Provider } from 'urql'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { client } from '@graphql/client'
import { defaultTheme } from '@styles/theme'
import { isBrowserDetect } from '@utils/isBrowserDetect'

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a api-mock-server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from api-mock-server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from api-mock-server)
 * @param {boolean} options.debug AdminUser-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

if (process.env.NEXT_PUBLIC_API_MOCKING) {
  // @ts-ignore
  const MockServer = () => import('@test/api-mock-server')

  MockServer()
}

export default function MyApp({
  Component,
  pageProps,
}: AppProps & { apolloClient: any }) {
  const router = useRouter()

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
      <ThemeProvider theme={defaultTheme}>
        <Provider value={client}>
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}
