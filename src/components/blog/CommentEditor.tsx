import React from 'react'
import { useFormik } from 'formik'
import { useAnalytics, useUser } from 'reactfire'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { Box, Button, TextField } from '@material-ui/core'
import { ErrorTypography } from '@components/ErrorTypography'
import { useNewCreateRef, createComment } from '@hooks/useComment'

export const validationSchema = Yup.object().shape({
  content: Yup.string().max(1024).required('必須'),
})

export function CommentEditor() {
  const analytics = useAnalytics()
  const router = useRouter()
  const { data: user } = useUser(undefined, { suspense: true })
  const commentRef = useNewCreateRef(user.uid)

  const blogId = router.query.id as string

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      await createComment(values.content, commentRef, user, blogId)
      analytics.logEvent('add_comment', {
        blog_id: blogId,
        comment_id: commentRef.id,
      })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name="content"
        label="コンテンツ"
        value={formik.values.content}
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
        <Button color="primary" type="submit" variant="outlined">
          投稿する
        </Button>
      </Box>
    </form>
  )
}
