import React, { useState } from 'react'
import { Box } from '@material-ui/core/'
import { MDXRemote, MDXProps } from '@components/common/MDX/'
import { Headline } from '@components/common/MDX/CustomH1'

export type Props = Pick<MDXProps, 'source'>

export function StaticPage(props: Props) {
  const [, setHeadline] = useState<Headline[]>([])

  return (
    <Box pt={3} pb={3}>
      <MDXRemote source={props.source} setHeadline={setHeadline} />
    </Box>
  )
}
