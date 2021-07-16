import React from 'react'
import { useRouter } from 'next/router'
import { useFindComments } from '@hooks/useComments'
import { Comment } from './Comment'

export function Comments() {
  const router = useRouter()
  const comments = useFindComments(router.query.id as string)

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </>
  )
}
