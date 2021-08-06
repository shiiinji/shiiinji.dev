import React from 'react'
import dayjs from 'dayjs'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { MDXRemote, MDXProps } from '@components/common/MDX/'
import { Headlines } from '@components/common/MDX/Headlines'
import { CommentsContainer } from './CommentsContainer'

export type Props = Pick<MDXProps, 'source'>

const useStyles = makeStyles(() =>
  createStyles({
    headLineContainer: {
      position: 'fixed',
    },
    title: {
      fontWeight: 900,
    },
    view: {
      backgroundColor: 'black',
    },
  }),
)

export function Blog(props: Props) {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Box pt={3}>
        <Grid container={true}>
          <Grid item={true} xs={12} sm={9}>
            <Box pt={3}>
              <Typography
                className={classes.title}
                variant="h4"
                variantMapping={{ h4: 'h1' }}
              >
                {props.source.scope?.title}
              </Typography>
              <Typography variant="caption">
                {dayjs(props.source.scope?.date).format('YYYY/MM/DD')}
              </Typography>
            </Box>
            <Box pt={3}>
              <MDXRemote source={props.source} isHeadLine={true} />
            </Box>
            <Box pt={5} pb={5}>
              <CommentsContainer />
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={3}>
            <Box pt={5}>
              <Headlines />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
