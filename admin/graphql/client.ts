import { createClient } from 'urql'

export const client = createClient({
  url: 'http://localhost:8080/api/graphql',
  suspense: true,
  requestPolicy: 'cache-first',
})
