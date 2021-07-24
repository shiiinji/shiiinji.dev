import React, { useReducer } from 'react'
import { useFormik } from 'formik'
import { useAnalytics, useUser } from 'reactfire'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { Box, Button, TextField } from '@material-ui/core'
import { ErrorTypography } from '@components/ErrorTypography'
import { SnackbarView } from '@components/Snackbar'
import { useNewCreateRef, createComment } from '@hooks/useComment'
import { initialState, reducer, SnackbarActionType } from '@reducers/snackbar'

export const validationSchema = Yup.object().shape({
  content: Yup.string().max(1024).required('必須'),
})

export function CommentEditor() {
  const analytics = useAnalytics()
  const [state, dispatch] = useReducer(reducer, initialState)
  const router = useRouter()
  const { data: user } = useUser({ suspense: true })
  const commentRef = useNewCreateRef(user.uid)

  const blogId = router.query.id as string

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        formik.setStatus(true)
        await createComment(values.content, commentRef, user, blogId)
        analytics.logEvent('add_comment', {
          blog_id: blogId,
          comment_id: commentRef.id,
        })
        dispatch({
          type: SnackbarActionType.ACTION_OPEN_SNACKBAR,
          payload: {
            ...state,
            message: '投稿しました',
          },
        })
      } catch (err) {
        dispatch({
          type: SnackbarActionType.ACTION_OPEN_SNACKBAR,
          payload: {
            ...state,
            message: err.message,
          },
        })
      }
    },
  })

  return (
    <>
      <SnackbarView dispatch={dispatch} state={state} />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="content"
          label="コンテンツ"
          value={formik.values.content}
          disabled={formik.status}
          error={!!(formik.touched.content && formik.errors.content)}
          onChange={formik.handleChange}
          placeholder="記事についてコメントする"
          InputLabelProps={{ shrink: true }}
          fullWidth={true}
          margin="normal"
          multiline={true}
          rows={5}
          variant="outlined"
        />
        {formik.touched.content && formik.errors.content && (
          <ErrorTypography>{formik.errors.content}</ErrorTypography>
        )}
        <Box pt={2}>
          <Button
            color="primary"
            disabled={formik.status}
            type="submit"
            variant="outlined"
          >
            投稿する
          </Button>
        </Box>
      </form>
    </>
  )
}
