import { createClient } from 'urql'

export const client = createClient({
  url: String(process.env.NEXT_PUBLIC_GITHUB_API_PATH),
  fetchOptions: {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  },
  requestPolicy: 'cache-first',
})
