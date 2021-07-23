module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/next-env.d.ts'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/components/$1',
    '@containers/(.*)': '<rootDir>/containers/$1',
    '@graphql/(.*)': '<rootDir>/graphql/$1',
    '@hooks/(.*)': '<rootDir>/hooks/$1',
    '@reducers/(.*)': '<rootDir>/reducers/$1',
    '@services/(.*)': '<rootDir>/services/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
    '@utils/(.*)': '<rootDir>/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}
