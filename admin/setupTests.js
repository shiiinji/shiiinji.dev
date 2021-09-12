import '@testing-library/jest-dom/extend-expect'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { server } from './test/api-mock-server/server'

dotenv.config({ path: '.env' })

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

// make debug output for TestingLibrary Errors larger
process.env.DEBUG_PRINT_LIMIT = 15000

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
