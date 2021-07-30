import React from 'react'
import firebase from 'firebase/app'
import { useRouter } from 'next/router'
import { useAuth, useAnalytics } from 'reactfire'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Box } from '@material-ui/core'

type AuthResult = {
  user: firebase.User
  additionalUserInfo: firebase.auth.AdditionalUserInfo
}

export default function Login() {
  const analytics = useAnalytics()
  const auth = useAuth()
  const router = useRouter()

  const redirectUrl = String(router.query.redirectUrl || '/')

  const uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      {
        provider: useAuth.GithubAuthProvider.PROVIDER_ID,
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: (result: AuthResult) => {
        if (result.additionalUserInfo.isNewUser === true) {
          analytics.logEvent('sign_up', {
            method: result.additionalUserInfo.providerId,
          })
        } else {
          analytics.logEvent('login', {
            method: result.additionalUserInfo.providerId,
          })
        }

        router.push(redirectUrl)

        return false
      },
    },
    credentialHelper: 'none',
    tosUrl: '/about/terms',
    privacyPolicyUrl: '/about/privacy',
  }

  return (
    <Box pt={2}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Box>
  )
}
