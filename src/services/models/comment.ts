import firebase from 'firebase/app'

export type Comment = {
  blogId: string
  commentId: string
  commentRef: firebase.firestore.DocumentReference
  userId: string
  userRef: firebase.firestore.DocumentReference
  author: string
  content: string
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}
