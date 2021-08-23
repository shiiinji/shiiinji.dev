import React from 'react'
import { Box } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

export const SkeletonView = () => {
  return (
    <Box p={10}>
      {[...new Array(5)].map((_, index) => (
        <Box key={index} pt={index ? 3 : 0}>
          <Skeleton variant="rect" width="80%" height={60} />
        </Box>
      ))}
    </Box>
  )
}
