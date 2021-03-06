import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  addressDetailsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: theme.spacing.unit * 2.5
  },
  address: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 2.5,
    marginTop: theme.spacing.unit / 4
  },
  street: {
    fontSize: theme.typography.pxToRem(14),
    marginLeft: theme.spacing.unit * 6.875,
    marginTop: theme.spacing.unit / 4
  },
  image: {
    height: theme.spacing.unit * 2,
    width: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 0.625
  }
})

const AddressDetails = (props) => {
  return (
    <div>
      <div className={props.classes.addressDetailsWrapper}>
        <img
          src='/static/images/homeAddress.svg'
          className={props.classes.image}
        />
        <Typography
          className={props.classes.address}
        >
          {props.shippingAddress.type}
        </Typography>
      </div>
      <Typography
        className={props.classes.street}
      >
        {props.shippingAddress.street1}, {props.shippingAddress.street2}, {props.shippingAddress.city}, {props.shippingAddress.pincode}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(AddressDetails)
