import React, {
  useRef,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useEffect,
} from 'react'
import { H1 } from './HtmlStyles'

export type Headline = {
  id: string
  ref: RefObject<HTMLDivElement>
  title: ReactNode
}

export const CustomH1: React.FC<{
  id: string
  headlines: Headline[]
  setHeadline: Dispatch<SetStateAction<Headline[]>>
}> = ({ id, headlines, setHeadline, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeadline((prevState) => [
      ...prevState,
      { id, ref, title: props.children },
    ])
  }, [id, headlines, props.children, setHeadline, ref])

  return <H1 ref={ref} id={id} {...props} />
}
