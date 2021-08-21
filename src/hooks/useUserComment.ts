import firebase from 'firebase/app'
import { useFirestore } from 'reactfire'
import { rootCollectionName, subCollectionName } from '@services/constants'
import { Comment } from '@services/models/comment'

export const useNewCreateRef = (userId: string) =>
  useFirestore()
    .collection(rootCollectionName.users)
    .doc(userId)
    .collection(subCollectionName.comments)
    .doc() as firebase.firestore.DocumentReference<Comment>

export async function createComment(
  content: string,
  ref: firebase.firestore.DocumentReference<Comment>,
  user: firebase.User,
  blogId: string,
) {
  const comment: Omit<Comment, 'createdAt' | 'updatedAt'> = {
    blogId,
    content,
    commentId: ref.id,
    commentRef: firebase
      .firestore()
      .collection(rootCollectionName.users)
      .doc(user.uid)
      .collection(subCollectionName.comments)
      .doc(ref.id),
    userId: user.uid,
    userRef: firebase
      .firestore()
      .collection(rootCollectionName.users)
      .doc(user.uid),
    author: user.displayName as string,
  }

  await ref.set({
    ...comment,
    createdAt:
      firebase.firestore.FieldValue.serverTimestamp() as firebase.firestore.Timestamp,
    updatedAt:
      firebase.firestore.FieldValue.serverTimestamp() as firebase.firestore.Timestamp,
  })
}

export async function deleteComment(ref: firebase.firestore.DocumentReference) {
  await ref.delete()
}

export async function updateComment(
  content: string,
  ref: firebase.firestore.DocumentReference,
) {
  await ref.update({
    content,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
}
