import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import { VerticalTabs } from '../common/VerticalTabs'

export const MyPageComments = () => (
  <Container maxWidth="lg">
    <Box pt={5}>
      <Grid container={true}>
        <Grid item={true} xs={12} sm={3}>
          <VerticalTabs />
        </Grid>
        <Grid item={true} xs={12} sm={9}></Grid>
      </Grid>
    </Box>
  </Container>
)
