import { useMemo } from 'react'
import { ApolloClient } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'
import { createHttpLink, ApolloLink } from '@apollo/client'
import { MultiAPILink } from '@habx/apollo-multi-endpoint-link'

let apolloClient: ApolloClient<any> | null = null

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      new MultiAPILink({
        endpoints: {
          graphcms: String(process.env.NEXT_PUBLIC_GRAPH_CMS_PATH),
          github: String(process.env.NEXT_PUBLIC_GITHUB_API_PATH),
        },
        getContext: (endpoints) => {
          if (endpoints === 'github') {
            return {
              headers: {
                authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              },
            }
          }

          return {
            headers: {
              authorization: `Bearer ${process.env.NEXT_PUBLIC_APOLLO_QUERY_TOKEN}`,
            },
          }
        },
        httpSuffix: '',
        createHttpLink: () => createHttpLink(),
      }),
    ]),
    cache: new InMemoryCache(),
  })

export function initializeApollo(initialState: unknown = null) {
  // eslint-disable-next-line
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const useApollo = (initialState: unknown) =>
  useMemo(() => initializeApollo(initialState), [initialState])
