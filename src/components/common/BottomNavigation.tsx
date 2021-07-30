import React from 'react'
import { Hidden } from '@material-ui/core'
import { Navigation } from './Navigation'

export const BottomNavigation = () => (
  <Hidden smUp={true}>
    <Navigation position="bottom" />
  </Hidden>
)
