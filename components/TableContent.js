import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { CURRENTLY_WORKING_SECTION } from '../containers/messages/commonMsg'

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
      fontSize: theme.spacing.unit * 1.75,
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing.unit
    },
    contentKeyWrapper: {
      display: 'flex'
      // alignItems: 'center',
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
    },
    currentlyWorking: {
      padding: theme.spacing.unit * 2,
      color: theme.palette.customGrey.grey200,
      marginLeft: theme.spacing.unit * 4
    }
  }
}

const TableContent = props => {
  return (
    <div id={props.itemKey}>
      <div className={props.classes.titleWrapper}>
        <img src={props.src} />
        <Typography
          gutterBottom
          variant='title'
          component='h1'
          className={
            props.hover.precautions
              ? `${props.classes.title} ${props.classes.hover}`
              : props.classes.title
          }
        >
          {props.title}
        </Typography>
      </div>
      {Object.keys(props.content).length !== 0 &&
        <Table className={props.classes.tableWrapper}>
          <TableBody>
            <TableRow>
              <TableCell
                component='th'
                scope='row'
                className={props.classes.contentKeyCell}
              >
                <div className={props.classes.contentKeyWrapper}>
                  <img src={'/static/images/avoidPrecaution.svg'} />
                  <Typography
                    variant='body1'
                    className={props.classes.contentKey}
                  >
                    {'Avoid'}
                  </Typography>
                </div>
              </TableCell>
              <TableCell component='th' scope='row'>
                {typeof props.content['avoid'] === 'object'
                  ? props.content['avoid'] &&
                      props.content['avoid'].map(item => {
                        return (
                          <Typography
                            gutterBottom
                            variant='body1'
                            className={props.classes.contentBody}
                          >
                            {`${item}`}
                          </Typography>
                        )
                      })
                  : <Typography
                    gutterBottom
                    variant='body1'
                    className={props.classes.contentBody}
                  >
                    {props.content.avoid}
                  </Typography>}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component='th'
                scope='row'
                className={props.classes.contentKeyCell}
              >
                <div className={props.classes.contentKeyWrapper}>
                  <img src={'/static/images/foodPrecaution.svg'} />
                  <Typography
                    variant='body1'
                    className={props.classes.contentKey}
                  >
                    {'Food'}
                  </Typography>
                </div>
              </TableCell>
              <TableCell component='th' scope='row'>
                {typeof props.content['food'] === 'object'
                  ? props.content['food'] &&
                      props.content['food'].map(item => {
                        return (
                          <Typography
                            gutterBottom
                            variant='body1'
                            className={props.classes.contentBody}
                          >
                            {`${item}`}
                          </Typography>
                        )
                      })
                  : <Typography
                    gutterBottom
                    variant='body1'
                    className={props.classes.contentBody}
                  >
                    {props.content.food}
                  </Typography>}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component='th'
                scope='row'
                className={props.classes.contentKeyCell}
              >
                <div className={props.classes.contentKeyWrapper}>
                  <img src={'/static/images/storagePrecaution.svg'} />
                  <Typography
                    variant='body1'
                    className={props.classes.contentKey}
                  >
                    {'Storage'}
                  </Typography>
                </div>
              </TableCell>
              <TableCell component='th' scope='row'>
                {typeof props.content['storage'] === 'object'
                  ? props.content['storage'] &&
                      props.content['storage'].map(item => {
                        return (
                          <Typography
                            gutterBottom
                            variant='body1'
                            className={props.classes.contentBody}
                          >
                            {`${item}`}
                          </Typography>
                        )
                      })
                  : <Typography
                    gutterBottom
                    variant='body1'
                    className={props.classes.contentBody}
                  >
                    {props.content.storage}
                  </Typography>}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component='th'
                scope='row'
                className={props.classes.contentKeyCell}
              >
                <div className={props.classes.contentKeyWrapper}>
                  <img src={'/static/images/missDosePrecaution.svg'} />
                  <Typography
                    variant='body1'
                    className={props.classes.contentKey}
                  >
                    {'MissDose'}
                  </Typography>
                </div>
              </TableCell>
              <TableCell component='th' scope='row'>
                {typeof props.content['miss_dose'] === 'object'
                  ? props.content['miss_dose'] &&
                      props.content['miss_dose'].map(item => {
                        return (
                          <Typography
                            gutterBottom
                            variant='body1'
                            className={props.classes.contentBody}
                          >
                            {`${item}`}
                          </Typography>
                        )
                      })
                  : <Typography
                    gutterBottom
                    variant='body1'
                    className={props.classes.contentBody}
                  >
                    {props.content.miss_dose}
                  </Typography>}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>}
      {Object.keys(props.content).length === 0 &&
        <Typography
          className={props.classes.currentlyWorking}
          variant={'body2'}
          component='div'
        >
          {CURRENTLY_WORKING_SECTION}
        </Typography>}
    </div>
  )
}

export default withStyles(styles)(TableContent)
