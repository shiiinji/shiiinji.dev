import admin from 'firebase-admin'
import { forEach } from 'lodash'

admin.initializeApp()

const functionMap = {}

const loadFunctions = (fnMap: typeof functionMap) => {
  forEach(fnMap, (path, functionName) => {
    // eslint-disable-next-line
    module.exports[functionName] = require(path)
  })
}

loadFunctions(functionMap)
