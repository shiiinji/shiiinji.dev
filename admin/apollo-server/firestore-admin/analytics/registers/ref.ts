import admin from 'firebase-admin'
import {
  rootCollectionName,
  subRootCollectionName,
} from '../../../services/constants'

export function onAnalyticsRegisterCollectionRef() {
  const db = admin.firestore()

  return db
    .collection(rootCollectionName.analytics)
    .doc(rootCollectionName.analytics)
    .collection(subRootCollectionName.register)
}
