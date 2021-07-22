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
  setHeadline: Dispatch<SetStateAction<Headline[]>>
}> = ({ id, setHeadline, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeadline((prevState) => [
      ...prevState,
      { id, ref, title: props.children },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <H1 ref={ref} id={id} {...props} />
}
