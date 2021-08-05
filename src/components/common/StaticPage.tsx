import React from 'react'
import { Box } from '@material-ui/core/'
import { MDXRemote, MDXProps } from '@components/common/MDX/'

export type Props = Pick<MDXProps, 'source'>

export const StaticPage: React.FC<Props> = (props) => {
  return (
    <Box pt={3} pb={5}>
      <MDXRemote source={props.source} />
    </Box>
  )
}
