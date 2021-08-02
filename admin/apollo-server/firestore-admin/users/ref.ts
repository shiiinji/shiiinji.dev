import admin from 'firebase-admin'
import { rootCollectionName } from '../../services/constants'

export function onUserCollectionRef() {
  const db = admin.firestore()

  return db.collection(rootCollectionName.users)
}
