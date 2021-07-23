import React from 'react'
import { render, screen } from '@testing-library/react'
import { AppDrawer, Route } from '../AppDrawer'

describe('AppDrawer.tsx', () => {
  const title = 'テストタイトル'
  const route = Route.dashboard
  it('AppDrawerのtitle propsのレンダリング', async () => {
    render(<AppDrawer route={route} title={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
