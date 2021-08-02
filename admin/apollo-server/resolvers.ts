import { TimestampResolver } from 'firestore-graphql-scalars'
import { findAnalyticsRegisterList } from './firestore-admin/analytics/registers/find'
import { findUserList } from './firestore-admin/users/find'

export const resolvers = {
  Timestamp: TimestampResolver,
  Query: {
    registerStatDateSeries: () => findAnalyticsRegisterList(),
    users: () => findUserList(),
  },
}
