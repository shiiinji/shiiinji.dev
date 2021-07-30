import React, { Suspense } from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { SkeletonCommentView } from '@components/common/Skeleton/SkeletonCommentView'
import { CommentEditorContainer } from './CommentEditorContainer'
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

  return (
    <Paper>
      <Box p={2}>
        <Typography className={classes.title} variant="h6">
          コメント
        </Typography>
        <Suspense fallback={<SkeletonCommentView />}>
          <Comments />
          <CommentEditorContainer />
        </Suspense>
      </Box>
    </Paper>
  )
}
