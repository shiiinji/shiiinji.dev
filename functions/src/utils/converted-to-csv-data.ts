import iconv from 'iconv-lite'
import { Parser as Json2csvParser } from 'json2csv'

export const convertedToCsvData = (
  fields: any,
  data: any,
  encoding = 'utf-8',
) => {
  const json2csvParser = new Json2csvParser({ fields })
  let convertedCsvData = json2csvParser.parse(data)
  convertedCsvData = iconv.encode(convertedCsvData, encoding) as any

  return convertedCsvData
}
