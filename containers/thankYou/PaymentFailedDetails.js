import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {formatDate} from '../../utils/FormatDate'
import {DESCRIPTION} from '../messages/thankyouMessages'

const styles = theme => ({
  imageStyle: {
    marginLeft: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 3.5,
    marginBottom: theme.spacing.unit * 2.25
  },
  thankyou: {
    fontSize: theme.typography.pxToRem(32),
    color: theme.palette.customYellow.yellow400,
    marginLeft: theme.spacing.unit * 2.5,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2.5
  },
  order: {
    fontSize: theme.typography.pxToRem(18),
    marginLeft: theme.spacing.unit * 5,
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit
  },
  orderNumber: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit,
    fontWeight: theme.typography.fontWeightBold
  },
  orderWrapper: {
    display: 'flex',
    flexDirection: 'row'
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

const PaymentFailedDetails = (props) => {
  return (
    <div>
      <div className={props.classes.orderWrapper}>
        <img
          src='/static/images/paymentPendingIcon.svg'
          alt='check'
          className={props.classes.imageStyle}
        />
        <Typography
          variant='display1'
          className={props.classes.thankyou}
        >
          Payment Pending
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
      </div>
    </div>
  )
}

export default withStyles(styles)(PaymentFailedDetails)
