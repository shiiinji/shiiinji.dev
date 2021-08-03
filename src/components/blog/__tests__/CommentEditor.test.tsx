import React from 'react'
import { RecoilRoot } from 'recoil'
import { fireEvent, render, screen } from '@testing-library/react'
import { CommentEditor } from '../CommentEditor'

jest.mock('reactfire', () => ({
  useAnalytics: jest.fn(),
  useUser: () => ({ data: {} }),
}))
jest.mock('@hooks/useComment', () => ({
  createComment: jest.fn(),
  useNewCreateRef: jest.fn(),
}))

/* eslint @typescript-eslint/no-var-requires: 0 */
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Comments.tsx', () => {
  useRouter.mockImplementation(() => ({
    query: { id: 'test' },
  }))

  it('SnackbarView should open after submit a comment correctly', async () => {
    render(
      <RecoilRoot>
        <CommentEditor />
      </RecoilRoot>,
    )

    const element = screen.queryByRole('alert')
    expect(element).toBeNull()

    fireEvent.change(screen.getByTestId('content-input'), {
      target: { value: '記事についての質問です' },
    })
    fireEvent.click(screen.getByTestId('submit'))
    await screen.findByRole('alert')
    expect(screen.getByRole('alert', {})).toBeInTheDocument()
  })
})
