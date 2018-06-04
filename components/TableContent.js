import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontWeight: theme.typography.fontWeightBold
    }
  }
}

const data = [
  {
    id: 1,
    key: 'Avoid',
    value: 'Should be avoided in hypertensive patients and during pregnancy'
  },
  {
    id: 2,
    key: 'Food',
    value: 'Avoid Alcohol'
  },
  {
    id: 3,
    key: 'Storage',
    value: 'Store in a cool & dry place'
  },
  {
    id: 4,
    key: 'Miss Dose',
    value: 'Skip the missed dose and continue your regular dosing schedule. Do not take two doses at the same time.'
  }
]

const TableContent = (props) => (
  <div>
    <Typography
      gutterBottom
      variant='title'
      component='h1'
      className={props.classes.title}
    >
      {props.title}
    </Typography>
    <Table>
      <TableBody>
        {data.map(n => {
          return (
            <TableRow key={n.id}>
              <TableCell component='th' scope='row'>
                {n.key}
              </TableCell>
              <TableCell component='th' scope='row'>
                {n.value}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </div>
)

export default withStyles(styles)(TableContent)
