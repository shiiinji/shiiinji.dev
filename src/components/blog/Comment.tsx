import React from 'react'
import dayjs from 'dayjs'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Box, Card, CardContent, Typography } from '@material-ui/core/'
import { Comment as CommentModel } from '@services/models/comment'

type Props = {
  comment: CommentModel
}

export function Comment(props: Props) {
  const classes = useStyles()

  return (
    <Card elevation={0}>
      <CardContent>
        <Box display="flex">
          <Typography className={classes.author} variant="body2">
            {props.comment.author}
          </Typography>
          <Box pl={1}>
            <Typography variant="body2">
              {dayjs(props.comment.createdAt?.toDate()).format('YYYY/MM/DD')}
            </Typography>
          </Box>
        </Box>
        <Box pt={2}>
          <Typography component="p" variant="body1">
            {props.comment.content}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    author: {
      fontWeight: 'bold',
    },
  }),
)
