import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Person from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'

import {
  PAYMENT_PENDING
} from '../../components/constants/paymentConstants'

const styles = theme => {
  return {
    userDetailWrapper: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 2,
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row'
    },
    userIconStyle: {
      color: theme.palette.customGrey.grey300,
      height: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit / 8
    },
    userNameStyle: {
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold,
      display: 'flex',
      flexDirection: 'row'
    },
    statusStyle: {
      color: theme.palette.customGreen.green300,
      paddingRight: theme.spacing.unit
    },
    pendingStyle: {
      color: theme.palette.customRed.red200,
      paddingRight: theme.spacing.unit
    },
    orangeStyle: {
      color: theme.palette.customYellow.yellow400,
      paddingRight: theme.spacing.unit
    },
    prescriptionStyle: {
      width: theme.spacing.unit * 10,
      height: theme.spacing.unit * 10,
      marginRight: theme.spacing.unit * 2
    },
    medicineDetailWrapper: {
      paddingTop: theme.spacing.unit * 3,
      paddingLeft: theme.spacing.unit * 3,
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: theme.spacing.unit * 3
    },
    medicineNameStyle: {
      color: theme.palette.customGrey.grey500
    },
    quantityStyle: {
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      color: theme.palette.primary.main
    },
    buttonWrapperStyle: {
      textAlign: 'right',
      marginRight: theme.spacing.unit * 2,
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: theme.spacing.unit * 2
    },
    codButtonStyle: {
      // ...theme.typography.caption,
      marginLeft: theme.spacing.unit * 2
    },
    // reviewStyle: {
    //   ...theme.typography.body4,
    //   color: theme.palette.customGrey.grey200,
    //   fontWeight: theme.typography.fontWeightBold
    // },
    // reviewWrapperStyle: {
    //   paddingTop: theme.spacing.unit * 2,
    //   paddingLeft: theme.spacing.unit * 2,
    //   paddingRight: theme.spacing.unit * 3,
    //   paddingBottom: theme.spacing.unit * 2,
    //   display: 'flex',
    //   justifyContent: 'space-between'
    // },
    // helpStyle: {
    //   ...theme.typography.body4,
    //   color: theme.palette.customGrey.grey200,
    //   fontWeight: theme.typography.fontWeightBold,
    //   marginLeft: theme.spacing.unit * 3
    // },
    // cancelStyle: {
    //   ...theme.typography.body4,
    //   color: theme.palette.customGrey.grey500,
    //   fontWeight: theme.typography.fontWeightBold
    // },
    // reviewHelpWrapper: {
    //   display: 'flex'
    // }
  }
}

class OrderContent extends Component {
  render () {
    let itemsLeft = this.props.orderDetails.items.length - 3
    let image = this.props.orderDetails.prescriptions.length &&
      this.props.orderDetails.prescriptions[0].location
    return (
      <div>
        <div className={this.props.classes.userDetailWrapper}>
          <div>
            <Typography
              variant='caption'
              className={this.props.classes.userNameStyle}
            >
              <Person className={this.props.classes.userIconStyle} />
              {this.props.orderDetails.customer_full_name}
            </Typography>
          </div>
          <div>
            <Typography
              variant='caption'
              className={
                this.props.orderDetails.viewStatus === 'Payment Pending'
                  ? this.props.classes.orangeStyle
                  : this.props.classes.statusStyle
              }
            >
              {this.props.orderDetails.viewStatus}
            </Typography>
          </div>
        </div>
        <div className={this.props.classes.medicineDetailWrapper}>
          <img
            src={image}
            className={this.props.classes.prescriptionStyle}
          />
          <div>
            {
              this.props.orderDetails.items.map((itemDetail, index) => (
                index < 3 &&
                  <Typography
                    variant='caption'
                    className={this.props.classes.medicineNameStyle}
                  >
                    {itemDetail.name}
                  </Typography>
              ))
            }
            <Typography
              variant='caption'
              className={this.props.classes.quantityStyle}
            >
              {(itemsLeft > 0) && `+${itemsLeft} Items`}
            </Typography>
          </div>
        </div>
        {
          this.props.orderDetails.status === PAYMENT_PENDING &&
          <div className={this.props.classes.buttonWrapperStyle}>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              className={this.props.classes.codButtonStyle}
              onClick={this.props.retryPayment}
              label={'RETRY PAYMENT'}
            />
            <Button
              size='small'
              variant='raised'
              color='primary'
              onClick={this.props.placeOrder}
              className={this.props.classes.codButtonStyle}
              label={'CONVERT TO COD'}
            />
          </div>
        }
        {/* <div className={this.props.classes.reviewWrapperStyle}>
          <div className={this.props.classes.reviewHelpWrapper}>
            <Typography
              variant="caption"
              className={this.props.classes.reviewStyle}
            >
              Write a review
            </Typography>
            <Typography
              variant="caption"
              className={this.props.classes.helpStyle}
            >
              Need Help?
            </Typography>
          </div>
          <div>
            <a className={this.props.classes.cancelStyle}>
              {
                // this.props.orderList.order_status === 'cancel'
                // ? 'Cancel Order' : 'Return Order'
              }
              Cancel Order
            </a>
          </div>
        </div> */}
      </div>
    )
  }
}

export default withStyles(styles)(OrderContent)
