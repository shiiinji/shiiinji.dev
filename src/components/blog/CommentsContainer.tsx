import React, { Suspense } from 'react'
import { useRouter } from 'next/router'
import { AuthCheck } from 'reactfire'
import { Box, Paper, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { PromptLogin } from '@components/common/PromptLogin'
import { SkeletonCommentView } from '@components/common/Skeleton/SkeletonCommentView'
import { CommentEditor } from './CommentEditor'
import { Comments } from './Comments'

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 900,
    },
  }),
)

export function CommentsContainer() {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Paper>
      <Box p={2}>
        <Typography className={classes.title} variant="h6">
          コメント
        </Typography>
        <Suspense fallback={<SkeletonCommentView />}>
          <Comments />
        </Suspense>
        <Suspense fallback={<SkeletonCommentView />}>
          <AuthCheck
            fallback={
              <Suspense fallback={<SkeletonCommentView />}>
                <Box pt={2}>
                  <PromptLogin
                    redirectUrl={router.asPath}
                    promptText="ログインしてコメントする"
                  />
                </Box>
              </Suspense>
            }
          >
            <Suspense fallback={<SkeletonCommentView />}>
              <CommentEditor />
            </Suspense>
          </AuthCheck>
        </Suspense>
      </Box>
    </Paper>
  )
}
