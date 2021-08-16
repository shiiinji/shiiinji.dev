import firebase from 'firebase/app'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { rootCollectionName, subCollectionName } from '@services/constants'
import { Comment } from '@services/models/comment'

export const useCollectionRef = (userId: string) =>
  useFirestore()
    .collection(rootCollectionName.users)
    .doc(userId)
    .collection(subCollectionName.comments)

export const useFindUserComments = (
  ref: firebase.firestore.CollectionReference,
) => {
  const query = ref.orderBy('updatedAt', 'desc')
  const { data: comments } = useFirestoreCollectionData<Comment>(query, {
    suspense: true,
  })

  return comments
}
