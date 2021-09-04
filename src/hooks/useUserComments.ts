import {
  collection,
  orderBy,
  query,
  CollectionReference,
} from 'firebase/firestore'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { rootCollectionName, subCollectionName } from '@services/constants'
import { Comment } from '@services/models/comment'

export const useCollectionRef = (userId: string) => {
  const firestore = useFirestore()

  return collection(
    firestore,
    `${rootCollectionName.users}/${userId}/${subCollectionName.comments}`,
  ) as CollectionReference<Comment>
}

export const useFindUserComments = (ref: CollectionReference<Comment>) => {
  const userCommentsQuery = query(ref, orderBy('updatedAt', 'desc'))

  const { data, error, status } = useFirestoreCollectionData<Comment>(
    userCommentsQuery,
    {
      suspense: false,
    },
  )

  return { data, error, status }
}
