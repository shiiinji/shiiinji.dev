import React from 'react'
import { Provider } from 'urql'
import { render, screen } from '@testing-library/react'
import { client } from '@graphql/client'
import AnalyticsUsers from '@pages/analytics/users'

describe('/analytics/users/index.test.tsx', () => {
  it('render: loading', async () => {
    const { asFragment } = render(
      <Provider value={client}>
        <AnalyticsUsers />
      </Provider>,
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders: analytics-users snapshot', async () => {
    const { asFragment } = render(
      <Provider value={client}>
        <AnalyticsUsers />
      </Provider>,
    )

    // TODO Improve Waiting Suspense Rendering
    await new Promise((r) => setTimeout(r, 2000))

    expect(asFragment()).toMatchSnapshot()
  })
  it('renders: analytics-users', async () => {
    render(
      <Provider value={client}>
        <AnalyticsUsers />
      </Provider>,
    )

    // TODO Improve Waiting Suspense Rendering
    await new Promise((r) => setTimeout(r, 2000))

    expect(screen.getByText('shinji.toys@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('shiiinji')).toBeInTheDocument()
    expect(screen.getByText('2021/07/15')).toBeInTheDocument()
  })
})
