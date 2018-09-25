import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'

import OrderSummary from './OrderSummary'
import CartDetails from './CartDetails'

import ActivityIndicator from '../../components/activityIndicator/index'
import FullPageError
  from '../../components/activityIndicator/error/FullPageError'
import SnackbarErrorMessage
  from '../../components/activityIndicator/error/SnackbarErrorMessage'

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
  verifyPaymentLoading,
  updatePaymentFailureFlag,
  optForExpressDeliveryLoading,
  resetApiStateSubmitOrder,
  resetCouponDetail,
  resetSavePatientToCartError,
  resetSaveDeliveryAddressToCartError,
  resetUploadPrescriptionError,
  deleteCartLoading,
  updateLassuredExpressFlag
} from './cartActions'

import {
  getDeliveryDetailsListLoading,
  submitDeliveryDetailsLoading,
  updateAddressFormValue,
  getLocalityDetailListLoading,
  resetDeliveryAddressSelected
} from '../deliveryDetails/deliveryDetailsActions'

import {
  getPatientDetailsListLoading,
  submitPatientDetailsLoading,
  updatePatientFormValue,
  resetPatientSelected
} from '../patientDetails/patientDetailsActions'

import {
  checkPincodeLoading,
  resetPincodeState
} from '../location/pincode/pincodeAction'

import {
  SWITCH_PATIENT_DIALOG_TITLE,
  SWITCH_PATIENT_DIALOG_CONTENT
} from '../messages/refillPatientMessage'
import RefillPatientDialogue from '../../components/RefillPatientDialogue'
import FullPageMainLoader
  from '../../components/activityIndicator/loader/FullPageMainLoader'

