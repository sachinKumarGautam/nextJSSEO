import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider'

import TransactionHistory from './TransactionHistory'
import ActivityIndicator from '../../components/activityIndicator/index'
import ComponentSpecificError
  from '../../components/activityIndicator/error/ComponentSpecificError'

class TransactionHistoryWrapper extends Component {
  render () {
    return (
      <div>
        <ActivityIndicator
          isError={this.props.carePointState.errorState.isError}
          ErrorComp={
            <ComponentSpecificError
              error={this.props.carePointState.errorState.error}
              noButton
            />
          }
        >
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
        </ActivityIndicator>
      </div>
    )
  }
}

export default TransactionHistoryWrapper
