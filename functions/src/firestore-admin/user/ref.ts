import admin from 'firebase-admin'
import { rootCollectionName } from '../../services/constants'

export function onUserRef(userId: string) {
  const db = admin.firestore()

  return db.collection(rootCollectionName.users).doc(userId)
}
