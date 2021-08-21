import React from 'react'
import { useFormik } from 'formik'
import { useAnalytics } from 'reactfire'
import { useSetRecoilState } from 'recoil'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import { ErrorTypography } from '@components/common/ErrorTypography'
import { updateComment } from '@hooks/useUserComment'
import { Comment } from '@services/models/comment'
import { snackbarState } from '@store/atoms/snackbar'

type Props = {
  comment: Comment
  isOpenEditDialog: boolean
  setIsOpenEditDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export const validationSchema = Yup.object().shape({
  content: Yup.string().max(1024).required('必須'),
})

export function CommentEditDialog(props: Props) {
  const analytics = useAnalytics()
  const setSnackbar = useSetRecoilState(snackbarState)

  const formik = useFormik({
    initialValues: {
      content: props.comment.content,
    },
    validationSchema,
    onSubmit: async (values) => {
      handleClose()
      try {
        await updateComment(values.content, props.comment.commentRef)

        analytics.logEvent('comment_edit', {
          user_id: props.comment.userId,
          comment_id: props.comment.commentId,
          blog_id: props.comment.blogId,
          content: values.constructor,
        })
        setSnackbar((prevState) => ({
          ...prevState,
          isOpen: true,
          message: '保存しました',
        }))
      } catch (err) {
        setSnackbar((prevState) => ({
          ...prevState,
          isOpen: true,
          message: err.message,
        }))
      }
      props.setIsOpenEditDialog(false)
    },
  })

  const handleClose = () => {
    props.setIsOpenEditDialog(false)
    formik.resetForm()
  }

  return (
    <Dialog open={props.isOpenEditDialog} onClose={handleClose} maxWidth="md">
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="form-dialog-title">コメントを編集</DialogTitle>
        <DialogContent>
          <Box width={600}>
            <TextField
              name="content"
              label="コンテンツ"
              inputProps={{ 'data-testid': 'content-input' }}
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button color="primary" type="submit">
            編集する
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
