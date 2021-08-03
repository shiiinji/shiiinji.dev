import { atom } from 'recoil'
import { RecoilAtomKeys } from '../RecoilKeys'

export type Snackbar = {
  isOpen: boolean
  message: string
}

export const snackbarState = atom<Snackbar>({
  key: RecoilAtomKeys.SNACKBAR,
  default: { isOpen: false, message: '' },
})
