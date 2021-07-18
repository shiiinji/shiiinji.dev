import React from 'react'
import Link from 'next/link'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  CssBaseline,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Dashboard, Settings, Storage, Stop } from '@material-ui/icons'

export const Route = {
  dashboard: 'dashboard',
  register: 'register',
  settings: 'settings',
} as const

type Props = {
  route: typeof Route[keyof typeof Route]
  title: string
}

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
)

export const AppDrawer: React.FC<Props> = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="transparent" className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap={true}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          <ListItem button={true}>
            <ListItemText primary="shiiinji.dev admin" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <Link href="/dashboard">
            <ListItem button={true} selected={props.route === Route.dashboard}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="ダッシュボード" />
            </ListItem>
          </Link>
          <ListItem button={true}>
            <ListItemIcon>
              <Storage />
            </ListItemIcon>
            <ListItemText primary="分析" />
          </ListItem>
          <Collapse in={true}>
            <Link href="/analytics/register">
              <ListItem
                button={true}
                className={classes.nested}
                selected={props.route === Route.register}
              >
                <ListItemIcon>
                  <Stop />
                </ListItemIcon>
                <ListItemText primary="ユーザー登録日" />
              </ListItem>
            </Link>
          </Collapse>
          <Link href="/settings">
            <ListItem button={true} selected={props.route === Route.settings}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="設定" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>{props.children}</main>
    </div>
  )
}
