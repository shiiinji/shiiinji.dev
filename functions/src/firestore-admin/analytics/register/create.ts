import admin from 'firebase-admin'
import { onAnalyticsRegisterRef } from './ref'
import { Row } from '../../../services/models/analytics/register'

export async function createAnalyticsRegister(row: Row) {
  const docSnap = await onAnalyticsRegisterRef(row.date).get()

  if (docSnap.exists) {
    await docSnap.ref.set(
      {
        registrationNumber: row.registration_number,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    )
  } else {
    await docSnap.ref.set({
      registerId: docSnap.id,
      data: admin.firestore.Timestamp.fromDate(new Date(row.date)),
      registrationNumber: row.registration_number,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    })
  }
}
