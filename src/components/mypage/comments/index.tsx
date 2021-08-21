import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import { CommentsView } from './CommentsView'
import { VerticalTabs } from '../common/VerticalTabs'

export const MyPageComments = () => (
  <Container maxWidth="lg">
    <Box p={8}>
      <Grid container={true}>
        <Grid item={true} xs={12} sm={4} md={3}>
          <VerticalTabs />
        </Grid>
        <Grid item={true} xs={12} sm={8} md={9}>
          <CommentsView />
        </Grid>
      </Grid>
    </Box>
  </Container>
)
