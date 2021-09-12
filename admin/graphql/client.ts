import { createClient } from 'urql'

export const client = createClient({
  url: String(
    process.env.NEXT_PUBLIC_GRAPHQL_CLIENT ||
      'https://admin.shiiinji.dev/api/graphql',
  ),
  suspense: true,
  requestPolicy: 'cache-first',
})
