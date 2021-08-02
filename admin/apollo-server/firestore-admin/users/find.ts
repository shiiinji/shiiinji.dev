import { onUserCollectionRef } from './ref'
import { User } from '../../services/models/user'

export const findUserList = async () => {
  const querySnap = await onUserCollectionRef().get()

  return querySnap.docs.map((doc) => doc.data() as User)
}
