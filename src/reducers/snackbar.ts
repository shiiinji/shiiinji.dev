import React from 'react'
import { Unpacked } from '@services/types'

export type SnackBarState = {
  isOpen: boolean
  message: string
}

export type SnackbarAction = {
  type: SnackbarActionTypes
  payload: SnackBarState
}

export const SnackbarActionType = {
  ACTION_OPEN_SNACKBAR: 'ACTION_OPEN_SNACKBAR',
  ACTION_CLOSE_SNACKBAR: 'ACTION_CLOSE_SNACKBAR',
} as const

export type SnackbarActionTypes = Unpacked<typeof SnackbarActionType>

export const initialState: SnackBarState = {
  isOpen: false,
  message: '',
}

export const reducer: React.Reducer<SnackBarState, SnackbarAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case SnackbarActionType.ACTION_OPEN_SNACKBAR: {
      return {
        ...state,
        isOpen: true,
        message: action.payload.message,
      }
    }
    case SnackbarActionType.ACTION_CLOSE_SNACKBAR: {
      return {
        ...state,
        isOpen: false,
        message: '',
      }
    }
    default: {
      throw new Error()
    }
  }
}
