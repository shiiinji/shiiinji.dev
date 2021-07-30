import React from 'react'
import { IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {
  SnackbarAction,
  SnackbarActionType,
  SnackBarState,
} from '@reducers/snackbar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

type Props = {
  state: SnackBarState
  dispatch: React.Dispatch<SnackbarAction>
}

export function SnackbarView(props: Props) {
  const classes = useStyles()

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={props.state.isOpen}
      autoHideDuration={8000}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={() =>
            props.dispatch({
              type: SnackbarActionType.ACTION_CLOSE_SNACKBAR,
              payload: { ...props.state },
            })
          }
        >
          <CloseIcon />
        </IconButton>
      }
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{props.state.message}</span>}
    />
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
)
