import React from 'react'
import dayjs from 'dayjs'
import Link from 'next/link'
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { useGetUsersQuery } from '@services/api/client'

export function View() {
  const [{ data }] = useGetUsersQuery()

  return (
    <Container>
      <Box mt={5} pt={2} pb={2}>
        <Box mt={3}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>メールアドレス</TableCell>
                  <TableCell>ディスプレイ名</TableCell>
                  <TableCell>作成日</TableCell>
                  <TableCell>詳細</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(data?.users) &&
                  data?.users.map((user) => (
                    <TableRow key={user?.id}>
                      <TableCell>{user?.email}</TableCell>
                      <TableCell>{user?.displayName}</TableCell>
                      <TableCell>
                        {dayjs(user?.creationTime).format('YYYY/MM/DD')}
                      </TableCell>
                      <TableCell>
                        <Link href={`/analytics/user/${user?.id}`}>詳細</Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  )
}
