import React from 'react'
import Link from 'next/link'
import { Button } from '@material-ui/core'

type Props = {
  redirectUrl: string
  promptText: string
}

export const PromptLogin: React.VFC<Props> = (props) => (
  <Link href={`/login?redirectUrl=${props.redirectUrl}`}>
    <Button
      color="primary"
      data-testid="prompt-login-button"
      variant="contained"
    >
      {props.promptText}
    </Button>
  </Link>
)
