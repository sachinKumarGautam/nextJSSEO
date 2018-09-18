import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {formatDate} from '../../utils/FormatDate'
import {DESCRIPTION} from '../messages/thankyouMessages'
import {
  DELIVERY_OPTION_URGENT,
  SERVICE_TYPE_LFASSURED
} from '../../components/constants/Constants'

const styles = theme => ({
  imageStyle: {
    marginLeft: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 3.5,
    marginBottom: theme.spacing.unit * 2.25
  },
  thankyou: {
    fontSize: theme.spacing.unit * 4,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 4
  },
  order: {
    fontSize: theme.typography.pxToRem(18),
    marginLeft: theme.spacing.unit * 5,
    color: theme.palette.customGrey.grey500
    // marginBottom: theme.spacing.unit
  },
  orderNumber: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.customGrey.grey500,
    // marginBottom: theme.spacing.unit,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing.unit
  },
  orderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.unit
  },
  deliveryDate: {
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 1.5
  },
  deliveryDateValue: {
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit * 1.5,
    fontWeight: theme.typography.fontWeightBold
  },
  description: {
    color: theme.palette.customGrey.grey500,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 12.12
  }
})

const ThankyouDetails = (props) => {
  return (
    <div>
      <div className={props.classes.orderWrapper}>
        <img
          src='/static/images/bg-chk.svg'
          alt='check'
          className={props.classes.imageStyle}
        />
        <Typography
          variant='display1'
          className={props.classes.thankyou}
        >
          Thank you for your order
        </Typography>
      </div>
      <div className={props.classes.orderWrapper}>
        <Typography
          variant='subheading'
          className={props.classes.order}
        >
          Order No
        </Typography>
        <Typography
          variant='subheading'
          className={props.classes.orderNumber}
        >
          : {props.cartState.orderResponse.payload.order_number}
        </Typography>
        {
          props.cartState.orderResponse.payload.service_type === SERVICE_TYPE_LFASSURED &&
          <img src='/static/images/assured-service.svg' />
        }
        {
          props.cartState.orderResponse.payload.delivery_option === DELIVERY_OPTION_URGENT &&
          <img src='/static/images/express-delivery-icon.svg' />
        }
      </div>
      <div className={props.classes.orderWrapper}>
        <Typography
          variant='body2'
          className={props.classes.deliveryDate}
        >
          Estimated Delivery Date
        </Typography>
        <Typography
          variant='body2'
          className={props.classes.deliveryDateValue}
        >
          : {
            props.cartState.orderResponse.payload.promised_delivery_date
              ? formatDate(props.cartState.orderResponse.payload.promised_delivery_date) : ''
          }
        </Typography>
      </div>
      <Typography
        variant='body2'
        className={props.classes.description}
      >
        {DESCRIPTION}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(ThankyouDetails)
