import React from 'react'
import { Typography } from '@material-ui/core/'

export const ErrorTypography: React.FC = (props) => {
  return <Typography color="error">{props.children}</Typography>
}
