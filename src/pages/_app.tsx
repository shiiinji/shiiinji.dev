import React, { Suspense, useEffect } from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FirebaseAppProvider } from 'reactfire'
import { RecoilRoot } from 'recoil'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { AppDrawer } from '@components/common/AppDrawer'
import { BottomNavigation } from '@components/common/BottomNavigation'
import { defaultTheme } from '@styles/theme'
import { isBrowserDetect } from '@utils/isBrowserDetect'
import firebaseConfig from '../firebase/firebaseConfig'

const DynamicFirebaseAppIndividualProviders = dynamic(
  () => import('../components/common/FirebaseAppIndividualProviders'),
  { ssr: false },
)
const DynamicMyPageViewLogger = dynamic(
  () => import('../components/common/MyPageViewLogger'),
  { ssr: false },
)

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug AdminUser-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

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
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <DynamicFirebaseAppIndividualProviders>
          <RecoilRoot>
            <ThemeProvider theme={defaultTheme}>
              <CssBaseline />
              <AppDrawer />
              <Component {...pageProps} />
              <BottomNavigation />
            </ThemeProvider>
          </RecoilRoot>
          <Suspense fallback={<div />}>
            <DynamicMyPageViewLogger />
          </Suspense>
        </DynamicFirebaseAppIndividualProviders>
      </FirebaseAppProvider>
    </>
  )
}
