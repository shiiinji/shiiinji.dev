import gql from 'graphql-tag'
import * as Urql from 'urql'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any
}

export type Query = {
  __typename?: 'Query'
  registerStatDateSeries?: Maybe<Array<Maybe<RegisterStatDateSeries>>>
  users?: Maybe<Array<Maybe<User>>>
}

export type RegisterStatDateSeries = {
  __typename?: 'RegisterStatDateSeries'
  id: Scalars['ID']
  date?: Maybe<Scalars['JSONObject']>
  registrationNumber?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['JSONObject']>
  updatedAt?: Maybe<Scalars['JSONObject']>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  email?: Maybe<Scalars['String']>
  githubId?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
  creationTime?: Maybe<Scalars['String']>
  lastSignInTime?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['JSONObject']>
  updatedAt?: Maybe<Scalars['JSONObject']>
}

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetUsersQuery = {
  __typename?: 'Query'
  users?: Maybe<
    Array<
      Maybe<{
        __typename?: 'User'
        id: string
        githubId?: Maybe<string>
        email?: Maybe<string>
        displayName?: Maybe<string>
        photoUrl?: Maybe<string>
        creationTime?: Maybe<string>
        lastSignInTime?: Maybe<string>
      }>
    >
  >
}

export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      githubId
      email
      displayName
      photoUrl
      creationTime
      lastSignInTime
    }
  }
`

export const useGetUsersQuery = (
  options: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'> = {},
) => Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options })
