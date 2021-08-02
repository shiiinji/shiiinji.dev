import firebase from 'firebase/app'

export type Row = {
  date: string
  registration_number: number
}

export type Register = {
  id: string
  date: firebase.firestore.Timestamp
  registrationNumber: number
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}
