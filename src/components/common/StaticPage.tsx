import React from 'react'
import Error from 'next/error'
import { Box, Typography } from '@material-ui/core/'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import {
  useGetStaticPageQuery,
  StaticPageType,
} from '@services/graphcms/client'
import { StyledStaticPage } from './StyledStaticPage'

type Props = {
  type: StaticPageType
}

export function StaticPage(props: Props) {
  const classes = useStyles()

  const { data, error } = useGetStaticPageQuery({
    variables: {
      staticPageType: props.type,
    },
  })

  if (error) {
    return <Error statusCode={404} />
  }

  if (!data || !data.staticPage) {
    return <Error statusCode={500} />
  }

  return (
    <Box pt={3} pb={3}>
      <Typography align="center" className={classes.title} variant="h5">
        {data.staticPage.title}
      </Typography>
      <StyledStaticPage
        dangerouslySetInnerHTML={{
          __html: data?.staticPage?.content?.html,
        }}
      />
    </Box>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 'bold',
    },
  }),
)
