import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  scalar Timestamp

  type RegisterStatDateSeries {
    id: ID!
    date: Timestamp!
    registrationNumber: Int!
    createdAt: Timestamp!
    updatedAt: Timestamp!
  }

  type User {
    id: ID!
    email: String!
    githubId: String!
    displayName: String!
    photoUrl: String!
    creationTime: Timestamp!
    lastSignInTime: Timestamp!
    createdAt: Timestamp!
    updatedAt: Timestamp!
  }

  type Query {
    registerStatDateSeries: [RegisterStatDateSeries]
    users: [User]
  }
`
