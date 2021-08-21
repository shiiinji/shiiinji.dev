import React from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery, Tabs, Tab } from '@material-ui/core'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles'

const a11yProps = (name: 'comments') => ({
  'aria-controls': `mypage-tabpanel-${name}`,
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    title: {
      [theme.breakpoints.only('xs')]: {
        fontSize: '1rem',
      },
      fontSize: '1.5rem',
    },
  }),
)

export function VerticalTabs() {
  const classes = useStyles()
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'))

  const handleChange = (
    _event: React.ChangeEvent<Record<string, unknown>>,
    newValue: string,
  ) => {
    router.push(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation={isMobile ? 'horizontal' : 'vertical'}
        value={router.pathname}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={isMobile ? '' : classes.tabs}
        aria-label="mypage-tabs"
      >
        <Tab
          className={classes.title}
          label="Comments"
          value="/mypage/comments"
          {...a11yProps('comments')}
        />
      </Tabs>
    </div>
  )
}
