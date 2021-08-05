import React from 'react'
import { useRouter } from 'next/router'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { GitHub, Home, Person, Web } from '@material-ui/icons'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Props = {
  position: 'top' | 'bottom'
}

export function Navigation(props: Props) {
  const classes = useStyles()
  const router = useRouter()

  const handleChange = (
    _event: React.ChangeEvent<Record<string, unknown>>,
    newValue: string,
  ) => {
    router.push(newValue)
  }

  return (
    <BottomNavigation
      className={
        props.position === 'top' ? undefined : classes.bottomNavigation
      }
      onChange={handleChange}
      showLabels={true}
      value={router.pathname}
    >
      <BottomNavigationAction icon={<Home />} label="ホーム" value="/" />
      <BottomNavigationAction icon={<Web />} label="About" value="/about/me" />

      <BottomNavigationAction
        icon={<Person />}
        label="マイページ"
        value="/mypage"
      />
      <BottomNavigationAction
        icon={<GitHub />}
        label="Github"
        value="https://github.com/shiiinji"
      />
    </BottomNavigation>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    bottomNavigation: {
      flexGrow: 1,
      width: '100vw',
      position: 'fixed',
      bottom: 0,
      borderTop: '1px solid #9e9e9e',
      borderBottom: '1px solid #9e9e9e',
    },
  }),
)
