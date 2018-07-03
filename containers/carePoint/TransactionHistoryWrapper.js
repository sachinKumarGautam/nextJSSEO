import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider'

import TransactionHistory from './TransactionHistory'

class TransactionHistoryWrapper extends Component {
  render () {
    return (
      <div>
        {
          this.props.carePointState.payload.customer_wallet_transactions.content.map((carePointsDetails) => {
            return (
              <div>
                <TransactionHistory
                  carePointsDetails={carePointsDetails}
                />
                <Divider />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TransactionHistoryWrapper
