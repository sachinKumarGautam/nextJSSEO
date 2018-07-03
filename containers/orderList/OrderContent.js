import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Person from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'

import {getOrderStatusProgressDetails} from './OrderStatus'

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
      height: theme.spacing.unit * 2
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
      marginRight: theme.spacing.unit * 2
    },
    codButtonStyle: {
      ...theme.typography.caption,
      marginLeft: theme.spacing.unit * 2
    },
    reviewStyle: {
      ...theme.typography.body4,
      color: theme.palette.customGrey.grey200,
      fontWeight: theme.typography.fontWeightBold
    },
    reviewWrapperStyle: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 2,
      display: 'flex',
      justifyContent: 'space-between'
    },
    helpStyle: {
      ...theme.typography.body4,
      color: theme.palette.customGrey.grey200,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 3
    },
    cancelStyle: {
      ...theme.typography.body4,
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    reviewHelpWrapper: {
      display: 'flex'
    }
  }
}

<<<<<<< HEAD
class OrderContent extends Component {
  render () {
    let state = this.props.orderDetails.state
    let status = this.props.orderDetails.status
    let orderStatus = getOrderStatusProgressDetails(state, status)
    let viewStatus = orderStatus.viewStatus
    let itemsLeft = this.props.orderDetails.items.length - 3
    let image = this.props.orderDetails.prescriptions.length &&
      this.props.orderDetails.prescriptions[0].location
    return (
      <div>
        <div className={this.props.classes.userDetailWrapper}>
          <div>
            <Typography
              variant="caption"
              className={this.props.classes.userNameStyle}
            >
              <Person className={this.props.classes.userIconStyle}/>
              {this.props.orderDetails.customer_full_name}
            </Typography>
          </div>
          <div>
            <Typography
              variant="caption"
              className={
                // props.orderList.status === 'Payment Pending'
                // ? props.classes.pendingStyle :
                this.props.classes.statusStyle
              }
            >
              {viewStatus}
            </Typography>
          </div>
=======
const OrderContent = (props) => {
  return (
    <div>
      <div className={props.classes.userDetailWrapper}>
        <div>
          <Typography
            variant='caption'
            className={props.classes.userNameStyle}
          >
            <Person className={props.classes.userIconStyle} />{props.orderList.user_name}
          </Typography>
        </div>
        <div>
          <Typography
            variant='caption'
            className={
              props.orderList.status === 'Payment Pending'
                ? props.classes.pendingStyle
                : props.classes.statusStyle
            }
          >
            {props.orderList.status}
          </Typography>
        </div>
      </div>
      <div className={props.classes.medicineDetailWrapper}>
        <img
          src='./../../static/images/avenger.jpg'
          className={props.classes.prescriptionStyle}
        />
        <div>
          <Typography
            variant='caption'
            className={props.classes.medicineNameStyle}
          >
            Glycomet 0.5 MG
          </Typography>
          <Typography
            variant='caption'
            className={props.classes.medicineNameStyle}
          >
            Zoryl MF 2MG
          </Typography>
          <Typography
            variant='caption'
            className={props.classes.quantityStyle}
          >
            + 2 Items
          </Typography>
>>>>>>> 06b63f99b00a52cd71af51cea6b7954f0b45e5c7
        </div>
        <div className={this.props.classes.medicineDetailWrapper}>
          <img
            src={image}
            className={this.props.classes.prescriptionStyle}
          />
<<<<<<< HEAD
          <div>
            {
              this.props.orderDetails.items.map((itemDetail, index) => (
                index < 3 && 
                <Typography
                  variant="caption"
                  className={this.props.classes.medicineNameStyle}
                >
                  {itemDetail.name}
                </Typography>
              ))
=======
        </div>
      }
      <div className={props.classes.reviewWrapperStyle}>
        <div className={props.classes.reviewHelpWrapper}>
          <Typography
            variant='caption'
            className={props.classes.reviewStyle}
          >
            Write a review
          </Typography>
          <Typography
            variant='caption'
            className={props.classes.helpStyle}
          >
            Need Help?
          </Typography>
        </div>
        <div>
          <a className={props.classes.cancelStyle}>
            {
              props.orderList.order_status === 'cancel'
                ? 'Cancel Order' : 'Return Order'
>>>>>>> 06b63f99b00a52cd71af51cea6b7954f0b45e5c7
            }
            <Typography
              variant="caption"
              className={this.props.classes.quantityStyle}
            >
              {(itemsLeft > 0) && `+${itemsLeft} Items`}
            </Typography>
          </div>
        </div>
        {/* {
          props.orderList.payment === 'failed' &&
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
              onClick={this.handleClickOpen}
              label={'Retry Payment'}
            />
            <Button
              size='small'
              variant='raised'
              color='primary'
              onClick={this.handleClickOpen}
              className={this.props.classes.codButtonStyle}
              label={'Convert to COD'}
            />
          </div>
        }
        <div className={this.props.classes.reviewWrapperStyle}>
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
