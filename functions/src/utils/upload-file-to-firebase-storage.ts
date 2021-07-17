import admin from 'firebase-admin'
import fs from 'fs'
import * as functions from 'firebase-functions'
import { convertedToCsvData } from './converted-to-csv-data'

export async function uploadFileToFirebaseStorage(
  headers: string[],
  rows: any[],
  fileName: string,
  path: string,
) {
  const convertedCsvData = await convertedToCsvData(headers, rows, 'utf-8')
  fs.writeFileSync(`/tmp/${fileName}`, convertedCsvData)
  await admin
    .storage()
    .bucket(functions.config().app.firebase.storage.bucket)
    .upload(`/tmp/${fileName}`, {
      destination: `${path}/${fileName}`,
      resumable: false,
    })
}
