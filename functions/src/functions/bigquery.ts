import * as f from 'firebase-functions'
import bigquery from '@google-cloud/bigquery/build/src/types'
import { queryToBigquery } from '../utils/query-to-bigquery'
import { uploadFileToFirebaseStorage } from '../utils/upload-file-to-firebase-storage'

export const functions = <T>(
  query: string,
  fileName: string,
  path: string,
  outputCsv: boolean,
  insertRecordToFirestore?: (rows: T[]) => void,
) =>
  f
    .region(f.config().app.locale.region)
    .runWith({
      timeoutSeconds: 540,
      memory: '2GB',
    })
    .pubsub.schedule('every day 13:00')
    .timeZone(f.config().app.locale.timezone)
    .onRun(async () => {
      const [rows]: [T[], bigquery.IJob] = await queryToBigquery(query)

      if (!Array.isArray(rows)) {
        f.logger.log('queryが正しくありません')

        return
      }

      if (rows.length <= 0) {
        f.logger.log('結果がありません')

        return
      }

      if (insertRecordToFirestore) {
        await insertRecordToFirestore(rows)
      }

      if (outputCsv) {
        const headers = Object.keys(rows[0])
        await uploadFileToFirebaseStorage(headers, rows, fileName, path)
      }
    })
