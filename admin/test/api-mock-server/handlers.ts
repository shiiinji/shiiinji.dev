import { graphql, GraphQLContext } from 'msw'
import { GetUsersQuery } from '@services/api/client'

export const handlers = [
  graphql.query(
    'getUsers',
    (_req, res, ctx: GraphQLContext<Pick<GetUsersQuery, 'users'>>) => {
      return res(
        ctx.data({
          users: [
            {
              __typename: 'User',
              id: 'n5GnT6rnVaeQD6UzA6tga8lmgsN2',
              githubId: '1259486',
              email: 'shinji.toys@gmail.com',
              displayName: 'shiiinji',
              photoUrl: 'https://avatars.githubusercontent.com/u/1259486?v=4',
              creationTime: '2021-07-15T12:59:25Z',
              lastSignInTime: '2021-07-15T12:59:25Z',
            },
            {
              __typename: 'User',
              id: 'n5GnT6rnVaeQD6UzA6tga8lmgsN3',
              githubId: '1259487',
              email: 'shinji.toys+2@gmail.com',
              displayName: 'shiiinji+2',
              photoUrl: 'https://avatars.githubusercontent.com/u/1259487?v=4',
              creationTime: '2021-07-16T12:59:25Z',
              lastSignInTime: '2021-07-16T12:59:25Z',
            },
          ],
        }),
      )
    },
  ),
]
