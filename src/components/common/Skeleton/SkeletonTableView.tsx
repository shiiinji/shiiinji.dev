import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(1),
    },
  }),
)

export function SkeletonTableView() {
  const classes = useStyles()

  return (
    <div data-testid="skeleton-table-view">
      {[...new Array(10)].map((_row, index) => (
        <Skeleton
          key={index}
          className={classes.container}
          variant="rect"
          height={83}
          width="100%"
        />
      ))}
    </div>
  )
}
