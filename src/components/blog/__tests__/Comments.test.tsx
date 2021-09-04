import React from 'react'
import dayjs from 'dayjs'
import { Timestamp } from 'firebase/firestore'
import { render, screen } from '@testing-library/react'
import { Comments } from '../Comments'

/* eslint @typescript-eslint/no-var-requires: 0 */
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const comments = [
  {
    commentId: 123456789,
    author: 'Shinji Teramoto',
    content: 'test',
    createdAt: Timestamp.fromDate(new Date()),
  },
  {
    commentId: 123456788,
    author: '寺本真之',
    content: 'hello world',
    createdAt: Timestamp.fromDate(new Date('2021-07-22')),
  },
] as const

jest.mock('@hooks/useComments', () => ({
  /* eslint no-sparse-arrays: 0 */
  useCreateCollectionGroupRef: jest.fn(() => [,]),
  useFindComments: jest.fn(() => comments),
  /* eslint no-sparse-arrays: 0 */
  useNewCreateRef: jest.fn(() => [,]),
}))

describe('Comments.tsx', () => {
  useRouter.mockImplementation(() => ({
    query: { id: 'test' },
  }))
  // useFindComments.mockImplementation(() => comments)

  it('Comments renders with correct comments array', async () => {
    render(<Comments />)

    comments.forEach((comment) => {
      expect(screen.getByText(comment.author)).toBeInTheDocument()
      expect(screen.getByText(comment.content)).toBeInTheDocument()
      expect(
        screen.getByText(
          dayjs(comment.createdAt.toDate()).format('YYYY/MM/DD'),
        ),
      ).toBeInTheDocument()
    })
  })
})
