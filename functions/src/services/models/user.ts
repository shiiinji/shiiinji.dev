import firebase from 'firebase/app'

export type User = {
  userId: string
  email: string
  githubId: string
  displayName: string
  photoUrl: string
  creationTime: string
  lastSignInTime: string
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}
