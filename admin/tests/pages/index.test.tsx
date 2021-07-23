import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'

describe('index.tsx', () => {
  it('トップページのレンダリング', async () => {
    const { render } = await getPage({
      route: '/',
    })
    render()

    expect(screen.getByText('shiiinji.dev admin')).toBeInTheDocument()
  })
})
