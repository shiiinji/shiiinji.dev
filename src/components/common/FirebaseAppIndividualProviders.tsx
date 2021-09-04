import React from 'react'
import {
  AnalyticsProvider,
  AuthProvider,
  FirestoreProvider,
  useFirebaseApp,
} from 'reactfire'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

export default function FirebaseAppIndividualProviders(
  props: React.PropsWithChildren<unknown>,
) {
  const app = useFirebaseApp()

  return (
    <AuthProvider sdk={getAuth(app)}>
      <AnalyticsProvider sdk={getAnalytics(app)}>
        <FirestoreProvider sdk={getFirestore(app)}>
          {props.children}
        </FirestoreProvider>
      </AnalyticsProvider>
    </AuthProvider>
  )
}
