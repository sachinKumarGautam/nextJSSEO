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
    },
    hover: {
      color: theme.palette.primary.main,
      transition: '0.2s'
    }
  }
}

const TableContent = (props) => (
  <div id={props.itemKey}>
    <div className={props.classes.titleWrapper}>
      <img src={props.src} />
      <Typography
        gutterBottom
        variant='title'
        component='h1'
        className={props.hover.precautions ? `${props.classes.title} ${props.classes.hover}` : props.classes.title}
      >
        {props.title}
      </Typography>
    </div>
    <Table className={props.classes.tableWrapper}>
      <TableBody>
        <TableRow>
          <TableCell component='th' scope='row' className={props.classes.contentKeyCell}>
            <div className={props.classes.contentKeyWrapper}>
              <img src={'/static/images/avoidPrecaution.svg'} />
              <Typography
                gutterBottom
                variant='body1'
                className={props.classes.contentKey}
              >
                {'Avoid'}
              </Typography>
            </div>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography
              gutterBottom
              variant='body1'
              className={props.classes.contentBody}
            >
              {props.content['avoid']}{" "}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell component='th' scope='row' className={props.classes.contentKeyCell}>
            <div className={props.classes.contentKeyWrapper}>
              <img src={'/static/images/foodPrecaution.svg'} />
              <Typography
                gutterBottom
                variant='body1'
                className={props.classes.contentKey}
              >
                {'Food'}
              </Typography>
            </div>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography
              gutterBottom
              variant='body1'
              className={props.classes.contentBody}
            >
              {props.content['food']}{" "}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell component='th' scope='row' className={props.classes.contentKeyCell}>
            <div className={props.classes.contentKeyWrapper}>
              <img src={'/static/images/storagePrecaution.svg'} />
              <Typography
                gutterBottom
                variant='body1'
                className={props.classes.contentKey}
              >
                {'Storage'}
              </Typography>
            </div>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography
              gutterBottom
              variant='body1'
              className={props.classes.contentBody}
            >
              {props.content['storage']}{" "}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell component='th' scope='row' className={props.classes.contentKeyCell}>
            <div className={props.classes.contentKeyWrapper}>
              <img src={'/static/images/missDosePrecaution.svg'} />
              <Typography
                gutterBottom
                variant='body1'
                className={props.classes.contentKey}
              >
                {'Miss Dose'}
              </Typography>
            </div>
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography
              gutterBottom
              variant='body1'
              className={props.classes.contentBody}
            >
              {props.content['miss_dose']}{" "}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export default withStyles(styles)(TableContent)
