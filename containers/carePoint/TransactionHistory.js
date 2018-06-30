import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  earnedStyle: {
    color: theme.palette.customGrey.grey500
  },
  detailStyle: {
    color: theme.palette.customGrey.grey200
  },
  earnedAmountStyle: {
    color: theme.palette.customGreen.green300
  },
  debitedAmountStyle: {
    color: theme.palette.customRed.red200,
    marginRight: theme.spacing.unit * 9
  },
  transactionDetailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2.5
  }
})

const TransactionHistory = (props) => {
  return (
    <div className={props.classes.transactionDetailWrapper}>
      <div>
        <Typography
          gutterBottom
          variant='body2'
          className={props.classes.earnedStyle}
        >
          {props.carePointsDetails.display_transaction_type}
        </Typography>
        <Typography
          gutterBottom
          variant='caption'
          className={props.classes.detailStyle}
        >
          {props.carePointsDetails.display_comment}
        </Typography>
        <Typography
          gutterBottom
          variant='caption'
          className={props.classes.detailStyle}
        >
          {props.carePointsDetails.transaction_date}
        </Typography>
      </div>
      <div>
        <Typography
          gutterBottom
          variant='body2'
          className={
            props.carePointsDetails.transaction_type === "credit"
            ? props.classes.earnedAmountStyle
            : props.classes.debitedAmountStyle
          }
        >
            {
              props.carePointsDetails.transaction_type === "credit" ?
                '+' + (
                  props.carePointsDetails.cash_type === 'CASH' ?
                  props.carePointsDetails.money : props.carePointsDetails.care_point
                ) :
                '-' + (
                  props.carePointsDetails.cash_type === 'CASH' ?
                  props.carePointsDetails.money : props.carePointsDetails.care_point
                )
            }
        </Typography>
        {
          props.carePointsDetails.transaction_type === "credit" &&
          <Typography
            gutterBottom
            variant='caption'
            className={props.classes.detailStyle}
          >
            Valid till
          </Typography>
        }
        { props.carePointsDetails.transaction_type === "credit" &&
          <Typography
            gutterBottom
            variant='caption'
            className={props.classes.detailStyle}
          >
            {props.carePointsDetails.expiry_date}
          </Typography>
        }
      </div>
    </div>
  )
}

export default withStyles(styles)(TransactionHistory)
