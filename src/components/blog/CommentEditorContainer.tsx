import React from 'react'
import { useSigninCheck } from 'reactfire'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'
import { Box } from '@material-ui/core'
import { PromptLogin } from '@components/common/PromptLogin'
import { CommentEditor } from './CommentEditor'

export function CommentEditorContainer() {
  const router = useRouter()
  const { status, data: signInCheckResult } = useSigninCheck({})

  if (status === 'loading') {
    return null
  }

  if (!signInCheckResult.signedIn) {
    return (
      <Box pl={2}>
        <PromptLogin
          redirectUrl={router.asPath}
          promptText="ログインしてコメントする"
        />
      </Box>
    )
  }

  return (
    <RecoilRoot>
      <CommentEditor />
    </RecoilRoot>
  )
}
