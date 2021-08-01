import admin from 'firebase-admin'
import { onAnalyticsRegisterRef } from './ref'
import { Register, Row } from '../../../services/models/analytics/register'

export async function createAnalyticsRegister(row: Row) {
  const docSnap = await onAnalyticsRegisterRef(row.date).get()

  if (docSnap.exists) {
    const register: Pick<Register, 'registrationNumber' | 'updatedAt'> = {
      registrationNumber: row.registration_number,
      updatedAt: admin.firestore.Timestamp.fromDate(new Date()),
    }
    await docSnap.ref.set(
      {
        ...register,
      },
      { merge: true },
    )
  } else {
    const register: Register = {
      id: docSnap.id,
      date: admin.firestore.Timestamp.fromDate(new Date(row.date)),
      registrationNumber: row.registration_number,
      createdAt: admin.firestore.Timestamp.fromDate(new Date()),
      updatedAt: admin.firestore.Timestamp.fromDate(new Date()),
    }
    await docSnap.ref.set({
      ...register,
    })
  }
}
