import React from 'react'
import { AnalyticsUsers } from '@components/analytics/users'
import { AppDrawer, Route } from '@components/common/AppDrawer'

export default function AnalyticsUsersPage() {
  return (
    <AppDrawer route={Route.analyticsUsers} title="分析 | ユーザー">
      <AnalyticsUsers />
    </AppDrawer>
  )
}
