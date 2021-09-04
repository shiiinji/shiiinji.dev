import React from 'react'
import { logEvent } from 'firebase/analytics'
import { AdditionalUserInfo, GithubAuthProvider, User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useAuth, useAnalytics } from 'reactfire'
import StyledFirebaseAuth from 'tmp-fork-react-firebaseui-v0.600.0/StyledFirebaseAuth'
import { Box } from '@material-ui/core'

type AuthResult = {
  user: User
  additionalUserInfo: AdditionalUserInfo
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
        provider: GithubAuthProvider.PROVIDER_ID,
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: (result: AuthResult) => {
        if (result.additionalUserInfo.isNewUser === true) {
          logEvent(analytics, 'sign_up')
        } else {
          logEvent(analytics, 'login')
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
