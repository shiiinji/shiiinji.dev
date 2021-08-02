import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo-server/shema'

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
