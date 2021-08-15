import React from 'react'
import { RecoilRoot, MutableSnapshot } from 'recoil'
import { fireEvent, render, screen } from '@testing-library/react'
import { headlinesState } from '@store/atoms/headlines'
import { Headlines } from '../Headlines'

const headlineValue = [
  {
    id: '1',
    ref: React.createRef<HTMLDivElement>(),
    title: 'test1',
  },
  {
    id: '2',
    ref: React.createRef<HTMLDivElement>(),
    title: 'test2',
  },
]

const initializeState = ({ set }: MutableSnapshot) => {
  set(headlinesState, headlineValue)
}

describe('Headlines.tsx', () => {
  it('should not have headline', async () => {
    render(<Headlines />, { wrapper: RecoilRoot })

    const element = screen.queryByText('目次')
    expect(element).toBeNull()
  })

  it('should have headline', async () => {
    render(
      <RecoilRoot initializeState={initializeState}>
        <Headlines />
      </RecoilRoot>,
    )

    expect(screen.getByText('目次')).toBeInTheDocument()
    expect(screen.getByText('test1')).toBeInTheDocument()

    fireEvent.click(screen.getByText('test2'))
  })
})
