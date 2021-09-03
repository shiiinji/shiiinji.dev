import {
  collectionGroup,
  orderBy,
  query,
  where,
  Query,
} from 'firebase/firestore'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { subCollectionName } from '@services/constants'
import { Comment } from '@services/models/comment'

export const useCreateCollectionGroupRef = () => {
  const firestore = useFirestore()

  return [
    firestore,
    collectionGroup(firestore, subCollectionName.comments) as Query<Comment>,
  ] as const
}

export const useFindComments = (
  commentsQueryRef: Query<Comment>,
  blogId: string,
) => {
  const commentsQuery = query<Comment>(
    commentsQueryRef,
    where('blogId', '==', blogId),
    orderBy('createdAt', 'desc'),
  )

  const { data: comments } = useFirestoreCollectionData<Comment>(
    commentsQuery,
    {
      suspense: true,
    },
  )

  return comments
}
