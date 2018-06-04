import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import {disablePageOverlayStyle} from '../../jiva/src/client/styles/baseStyle'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 2
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'baseline'
    },
    contentBody: {
      color: theme.palette.customGrey.grey500
    },
    contentKey: {
      color: theme.palette.customGreen.green400,
      textTransform: 'uppercase',
      marginLeft: theme.spacing.unit
    },
    contentKeyWrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    tableWrapper: {
      border: `0.5px solid ${theme.palette.customGrey.grey100}`,
      marginTop: theme.spacing.unit * 5
    },
    contentKeyCell: {
      borderRight: `0.5px solid ${theme.palette.customGrey.grey100}`
    }
  }
}

const data = [
  {
    id: 1,
    key: 'Avoid',
    value: 'Should be avoided in hypertensive patients and during pregnancy',
    src: '/static/images/avoidPrecaution.svg'
  },
  {
    id: 2,
    key: 'Food',
    value: 'Avoid Alcohol',
    src: '/static/images/foodPrecaution.svg'
  },
  {
    id: 3,
    key: 'Storage',
    value: 'Store in a cool & dry place',
    src: '/static/images/storagePrecaution.svg'
  },
  {
    id: 4,
    key: 'Miss Dose',
    value: 'Skip the missed dose and continue your regular dosing schedule. Do not take two doses at the same time.',
    src: '/static/images/missDosePrecaution.svg'
  }
]

const TableContent = (props) => (
  <div>
    <div className={props.classes.titleWrapper}>
      <img src={props.src} />
      <Typography
        gutterBottom
        variant='title'
        component='h1'
        className={props.classes.title}
      >
        {props.title}
      </Typography>
    </div>
    <Table className={props.classes.tableWrapper}>
      <TableBody>
        {data.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell component='th' scope='row' className={props.classes.contentKeyCell}>
                <div className={props.classes.contentKeyWrapper}>
                  <img src={item.src} />
                  <Typography
                    gutterBottom
                    variant='body1'
                    className={props.classes.contentKey}
                  >
                    {item.key}
                  </Typography>
                </div>
              </TableCell>
              <TableCell component='th' scope='row'>
                <Typography
                  gutterBottom
                  variant='body1'
                  className={props.classes.contentBody}
                >
                  {item.value}
                </Typography>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </div>
)

export default withStyles(styles)(TableContent)
