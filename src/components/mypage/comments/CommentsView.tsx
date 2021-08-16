import React from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import { useUser } from 'reactfire'
import { useCollectionRef, useFindUserComments } from '@hooks/useUserComments'
import { Menu } from './Menu'

export function CommentsView() {
  const { data: user } = useUser({ suspense: true })
  const comments = useFindUserComments(useCollectionRef(user.uid))

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>URL</TableCell>
            <TableCell>コメント</TableCell>
            <TableCell>更新日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((comment) => (
            <TableRow key={comment.commentId}>
              <TableCell>
                <Menu comment={comment} />
              </TableCell>
              <TableCell>
                <Link href={`https://shiiinji.dev/blog/${comment.blogId}`}>
                  <a>
                    <Typography color="primary">{`${comment.blogId}`}</Typography>
                  </a>
                </Link>
              </TableCell>
              <TableCell>{comment.content}</TableCell>
              <TableCell>
                {dayjs(comment.updatedAt?.toDate()).format('YYYY/MM/DD')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
