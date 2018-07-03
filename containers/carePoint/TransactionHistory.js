import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {formatDateWithMonth} from '../../utils/FormatDate'

const styles = theme => ({
  earnedStyle: {
    color: theme.palette.customGrey.grey500
  },
  detailStyle: {
    color: theme.palette.customGrey.grey200
  },
  earnedAmountStyle: {
    color: theme.palette.customGreen.green300,
    marginRight: theme.spacing.unit * 2,
    textAlign: 'right'
  },
  debitedAmountStyle: {
    color: theme.palette.customRed.red200,
    marginRight: theme.spacing.unit * 2,
    textAlign: 'right'
  },
  validStyle: {
    color: theme.palette.customGrey.grey200,
    marginRight: theme.spacing.unit * 2,
    textAlign: 'right'
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

class TransactionHistory extends Component {
  render () {
    let transactionDate = formatDateWithMonth(this.props.carePointsDetails.transaction_date)
    let expiryDate = formatDateWithMonth(this.props.carePointsDetails.expiry_date)
    let carePoint = this.props.carePointsDetails.cash_type === 'CASH'
      ? this.props.carePointsDetails.money
      : this.props.carePointsDetails.care_point
    return (
      <div className={this.props.classes.transactionDetailWrapper}>
        <div>
          <Typography
            gutterBottom
            variant='body2'
            className={this.props.classes.earnedStyle}
          >
            {this.props.carePointsDetails.display_transaction_type}
          </Typography>
          <Typography
            gutterBottom
            variant='caption'
            className={this.props.classes.detailStyle}
          >
            {this.props.carePointsDetails.display_comment}
          </Typography>
          <Typography
            gutterBottom
            variant='caption'
            className={this.props.classes.detailStyle}
          >
            {transactionDate}
          </Typography>
        </div>
        <div>
          <Typography
            gutterBottom
            variant='body2'
            className={
              this.props.carePointsDetails.transaction_type === 'credit'
                ? this.props.classes.earnedAmountStyle
                : this.props.classes.debitedAmountStyle
            }
          >
            {
              this.props.carePointsDetails.transaction_type === 'credit'
                ? `+${carePoint}` : `-${carePoint}`
            }
          </Typography>
          {
            this.props.carePointsDetails.transaction_type === 'credit' &&
            <Typography
              gutterBottom
              variant='caption'
              className={this.props.classes.validStyle}
            >
              Valid till
            </Typography>
          }
          { this.props.carePointsDetails.transaction_type === 'credit' &&
            <Typography
              gutterBottom
              variant='caption'
              className={this.props.classes.validStyle}
            >
              {expiryDate}
            </Typography>
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TransactionHistory)
