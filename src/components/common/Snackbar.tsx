import React from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { snackbarState } from '@store/atoms/snackbar'

export function SnackbarView() {
  const classes = useStyles()
  const snackbar = useRecoilValue(snackbarState)
  const resetSnackbar = useResetRecoilState(snackbarState)

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={snackbar.isOpen}
      autoHideDuration={8000}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={() => resetSnackbar()}
        >
          <CloseIcon />
        </IconButton>
      }
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={
        <span id="message-id" data-testid="message">
          {snackbar.message}
        </span>
      }
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
