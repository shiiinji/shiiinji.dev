import React, { Suspense } from 'react'
import { Container } from '@material-ui/core/'
import { SkeletonView } from '@components/common/skeleton/SkeletonView'
import { View } from './View'

export const AnalyticsUsers = () => (
  <Container disableGutters={true}>
    <Suspense fallback={<SkeletonView />}>
      <View />
    </Suspense>
  </Container>
)
