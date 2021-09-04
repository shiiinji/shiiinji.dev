import React from 'react'
import { logEvent } from 'firebase/analytics'
import { useAnalytics } from 'reactfire'
import { useSetRecoilState } from 'recoil'
import { IconButton, Menu as MuiMenu, MenuItem } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { deleteComment } from '@hooks/useUserComment'
import { Comment } from '@services/models/comment'
import { snackbarState } from '@store/atoms/snackbar'
import { CommentEditDialog } from './CommentEditDialog'

type Props = {
  comment: Comment
}

export function Menu(props: Props) {
  const [isOpenEditDialog, setIsOpenEditDialog] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const analytics = useAnalytics()
  const setSnackbar = useSetRecoilState(snackbarState)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEditComment = () => {
    setAnchorEl(null)
    setIsOpenEditDialog(true)
  }

  const onDeleteComment = async () => {
    try {
      await deleteComment(props.comment.commentRef)
      logEvent(analytics, 'comment_delete', {
        user_id: props.comment.userId,
        comment_id: props.comment.commentId,
        blog_id: props.comment.blogId,
      })
      setSnackbar((prevState) => ({
        ...prevState,
        isOpen: true,
        message: '削除しました',
      }))
    } catch (err) {
      setSnackbar((prevState) => ({
        ...prevState,
        isOpen: true,
        message: err.message,
      }))
    }
  }

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEditComment}>編集</MenuItem>
        <MenuItem onClick={onDeleteComment}>削除</MenuItem>
      </MuiMenu>
      <CommentEditDialog
        {...props}
        isOpenEditDialog={isOpenEditDialog}
        setIsOpenEditDialog={setIsOpenEditDialog}
      />
    </>
  )
}
