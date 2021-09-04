import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import { attachCustomCommands } from 'cypress-firebase'

const fbConfig = firebase.initializeApp({
  apiKey: Cypress.env('REACT_APP_API_KEY'),
  authDomain: Cypress.env('REACT_APP_AUTH_DOMAIN'),
  databaseURL: Cypress.env('REACT_APP_DATABASE_URL'),
  projectId: Cypress.env('REACT_APP_PROJECT_ID'),
  storageBucket: Cypress.env('REACT_APP_STORAGE_BUCKET'),
  messagingSenderId: Cypress.env('REACT_APP_MESSAGING_SENDER_ID'),
  appId: Cypress.env('REACT_APP_APP_ID'),
  measurementId: Cypress.env('REACT_APP_MEASUREMENT_ID'),
})

if (firebase.apps.length === 0) {
  firebase.initializeApp(fbConfig)
}

attachCustomCommands({ Cypress, cy, firebase })
