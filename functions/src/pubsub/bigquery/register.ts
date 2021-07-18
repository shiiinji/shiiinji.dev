import * as f from 'firebase-functions'
import { functions } from '../../functions/bigquery'
import { createAnalyticsRegister } from '../../firestore-admin/analytics/register/create'
import { Row } from '../../services/models/analytics/register'

const fileName = 'register.csv'
const path = 'analytics'

const query = `
with
  users as (
    select
      json_extract_scalar(data, "$.userId") as user_id,
      json_extract_scalar(data, "$.creationTime") as creation_time
    from
      \`${f.config().app.bigquery.app}.firestore_export.users_raw_latest\`
  ),
  users_summary as (
    select
      format_timestamp('%Y-%m-%d', timestamp(creation_time), 'Asia/Tokyo') as signup_date,
      count(creation_time) as registration_number
    from
      users
    group by
      creation_time
  ),
  date_series as (
    select
      cast(date as string) as date
    from 
      unnest(generate_date_array("2021-07-12", current_date(), interval 1 day) ) as date
  )
    
select
  date_series.date,
  ifnull(users_summary.registration_number, 0) as registration_number
from
  date_series
left outer join users_summary
  on date_series.date = users_summary.signup_date
order by 
  date asc
`

function insertRecordToFirestore(rows: Row[]) {
  rows.forEach((row) => {
    createAnalyticsRegister(row)
  })
}

module.exports = functions<Row>(
  query,
  fileName,
  path,
  true,
  insertRecordToFirestore,
)
