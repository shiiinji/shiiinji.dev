import React from 'react'
import { useRecoilValue } from 'recoil'
import { Typography } from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab/'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { headlinesState } from '@store/atoms/headlines'

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }),
)

export function Headlines() {
  const classes = useStyles()
  const headlines = useRecoilValue(headlinesState)

  if (headlines.length <= 0) return null

  return (
    <>
      <Typography align="center" variant="h6">
        目次
      </Typography>
      <Timeline>
        {headlines.map((headline, index) => (
          <TimelineItem key={headline.id}>
            <TimelineSeparator>
              <TimelineDot />
              {index !== headlines.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                className={classes.text}
                onClick={() => {
                  headline.ref.current?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
              >
                {String(headline.title)}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}
