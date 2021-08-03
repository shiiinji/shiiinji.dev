import { atom } from 'recoil'
import { ReactNode, RefObject } from 'react'
import { RecoilAtomKeys } from '../RecoilKeys'

export type Headline = {
  id: string
  ref: RefObject<HTMLDivElement>
  title: ReactNode
}

export const headlinesState = atom<Headline[]>({
  key: RecoilAtomKeys.HEADLINES,
  default: [],
})
