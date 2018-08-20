import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'

import OrderSummary from './OrderSummary'
import CartDetails from './CartDetails'

import ActivityIndicator from '../../components/activityIndicator/index'
import FullPageError from '../../components/activityIndicator/error/FullPageError'
import SnackbarErrorMessage from '../../components/activityIndicator/error/SnackbarErrorMessage'

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
  resetApiStateSubmitOrder,
  resetCouponDetail
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
    filter: `blur(${theme.typography.pxToRem(60)})`
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

  tryAgain () {
    this.props.actions.getCartDetailsLoading(
      this.props.cartState,
      this.props.cartState.payload.uid
    )
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
        <ActivityIndicator
          isError={
            this.props.cartState.errorState.isError ||
            this.props.patientDetailsState.errorState.isError ||
            this.props.deliveryDetailsState.errorState.isError ||
            this.props.cartState.orderResponse.errorState.isError ||
            this.props.cartState.prescriptionDetails.errorState.isError ||
            this.props.patientDetailsState.addNewPatient.errorState.isError ||
            this.props.cartState.expressDeliveryCheck.errorState.isError ||
            this.props.cartState.payload.cart_items.errorState.isError ||
            this.props.cartState.payload.is_doctor_callback.errorState.isError
          }
          ErrorComp={
            (this.props.cartState.errorState.isError)
              ? <FullPageError
                error={
                  this.props.cartState.errorState.error
                }
                tryAgain={this.tryAgain.bind(this)}
              />
              : <SnackbarErrorMessage
                error={
                  this.props.patientDetailsState.errorState.error ||
                this.props.deliveryDetailsState.errorState.error ||
                this.props.cartState.orderResponse.errorState.error ||
                this.props.cartState.prescriptionDetails.errorState.error ||
                this.props.patientDetailsState.addNewPatient.errorState.error ||
                this.props.cartState.expressDeliveryCheck.errorState.error ||
                this.props.cartState.payload.cart_items.errorState.error ||
                this.props.cartState.payload.is_doctor_callback.errorState.error
                }
              />
          }
          bottomError={!this.props.cartState.errorState.isError}
        >
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
                  resetCouponDetail={this.props.actions.resetCouponDetail}
                />
              </section>
            </Grid>
          </Grid>
        </ActivityIndicator>
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
        resetApiStateSubmitOrder,
        resetCouponDetail
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(CartDetailsWrapper)
)
