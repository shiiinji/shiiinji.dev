import React from 'react'
import { Provider } from 'urql'
import { act, render, screen, waitFor } from '@testing-library/react'
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

    act(async () => {
      await waitFor(() => screen.getByText('shinji.toys@gmail.com'))
      expect(asFragment()).toMatchSnapshot()
    })
  })
  it('renders: analytics-users', async () => {
    render(
      <Provider value={client}>
        <AnalyticsUsers />
      </Provider>,
    )

    act(async () => {
      await waitFor(() => screen.getByText('shinji.toys@gmail.com'))
      expect(screen.getByText('shinji.toys@gmail.com')).toBeInTheDocument()
      expect(screen.getByText('shiiinji')).toBeInTheDocument()
      expect(screen.getByText('2021/07/15')).toBeInTheDocument()
    })
  })
})
