import React from 'react'
import { useRouter } from 'next/router'
import {
  useCreateCollectionGroupRef,
  useFindComments,
} from '@hooks/useComments'
import { Comment } from './Comment'

export function Comments() {
  const router = useRouter()
  const [, commentsQueryRef] = useCreateCollectionGroupRef()
  const comments = useFindComments(commentsQueryRef, router.query.id as string)

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </>
  )
}
