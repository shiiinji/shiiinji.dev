import admin from 'firebase-admin'
import { onUserRef } from './ref'
import { User } from '../../services/models/user'

export async function createUser(userRecord: admin.auth.UserRecord) {
  const doc = await onUserRef(userRecord.uid)

  const user: User = {
    userId: userRecord.uid,
    email: userRecord.email as string,
    githubId: userRecord.providerData[0].uid,
    displayName: userRecord.displayName as string,
    photoUrl: userRecord.photoURL as string,
    creationTime: userRecord.metadata.creationTime,
    lastSignInTime:
      userRecord.metadata.lastRefreshTime || userRecord.metadata.creationTime,
    createdAt: admin.firestore.Timestamp.fromDate(
      new Date(userRecord.metadata.creationTime),
    ),
    updatedAt: admin.firestore.Timestamp.fromDate(
      new Date(userRecord.metadata.creationTime),
    ),
  }

  await doc.set(user)
}