import BulkOrderDialogue from './BulkOrderDialogue'

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
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      dialogTitle: '',
      dialogContent: '',
      selectedPatient: {},
      openBulkOrderDialogue: false
    }
    this.getErrorComponent = this.getErrorComponent.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
    this.resetState = this.resetState.bind(this)
    this.handleBulkOrderDialogue = this.handleBulkOrderDialogue.bind(this)
  }

  componentDidMount () {
    const cartUid = this.props.cartState.payload.uid
    this.props.actions.getCartDetailsLoading(this.props.cartState, cartUid)
    this.props.actions.resetApiStateSubmitOrder() // reset Submit order api state

    if (this.props.customerState.payload.id) {
      this.props.actions.getPatientDetailsListLoading(
        this.props.patientDetailsState,
        this.props.customerState.payload.id // pass customer id
      )

      if (!this.props.loginState.isNewUser) {
        this.props.actions.getDeliveryDetailsListLoading(
          this.props.deliveryDetailsState,
          this.props.customerState.payload.id // pass customer id
        )
      }
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

      if (!this.props.loginState.isNewUser) {
        this.props.actions.getDeliveryDetailsListLoading(
          this.props.deliveryDetailsState,
          this.props.customerState.payload.id // pass customer id
        )
      }
    }

    if (
      (
        prevProps.cartState.payload.excessive_ordered_quantity !==
        this.props.cartState.payload.excessive_ordered_quantity) &&
      this.props.cartState.payload.excessive_ordered_quantity
    ) {
      this.handleBulkOrderDialogue()
    }
  }

  handleBulkOrderDialogue = () => (
    this.setState({
      openBulkOrderDialogue: !this.state.openBulkOrderDialogue
    })
  )

  tryAgain () {
    this.props.actions.getCartDetailsLoading(
      this.props.cartState,
      this.props.cartState.payload.uid
    )
  }

  onClickOfPatient = selectedPatient => {
    this.setState({
      selectedPatient
    })
    this.setState({
      open: true,
      dialogTitle: SWITCH_PATIENT_DIALOG_TITLE,
      dialogContent: SWITCH_PATIENT_DIALOG_CONTENT
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  onClickOfOk = () => {
    this.setState({
      open: false
    })
    this.props.actions.deleteCartLoading(
      this.props.cartState,
      this.props.checkPincodeState.payload.source,
      this.props.checkPincodeState.payload.id,
      '',
      this.state.selectedPatient,
      this.props.addMedicine,
      true
    )
  }

  addMedicine () {
    this.props.addToCartHandler(this.state.medicineName)
  }

  resetState () {
    this.props.actions.resetSavePatientToCartError()
    this.props.actions.resetSaveDeliveryAddressToCartError()
    this.props.actions.resetUploadPrescriptionError()
    this.props.actions.resetPincodeState()
  }

  getErrorComponent () {
    if (this.props.cartState.errorState.isError) {
      return (
        <FullPageError
          error={this.props.cartState.errorState.error}
          tryAgain={this.tryAgain}
        />
      )
    } else {
      return (
        <SnackbarErrorMessage
          error={this.props.globalErrorState}
          resetState={this.resetState}
        />
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
        {/* <PlaceOrderLoader
          isLoading={submitOrderLoading}
          orderNumber={this.props.cartState.orderResponse.payload.order_number}
        /> */}
        <ActivityIndicator
          isLoading={submitOrderLoading}
          LoaderComp={<FullPageMainLoader />}
          isError={
            this.props.cartState.errorState.isError ||
            this.props.patientDetailsState.errorState.isError ||
            this.props.deliveryDetailsState.errorState.isError ||
            this.props.cartState.orderResponse.errorState.isError ||
            this.props.cartState.prescriptionDetails.errorState.isError ||
            this.props.cartState.expressDeliveryCheck.errorState.isError ||
            this.props.cartState.payload.cart_items.errorState.isError ||
            this.props.cartState.payload.is_doctor_callback.errorState.isError ||
            this.props.cartState.payload.patient_details.errorState.isError ||
            this.props.cartState.payload.shipping_address_details.errorState.isError ||
            (this.props.checkPincodeState.errorState.isError && this.props.checkPincodeState.isDeliveryAssignment)
          }
          ErrorComp={this.getErrorComponent()}
          bottomError={!this.props.cartState.errorState.isError}
          bottomLoader
        >
          <Grid
            container
          // className={submitOrderLoading ? classes.blurCartPage : ''}
          >
            <Grid item xs={7}>
              <section>
                <OrderSummary
                  onClickOfPatient={this.onClickOfPatient}
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
                  getLocalityDetailListLoading={
                    this.props.actions.getLocalityDetailListLoading
                  }
                  optForExpressDeliveryLoading={
                    this.props.actions.optForExpressDeliveryLoading
                  }
                  constantsState={this.props.constantsState}
                  checkPincodeState={this.props.checkPincodeState}
                  updateLassuredExpressFlag={
                    this.props.actions.updateLassuredExpressFlag
                  }
                  updatePatientFormValue={this.props.actions.updatePatientFormValue}
                  resetPatientSelected={this.props.actions.resetPatientSelected}
                  resetDeliveryAddressSelected={this.props.actions.resetDeliveryAddressSelected}
                  globalErrorState={this.props.globalErrorState}
                />
              </section>
            </Grid>
            <Grid item xs={5}>
              <section className={classes.stickyWrapper}>
                <CartDetails
                  cartState={this.props.cartState}
                  customerState={this.props.customerState}
                  incrementCartItemLoading={
                    this.props.actions.incrementCartItemLoading
                  }
                  decrementCartItemLoading={
                    this.props.actions.decrementCartItemLoading
                  }
                  deleteCartItemLoading={
                    this.props.actions.deleteCartItemLoading
                  }
                  resetCartState={this.props.actions.resetCartState}
                  applyCouponCodeLoading={
                    this.props.actions.applyCouponCodeLoading
                  }
                  updateCouponCode={this.props.actions.updateCouponCode}
                  checkPincodeState={this.props.checkPincodeState}
                  resetCouponDetail={this.props.actions.resetCouponDetail}
                  verifyPaymentLoading={this.props.actions.verifyPaymentLoading}
                  updatePaymentFailureFlag={
                    this.props.actions.updatePaymentFailureFlag
                  }
                />
              </section>
            </Grid>
          </Grid>
          <RefillPatientDialogue
            dialogTitle={this.state.dialogTitle}
            dialogContent={this.state.dialogContent}
            open={this.state.open}
            handleClose={this.handleClose}
            onClickOfOk={this.onClickOfOk}
          />
          <BulkOrderDialogue
            cartState={this.props.cartState}
            open={this.state.openBulkOrderDialogue}
            handleClose={this.handleBulkOrderDialogue}
          />
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
    checkPincodeState: state.checkPincodeState,
    constantsState: state.constantsState,
    pastMedicineState: state.pastMedicineState,
    globalErrorState: state.globalErrorState
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
        verifyPaymentLoading,
        updatePaymentFailureFlag,
        updateAddressFormValue,
        getLocalityDetailListLoading,
        checkPincodeLoading,
        optForExpressDeliveryLoading,
        resetApiStateSubmitOrder,
        resetCouponDetail,
        resetSavePatientToCartError,
        resetSaveDeliveryAddressToCartError,
        resetUploadPrescriptionError,
        deleteCartLoading,
        updateLassuredExpressFlag,
        resetPincodeState,
        updatePatientFormValue,
        resetPatientSelected,
        resetDeliveryAddressSelected
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(CartDetailsWrapper)
)
