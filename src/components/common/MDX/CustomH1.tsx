import React, { useRef, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { headlinesState } from '@store/atoms/headlines'
import { H1 } from './HtmlStyles'

export const CustomH1: React.FC<{
  id: string
}> = ({ id, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const setHeadline = useSetRecoilState(headlinesState)

  useEffect(() => {
    setHeadline((prevState) => [
      ...prevState,
      { id, ref, title: props.children },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <H1 id={id} ref={ref} {...props} />
}
