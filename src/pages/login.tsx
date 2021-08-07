import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { Container } from '@material-ui/core'

const Login = dynamic(import('@components/login'), {
  ssr: false,
})

export default function LoginPage() {
  return (
    <>
      <NextSeo
        title="ログインページ | shiiinji.dev"
        description="shiiinji.devのログインページです。"
        canonical="https://shiiinji-dev.vercel.app/login"
        openGraph={{
          url: 'https://shiiinji-dev.vercel.app/login',
          title: 'ログインページ | shiiinji.dev',
          description: 'shiiinji.devのログインページです。',
        }}
      />
      <Container maxWidth="md">
        <Suspense fallback={<div />}>
          <Login />
        </Suspense>
      </Container>
    </>
  )
}
