import React from 'react'
import { NextSeo } from 'next-seo'
import { MyPageComments } from '@components/mypage/comments'

export default function MyPageCommentsPage() {
  return (
    <>
      <NextSeo
        title="Comments | shiiinji.dev"
        description="shiiinji.devのコメント管理ページです。"
        canonical="https://shiiinji.dev/mypage/comments"
        openGraph={{
          url: 'https://shiiinji.dev/mypage/comments',
          title: 'コメント管理 | shiiinji.dev',
          description: 'shiiinji.devのコメント管理ページです。',
        }}
      />
      <MyPageComments />
    </>
  )
}
