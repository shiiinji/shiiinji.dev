import { User } from 'firebase/auth'
import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
  DocumentReference,
  Firestore,
} from 'firebase/firestore'
import { useFirestore } from 'reactfire'
import { rootCollectionName, subCollectionName } from '@services/constants'
import { Comment } from '@services/models/comment'

export const useNewCreateRef = (userId: string | undefined) => {
  const firestore = useFirestore()

  return [
    firestore,
    doc(
      collection(
        firestore,
        `${rootCollectionName.users}/${userId}/${subCollectionName.comments}`,
      ),
    ) as DocumentReference<Comment>,
  ] as const
}

export async function createComment(
  firestore: Firestore,
  content: string,
  ref: DocumentReference<Comment>,
  user: User,
  blogId: string,
) {
  const comment: Omit<Comment, 'createdAt' | 'updatedAt'> = {
    blogId,
    content,
    commentId: ref.id,
    commentRef: doc(
      firestore,
      `${rootCollectionName.users}/${user.uid}/${subCollectionName.comments}/${ref.id}`,
    ) as DocumentReference<Comment>,
    userId: user.uid,
    userRef: doc(firestore, `${rootCollectionName.users}/${user.uid}`),
    author: user.displayName as string,
  }

  await setDoc(ref, {
    ...comment,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export const deleteComment = (ref: DocumentReference<Comment>) => deleteDoc(ref)

export const updateComment = (
  content: string,
  ref: DocumentReference<Comment>,
) =>
  updateDoc(ref, {
    content,
    updatedAt: serverTimestamp(),
  })
