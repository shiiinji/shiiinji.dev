import * as functions from 'firebase-functions'
import { createUser } from '../firestore-admin/user/create'

module.exports = functions
  .region(functions.config().app.locale.region)
  .auth.user()
  .onCreate(async (user) => {
    await createUser(user)
  })
