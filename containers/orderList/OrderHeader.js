import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import Location from '@material-ui/icons/LocationOn'

import {
  LF_ASSURED,
  NORMAL
} from '../../components/constants/Constants'

const styles = theme => {
  return {
    wrapperStyle: {
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    orderNoStyle: {
      color: theme.palette.customGrey.grey500
    },
    orderIdStyle: {
      color: theme.palette.customGreen.green300,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      cursor: 'pointer'
    },
    orderWrapper: {
      display: 'flex'
    },
    iconButtonStyle: {
      color: theme.palette.customGreen.green300,
      height: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit / 4
    },
    trackWrapper: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row'
    },
    assuredImage: {
      marginRight: theme.spacing.unit
    }
  }
}

const OrderHeader = (props) => {
  return (
    <div className={props.classes.wrapperStyle}>
      <div className={props.classes.orderWrapper}>
        <Typography
          variant='caption'
          className={props.classes.orderNoStyle}
        >
          Order No.
        </Typography>
        <Typography
          variant='caption'
          className={props.classes.orderIdStyle}
          onClick={props.redirectToOrderDeatails}
        >
          {props.orderDetails.id}
        </Typography>
        {
          props.orderDetails.service_type === LF_ASSURED &&
          <img src='/static/images/assured-service.svg' className={props.classes.assuredImage} />
        }
        {
          props.orderDetails.delivery_option !== NORMAL &&
          <img src='/static/images/express-delivery-icon.svg' />
        }
      </div>
      {
        // <div>
        //   <a className={props.classes.trackWrapper}>
        //     <Location className={props.classes.iconButtonStyle} />Track Order
        //   </a>
        // </div>
      }
    </div>
  )
}

export default withStyles(styles)(OrderHeader)
