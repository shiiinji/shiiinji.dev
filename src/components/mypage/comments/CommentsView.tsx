import React from 'react'
import { Box } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useSigninCheck } from 'reactfire'
import { PromptLogin } from '@components/common/PromptLogin'
import { SkeletonTableView } from '@components/common/Skeleton/SkeletonTableView'
import { CommentsTable } from './CommentsTable'

export function CommentsView() {
  const router = useRouter()
  const { status, data: signInCheckResult } = useSigninCheck()

  if (status === 'loading') {
    return <SkeletonTableView />
  }

  if (!signInCheckResult.signedIn) {
    return (
      <Box pl={2}>
        <PromptLogin
          redirectUrl={router.asPath}
          promptText="ログインしてマイページ機能を試す"
        />
      </Box>
    )
  }

  return <CommentsTable userId={signInCheckResult.user?.uid} />
}
