import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import CartDetailsWrapper from '../containers/cartDetails'

import {
  updateIsCartOpenLoginFlag,
  getCartDetailsLoading,
  incrementCartItemLoading,
  decrementCartItemLoading,
  deleteCartItemLoading,
  savePatientToCartLoading,
  saveDeliveryAddressToCartLoading,
  uploadPrescriptionLoading,
  deletePrescriptionLoading,
  submitOrderLoading
} from '../containers/cartDetails/cartActions'

import {
  getDeliveryDetailsListLoading
} from '../containers/deliveryDetails/deliveryDetailsActions'

import {
  getPatientDetailsListLoading
} from '../containers/patientDetails/patientDetailsActions'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class CartDetails extends React.Component {
  componentDidMount () {
    const cartUid = this.props.cartState.payload.uid

    this.props.actions.getCartDetailsLoading(
      this.props.cartState,
      '680a75c5-7965-4f9d-ab2f-14cb0ce16c2c'
    )

    this.props.actions.getPatientDetailsListLoading(
      this.props.patientDetailsState,
      this.props.customerState.payload.id // pass customer id
    )

    this.props.actions.getDeliveryDetailsListLoading(
      this.props.deliveryDetailsState,
      this.props.customerState.payload.id // pass customer id
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div className={this.props.classes.root}>
          <CartDetailsWrapper
            loginState={this.props.loginState}
            cartState={this.props.cartState}
            customerState={this.props.customerState}
            patientDetailsState={this.props.patientDetailsState}
            deliveryDetailsState={this.props.deliveryDetailsState}
            savePatientToCartLoading={this.props.actions.savePatientToCartLoading}
            saveDeliveryAddressToCartLoading={this.props.actions.saveDeliveryAddressToCartLoading}
            incrementCartItemLoading={this.props.actions.incrementCartItemLoading}
            decrementCartItemLoading={this.props.actions.decrementCartItemLoading}
            deleteCartItemLoading={this.props.actions.deleteCartItemLoading}
            updateIsCartOpenLoginFlag={this.props.actions.updateIsCartOpenLoginFlag}
            uploadPrescriptionLoading={this.props.actions.uploadPrescriptionLoading}
            deletePrescriptionLoading={this.props.actions.deletePrescriptionLoading}
            submitOrderLoading={this.props.actions.submitOrderLoading}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loginState: state.loginState,
    cartState: state.cartState,
    customerState: state.customerState,
    patientDetailsState: state.patientDetailsState,
    deliveryDetailsState: state.deliveryDetailsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateIsCartOpenLoginFlag,
        getCartDetailsLoading,
        incrementCartItemLoading,
        decrementCartItemLoading,
        deleteCartItemLoading,
        getDeliveryDetailsListLoading,
        getPatientDetailsListLoading,
        savePatientToCartLoading,
        saveDeliveryAddressToCartLoading,
        uploadPrescriptionLoading,
        deletePrescriptionLoading,
        submitOrderLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(CartDetails)))
