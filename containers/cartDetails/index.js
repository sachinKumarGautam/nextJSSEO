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
  optForDoctorCallbackLoading,
  optForExpressDeliveryLoading,
  resetApiStateSubmitOrder
} from './cartActions'

import {
  getDeliveryDetailsListLoading,
  submitDeliveryDetailsLoading,
  updateAddressFormValue,
  getLocalityDetailListLoading
} from '../deliveryDetails/deliveryDetailsActions'

import {
  getPatientDetailsListLoading,
  submitPatientDetailsLoading
} from '../patientDetails/patientDetailsActions'

import { checkPincodeLoading } from '../location/pincode/pincodeAction'
import PlaceOrderLoader
  from '../../components/activityIndicator/loader/PlaceOrderLoader'

/*
  bread crumbs
  order summary
  cart details
*/

const styles = theme => ({
  stickyWrapper: {
    position: 'sticky',
    top: theme.spacing.unit * 13.875
  },
  blurCartPage: {
    filter: `blur(${theme.typography.pxToRem(30)})`
  }
})

class CartDetailsWrapper extends Component {
  componentDidMount () {
    const cartUid = this.props.cartState.payload.uid
    this.props.actions.getCartDetailsLoading(this.props.cartState, cartUid)
    this.props.actions.resetApiStateSubmitOrder() // reset Submit order api state

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
      this.props.customerState.payload.id !==
        prevProps.customerState.payload.id &&
      !this.props.cartState.orderResponse.payload.order_number
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
    const { classes } = this.props
    const submitOrderLoading = this.props.cartState.orderResponse.isLoading
    return (
      <div>
        <BreadCrumbs
          isLoading={this.props.cartState.isLoading || submitOrderLoading}
        />
        {/* Full page loader for Submit order and it add success animation */}
        <PlaceOrderLoader
          isLoading={submitOrderLoading}
          orderNumber={this.props.cartState.orderResponse.payload.order_number}
        />
        <Grid
          container
          className={submitOrderLoading ? classes.blurCartPage : ''}
        >
          <Grid item xs={7}>
            <section>
              <OrderSummary
                loginState={this.props.loginState}
                cartState={this.props.cartState}
                customerState={this.props.customerState}
                patientDetailsState={this.props.patientDetailsState}
                deliveryDetailsState={this.props.deliveryDetailsState}
                savePatientToCartLoading={
                  this.props.actions.savePatientToCartLoading
                }
                saveDeliveryAddressToCartLoading={
                  this.props.actions.saveDeliveryAddressToCartLoading
                }
                updateIsCartOpenLoginFlag={
                  this.props.actions.updateIsCartOpenLoginFlag
                }
                uploadPrescriptionLoading={
                  this.props.actions.uploadPrescriptionLoading
                }
                deletePrescriptionLoading={
                  this.props.actions.deletePrescriptionLoading
                }
                submitOrderLoading={this.props.actions.submitOrderLoading}
                updateIsCartOpenRegisterModalFlag={
                  this.props.actions.updateIsCartOpenRegisterModalFlag
                }
                submitPatientDetailsLoading={
                  this.props.actions.submitPatientDetailsLoading
                }
                submitDeliveryDetailsLoading={
                  this.props.actions.submitDeliveryDetailsLoading
                }
                optForDoctorCallbackLoading={
                  this.props.actions.optForDoctorCallbackLoading
                }
                updateAddressFormValue={
                  this.props.actions.updateAddressFormValue
                }
                checkPincodeLoading={this.props.actions.checkPincodeLoading}
                getLocalityDetailListLoading={this.props.actions.getLocalityDetailListLoading}
                optForExpressDeliveryLoading={this.props.actions.optForExpressDeliveryLoading}
              />
            </section>
          </Grid>
          <Grid item xs={5}>
            <section className={classes.stickyWrapper}>
              <CartDetails
                cartState={this.props.cartState}
                incrementCartItemLoading={
                  this.props.actions.incrementCartItemLoading
                }
                decrementCartItemLoading={
                  this.props.actions.decrementCartItemLoading
                }
                deleteCartItemLoading={this.props.actions.deleteCartItemLoading}
                resetCartState={this.props.actions.resetCartState}
                applyCouponCodeLoading={
                  this.props.actions.applyCouponCodeLoading
                }
                updateCouponCode={this.props.actions.updateCouponCode}
                checkPincodeState={this.props.checkPincodeState}
              />
            </section>
          </Grid>
        </Grid>
        {/* </ActivityIndicator> */}
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
        optForDoctorCallbackLoading,
        updateAddressFormValue,
        getLocalityDetailListLoading,
        checkPincodeLoading,
        optForExpressDeliveryLoading,
        resetApiStateSubmitOrder
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(CartDetailsWrapper)
)
