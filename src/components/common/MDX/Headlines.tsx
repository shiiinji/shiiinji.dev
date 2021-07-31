import React from 'react'
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
import { Headline } from './CustomH1'

type Props = {
  headlines: Headline[]
}

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

export function Headlines(props: Props) {
  const classes = useStyles()

  return (
    <>
      <Typography align="center" variant="h6">
        目次
      </Typography>
      <Timeline>
        {props.headlines.map((headline, index) => (
          <TimelineItem key={headline.id}>
            <TimelineSeparator>
              <TimelineDot />
              {index !== props.headlines.length - 1 && <TimelineConnector />}
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
