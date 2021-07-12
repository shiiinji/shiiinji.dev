import React from 'react'
import { useRouter } from 'next/router'
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
} from '@material-ui/core'
import { Description, Face, GitHub, Storefront } from '@material-ui/icons'
import { createStyles, makeStyles } from '@material-ui/core/styles'

export function Navigation() {
  const classes = useStyles()
  const router = useRouter()

  const handleChange = (
    _event: React.ChangeEvent<Record<string, unknown>>,
    newValue: string,
  ) => {
    router.push(newValue)
  }

  return (
    <Hidden smUp={true}>
      <BottomNavigation
        className={classes.navigation}
        onChange={handleChange}
        showLabels={true}
        value={router.pathname}
      >
        <BottomNavigationAction icon={<Face />} label="About" value="/about" />
        <BottomNavigationAction
          icon={<Description />}
          label="ブログ"
          value="/blogs"
        />
        <BottomNavigationAction
          icon={<Storefront />}
          label="ショップ"
          value="/shops"
        />
        <BottomNavigationAction
          icon={<GitHub />}
          label="Github"
          value="https://github.com/shiiinji"
        />
      </BottomNavigation>
    </Hidden>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    navigation: {
      flexGrow: 1,
      width: '100vw',
      position: 'fixed',
      bottom: 0,
      backgroundColor: '#fafafa',
      borderTop: '1px solid #9e9e9e',
      borderBottom: '1px solid #9e9e9e',
    },
  }),
)
