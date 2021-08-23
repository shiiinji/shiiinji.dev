import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  scalar JSONObject

  type RegisterStatDateSeries {
    id: ID!
    date: JSONObject
    registrationNumber: Int
    createdAt: JSONObject
    updatedAt: JSONObject
  }

  type User {
    id: ID!
    email: String
    githubId: String
    displayName: String
    photoUrl: String
    creationTime: String
    lastSignInTime: String
    createdAt: JSONObject
    updatedAt: JSONObject
  }

  type Query {
    registerStatDateSeries: [RegisterStatDateSeries]
    users: [User]
  }
`
