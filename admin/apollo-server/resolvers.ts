import { TimestampResolver } from 'firestore-graphql-scalars'

export const resolvers = {
  Timestamp: TimestampResolver,
  Query: {
    registerStatDateSeries: () => [],
    users: () => [],
  },
}
