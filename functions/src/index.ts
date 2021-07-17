import admin from 'firebase-admin'
import { forEach } from 'lodash'

admin.initializeApp()

const functionMap = {
  bigquery_scheduled_register: './pubsub/bigquery/register',
  create_user_firestore: './triggers/create-user-firestore',
}

const loadFunctions = (fnMap: typeof functionMap) => {
  forEach(fnMap, (path, functionName) => {
    // eslint-disable-next-line
    module.exports[functionName] = require(path)
  })
}

loadFunctions(functionMap)
