import { GraphQLJSONObject } from 'graphql-type-json'
import { findAnalyticsRegisterList } from './firestore-admin/analytics/registers/find'
import { findUserList } from './firestore-admin/users/find'

export const resolvers = {
  JSONObject: GraphQLJSONObject,
  Query: {
    registerStatDateSeries: () => findAnalyticsRegisterList(),
    users: () => findUserList(),
  },
}
