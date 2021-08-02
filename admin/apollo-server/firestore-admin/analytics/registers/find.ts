import { onAnalyticsRegisterCollectionRef } from './ref'
import { Register } from '../../../services/models/analytics/register'

export const findAnalyticsRegisterList = async () => {
  const querySnap = await onAnalyticsRegisterCollectionRef().get()

  return querySnap.docs.map((doc) => doc.data() as Register)
}
