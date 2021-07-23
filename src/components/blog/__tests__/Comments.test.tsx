import React from 'react'
import dayjs from 'dayjs'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { render, screen } from '@testing-library/react'
import { Comments } from '../Comments'

/* eslint @typescript-eslint/no-var-requires: 0 */
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const useFindComments = jest.spyOn(
  require('@hooks/useComments'),
  'useFindComments',
)

const comments = [
  {
    commentId: 123456789,
    author: 'Shinji Teramoto',
    content: 'test',
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  },
  {
    commentId: 123456788,
    author: '寺本真之',
    content: 'hello world',
    createdAt: firebase.firestore.Timestamp.fromDate(new Date('2021-07-22')),
  },
] as const

describe('Comments.tsx', () => {
  useRouter.mockImplementationOnce(() => ({
    query: { id: 'test' },
  }))
  useFindComments.mockImplementationOnce(() => comments)

  it('コメントエリアのレンダリング', async () => {
    render(<Comments />)

    expect(screen.getByText(comments[0].author)).toBeInTheDocument()
    expect(screen.getByText(comments[0].content)).toBeInTheDocument()
    expect(
      screen.getByText(
        dayjs(comments[0].createdAt.toDate()).format('YYYY/MM/DD'),
      ),
    ).toBeInTheDocument()

    expect(screen.getByText(comments[1].author)).toBeInTheDocument()
    expect(screen.getByText(comments[1].content)).toBeInTheDocument()
    expect(
      screen.getByText(
        dayjs(comments[1].createdAt.toDate()).format('YYYY/MM/DD'),
      ),
    ).toBeInTheDocument()
  })
})
