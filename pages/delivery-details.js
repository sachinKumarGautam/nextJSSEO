// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Router from 'next/router'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import DeliveryDetailsWrapper from '../containers/deliveryDetails'

import {
  getDeliveryDetailsListLoading,
  saveAddressSelected,
  submitDeliveryDetailsLoading,
  updateAddressFormValue,
  getLocalityDetailListLoading
} from '../containers/deliveryDetails/deliveryDetailsActions'

import {
  checkPincodeLoading
} from '../containers/location/pincode/pincodeAction'

// page title
import { deliveryDetails } from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  },
  wrapperStyle: {
    paddingBottom: theme.spacing.unit * 3,
    minHeight: theme.spacing.unit * 100
  }
})

class DeliveryDetails extends React.Component {
  componentDidMount () {
    // let customerId = this.props.customerState.payload.id
    const { query } = Router

    // if (query.id === this.props.customerState.payload.id) {
    //   customerId = query.id
    // }

    // Represents to get delivery details.
    this.props.actions.getDeliveryDetailsListLoading(
      this.props.deliveryDetailsState,
      query.customer_id // pass customer id
    )
  }

  render () {
    const { addToCartHandler } = this.props
    return (
      <Layout
        title={deliveryDetails.title}
        addToCartHandler={addToCartHandler}
      >
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <DeliveryDetailsWrapper
              deliveryDetailsState={this.props.deliveryDetailsState}
              saveAddressSelected={this.props.actions.saveAddressSelected}
              submitDeliveryDetailsLoading={
                this.props.actions.submitDeliveryDetailsLoading
              }
              customerState={this.props.customerState}
              checkPincodeLoading={this.props.actions.checkPincodeLoading}
              updateAddressFormValue={this.props.actions.updateAddressFormValue}
              cartState={this.props.cartState}
              getLocalityDetailListLoading={
                this.props.actions.getLocalityDetailListLoading
              }
              checkPincodeState={this.props.checkPincodeState}
            />
          </Paper>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    deliveryDetailsState: state.deliveryDetailsState,
    customerState: state.customerState,
    checkPincodeState: state.checkPincodeState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getDeliveryDetailsListLoading,
        saveAddressSelected,
        submitDeliveryDetailsLoading,
        checkPincodeLoading,
        updateAddressFormValue,
        getLocalityDetailListLoading
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(DeliveryDetails))
)
