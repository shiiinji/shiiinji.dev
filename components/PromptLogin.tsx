import React from 'react'
import { useRouter } from 'next/router'
import { Button, Typography } from '@material-ui/core'

type Props = {
  redirectUrl: string
  promptText: string
}

export function PromptLogin(props: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/login?redirectUrl=${props.redirectUrl}`)
  }

  return (
    <>
      <Button color="primary" onClick={handleClick} variant="contained">
        ログイン
      </Button>
      <Typography color="textSecondary">{props.promptText}</Typography>
    </>
  )
}
