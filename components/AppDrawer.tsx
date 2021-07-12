import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Hidden,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Description, Face, GitHub, Storefront } from '@material-ui/icons'

export const AppDrawer: React.FC = (props) => {
  const classes = useStyles()
  const router = useRouter()

  const handleChange = (
    _event: React.ChangeEvent<Record<string, unknown>>,
    newValue: string,
  ) => {
    router.push(newValue)
  }

  return (
    <div className={classes.appFrame}>
      <AppBar color="inherit" elevation={0} variant="outlined">
        <Toolbar>
          <Grid
            container={true}
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
          >
            <Grid item={true}>
              <Grid container={true} alignItems="center">
                <Link href="/">
                  <a className={classes.titleLink}>
                    <Typography
                      className={classes.title}
                      color="primary"
                      variant="subtitle1"
                    >
                      shiiinji-dev
                    </Typography>
                  </a>
                </Link>
              </Grid>
            </Grid>
            <Grid item={true}>
              <Hidden only={['xs']}>
                <Grid container={true}>
                  <BottomNavigation
                    className={classes.navigation}
                    onChange={handleChange}
                    showLabels={true}
                    value={router.pathname}
                  >
                    <BottomNavigationAction
                      icon={<Face />}
                      label="About"
                      value="/about"
                    />
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
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{props.children}</main>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    drawerHeader: theme.mixins.toolbar,
    toolbarContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      height: 'calc(100% - 56px)',
      marginTop: 56,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
    caption: {
      width: 230,
      fontSize: '12px',
      margin: theme.spacing(1),
      wordWrap: 'break-word',
    },
    icon: {
      fontSize: '13px',
    },
    link: {
      textDecoration: 'none',
      fontColor: 'black',
      color: 'black',
    },
    logoContainer: {
      width: 140,
      objectFit: 'cover',
      [theme.breakpoints.up('md')]: {
        width: 180,
      },
    },
    logo: {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    navigation: {
      backgroundColor: 'white',
    },
    title: {
      fontWeight: 'bold',
    },
    titleLink: {
      textDecoration: 'none',
    },
    toolbarRight: {
      marginLeft: 'auto',
    },
  }),
)

export default AppDrawer
