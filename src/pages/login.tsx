import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Login = dynamic(import('../components/Login'), {
  ssr: false,
})

export default function LoginPage() {
  return (
    <>
      <Suspense fallback={<div />}>
        <Login />
      </Suspense>
    </>
  )
}
