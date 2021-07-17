import { BigQuery } from '@google-cloud/bigquery'

export async function queryToBigquery(query: string) {
  const bigQueryClient = new BigQuery()
  const options = {
    query,
    useLegacySql: false,
  }

  return bigQueryClient.query({ ...options })
}
