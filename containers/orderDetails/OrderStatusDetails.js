import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import Location from '@material-ui/icons/LocationOn'

import {
  DELIVERY_OPTION_URGENT,
  SERVICE_TYPE_LFASSURED
} from '../../components/constants/Constants'

const styles = theme => ({
  orderNoWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row'
  },
  orderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: theme.spacing.unit * 2.25,
    paddingLeft: theme.spacing.unit * 2.5,
    color: theme.palette.customGrey.grey500
  },
  orderId: {
    fontSize: theme.spacing.unit * 2.25,
    marginLeft: theme.spacing.unit * 1.25,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500,
    marginRight: theme.spacing.unit
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
  }
})

const OrderStatusDetails = (props) => {
  return (
    <div className={props.classes.orderNoWrapper}>
      <div className={props.classes.orderWrapper}>
        <Typography
          className={props.classes.title}
        >
          Order No.
        </Typography>
        <Typography
          className={props.classes.orderId}
        >
          {props.orderId}
        </Typography>
        {
          props.deliveryOption === DELIVERY_OPTION_URGENT &&
          <img src='static/images/express-delivery-icon.svg' />
        }
        {
          props.serviceType === SERVICE_TYPE_LFASSURED &&
          <img src='static/images/assured-service.svg' />
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

export default withStyles(styles)(OrderStatusDetails)
