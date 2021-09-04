import { DocumentReference, Timestamp } from 'firebase/firestore'

export type Comment = {
  blogId: string
  commentId: string
  commentRef: DocumentReference<Comment>
  userId: string
  userRef: DocumentReference
  author: string
  content: string
  createdAt: Timestamp
  updatedAt: Timestamp
}
