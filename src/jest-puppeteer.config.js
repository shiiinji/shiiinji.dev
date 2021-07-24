const port = 3000

process.env.TEST_SERVER_PORT = port

module.exports = {
  headless: true,
  server: {
    port,
    command: `yarn start --port ${port}`,
    launchTimeout: 10000,
  },
}
