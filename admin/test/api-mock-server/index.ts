/* eslint-disable */
// @ts-ignore
if (process.env.NODE_ENV === 'test') {
  module.exports = import('./server')
} else if (typeof window === 'undefined') {
  const { server } = require('./server')
  server.listen()
} else {
  const { worker } = require('./browser')
  worker.start()
}
