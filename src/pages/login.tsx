import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Container } from '@material-ui/core'

const Login = dynamic(import('@components/login'), {
  ssr: false,
})

export default function LoginPage() {
  return (
    <Container maxWidth="md">
      <Suspense fallback={<div />}>
        <Login />
      </Suspense>
    </Container>
  )
}
