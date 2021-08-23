import { ApolloServer } from 'apollo-server-micro'
import admin from 'firebase-admin'
import { schema } from '../../apollo-server/shema'

try {
  if (process.env.LOCAL_RUN) {
    const cert = {
      projectId: String(process.env.FIREBASE_PROJECT_ID),
      clientEmail: String(process.env.FIREBASE_CLIENT_EMAIL),
      privateKey: String(process.env.FIREBASE_PRIVATE_KEY).replace(
        /\\n/g,
        '\n',
      ),
    }
    admin.initializeApp({
      credential: admin.credential.cert(cert),
    })
  } else {
    admin.initializeApp()
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(e)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({
  schema,
})
await apolloServer.start()

export default apolloServer.createHandler({
  path: '/api/graphql',
})
