import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'

import OrderSummary from './OrderSummary'
import CartDetails from './CartDetails'

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
  submitOrderLoading,
  updateIsCartOpenRegisterModalFlag,
  resetCartState,
  applyCouponCodeLoading,
  updateCouponCode,
  optForDoctorCallbackLoading
} from './cartActions'

import {
  getDeliveryDetailsListLoading,
  submitDeliveryDetailsLoading
} from '../deliveryDetails/deliveryDetailsActions'

import {
  getPatientDetailsListLoading,
  submitPatientDetailsLoading
} from '../patientDetails/patientDetailsActions'

/*
  bread crumbs
  order summary
  cart details
*/

const styles = theme => ({
  stickyWrapper: {
    position: 'sticky',
    top: theme.spacing.unit * 13.875
  }
})

class CartDetailsWrapper extends Component {
  componentDidMount () {
    const cartUid = this.props.cartState.payload.uid

    this.props.actions.getCartDetailsLoading(
      this.props.cartState,
      cartUid
    )

    if (this.props.customerState.payload.id) {
      this.props.actions.getPatientDetailsListLoading(
        this.props.patientDetailsState,
        this.props.customerState.payload.id // pass customer id
      )

      this.props.actions.getDeliveryDetailsListLoading(
        this.props.deliveryDetailsState,
        this.props.customerState.payload.id // pass customer id
      )
    }
  }

  componentDidUpdate (prevProps) {
    if (
      (
        this.props.customerState.payload.id !==
        prevProps.customerState.payload.id
      ) && (
        !this.props.cartState.orderResponse.payload.order_number
      )
    ) {
      this.props.actions.getPatientDetailsListLoading(
        this.props.patientDetailsState,
        this.props.customerState.payload.id // pass customer id
      )

      this.props.actions.getDeliveryDetailsListLoading(
        this.props.deliveryDetailsState,
        this.props.customerState.payload.id // pass customer id
      )
    }
  }

  render () {
    return (
      <div>
        <BreadCrumbs />
        <Grid container>
          <Grid item xs={7}>
            <section>
              <OrderSummary
                loginState={this.props.loginState}
                cartState={this.props.cartState}
                customerState={this.props.customerState}
                patientDetailsState={this.props.patientDetailsState}
                deliveryDetailsState={this.props.deliveryDetailsState}
                savePatientToCartLoading={this.props.actions.savePatientToCartLoading}
                saveDeliveryAddressToCartLoading={this.props.actions.saveDeliveryAddressToCartLoading}
                updateIsCartOpenLoginFlag={this.props.actions.updateIsCartOpenLoginFlag}
                uploadPrescriptionLoading={this.props.actions.uploadPrescriptionLoading}
                deletePrescriptionLoading={this.props.actions.deletePrescriptionLoading}
                submitOrderLoading={this.props.actions.submitOrderLoading}
                updateIsCartOpenRegisterModalFlag={this.props.actions.updateIsCartOpenRegisterModalFlag}
                submitPatientDetailsLoading={this.props.actions.submitPatientDetailsLoading}
                submitDeliveryDetailsLoading={this.props.actions.submitDeliveryDetailsLoading}
                optForDoctorCallbackLoading={this.props.actions.optForDoctorCallbackLoading}
              />
            </section>
          </Grid>
          <Grid item xs={5}>
            <section className={this.props.classes.stickyWrapper}>
              <CartDetails
                cartState={this.props.cartState}
                incrementCartItemLoading={this.props.actions.incrementCartItemLoading}
                decrementCartItemLoading={this.props.actions.decrementCartItemLoading}
                deleteCartItemLoading={this.props.actions.deleteCartItemLoading}
                resetCartState={this.props.actions.resetCartState}
                applyCouponCodeLoading={this.props.actions.applyCouponCodeLoading}
                updateCouponCode={this.props.actions.updateCouponCode}
              />
            </section>
          </Grid>
        </Grid>
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
    deliveryDetailsState: state.deliveryDetailsState,
    checkPincodeState: state.checkPincodeState
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
        submitOrderLoading,
        updateIsCartOpenRegisterModalFlag,
        resetCartState,
        submitPatientDetailsLoading,
        submitDeliveryDetailsLoading,
        applyCouponCodeLoading,
        updateCouponCode,
        optForDoctorCallbackLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CartDetailsWrapper))
