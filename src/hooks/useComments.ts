import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { subCollectionName } from '@services/constants'
import { Comment } from '@services/models/comment'

export const useCreateCollectionGroupRef = () =>
  useFirestore().collectionGroup(subCollectionName.comments)

export const useFindComments = (blogId: string) => {
  const query = useFirestore()
    .collectionGroup(subCollectionName.comments)
    .where('blogId', '==', blogId)
    .orderBy('createdAt', 'desc')

  const { data: comments } = useFirestoreCollectionData<Comment>(query, {
    suspense: true,
  })

  return comments
}
