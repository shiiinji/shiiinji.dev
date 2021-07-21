import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react'
import { H1 } from './HtmlStyles'

export type Headline = {
  id: string
  title: ReactNode
}

export const CustomH1: React.FC<{
  id: string
  headlines: Headline[]
  setHeadline: Dispatch<SetStateAction<Headline[]>>
}> = ({ id, headlines, setHeadline, ...props }) => {
  useEffect(() => {
    setHeadline((prevState) => [...prevState, { id, title: props.children }])
  }, [id, headlines, props.children, setHeadline])

  return <H1 {...props} />
}
