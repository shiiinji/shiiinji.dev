import { createClient } from 'urql'

export const client = createClient({
  url: '/api/graphql',
  suspense: true,
  requestPolicy: 'cache-first',
})
