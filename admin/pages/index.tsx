import React from 'react'
import { AppDrawer, Route } from '@components/AppDrawer'

export default function IndexPage() {
  return (
    <AppDrawer route={Route.dashboard} title="ダッシュボード">
      <></>
    </AppDrawer>
  )
}
