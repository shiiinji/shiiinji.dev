import React, { Suspense } from 'react'
import { useRouter } from 'next/router'
import { AuthCheck } from 'reactfire'
import { Box, Paper, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { PromptLogin } from '@components/PromptLogin'
import { Comment } from './Comment'

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
        <Suspense fallback={<div />}>
          <AuthCheck
            fallback={
              <Box pt={2}>
                <PromptLogin
                  redirectUrl={router.asPath}
                  promptText="ログインしてコメントする"
                />
              </Box>
            }
          >
            <Comment />
          </AuthCheck>
        </Suspense>
      </Box>
    </Paper>
  )
}
