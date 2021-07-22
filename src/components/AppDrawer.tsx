import React from 'react'
import Link from 'next/link'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Grid, Hidden, Toolbar, Typography } from '@material-ui/core'
import { Navigation } from './Navigation'

export const AppDrawer: React.FC = () => {
  const classes = useStyles()

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
                      color="textPrimary"
                      variant="h6"
                    >
                      shiiinji.dev
                    </Typography>
                  </a>
                </Link>
              </Grid>
            </Grid>
            <Grid item={true}>
              <Hidden only={['xs']}>
                <Grid container={true}>
                  <Navigation position="top" />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
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
      marginTop: 56,
      [theme.breakpoints.up('sm')]: {
        marginTop: 64,
      },
    },
    title: {
      fontWeight: 'bold',
    },
    titleLink: {
      textDecoration: 'none',
    },
  }),
)
