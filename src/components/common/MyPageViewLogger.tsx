import { useEffect } from 'react'
import { logEvent, setUserId } from 'firebase/analytics'
import { useAnalytics, useUser } from 'reactfire'

export default function MyPageViewLogger() {
  const analytics = useAnalytics()
  const { status, data: user } = useUser({ suspense: true })

  useEffect(() => {
    if (status === 'success' && user) {
      setUserId(analytics, user.uid, { global: true })
    }
  }, [analytics, status, user])

  // By passing `location.pathname` to the second argument of `useEffect`,
  // we only log on first render and when the `pathname` changes
  useEffect(() => {
    logEvent(analytics, 'page_view', { page_location: window.location.href })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href])

  return null
}
