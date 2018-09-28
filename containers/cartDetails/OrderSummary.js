import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'

import LoginExpansionPanel from './LoginExpansionPanel'
import PrescriptionsExpansionPanel from './PrescriptionsExpansionPanel'
import PatientDetailsExpansionPanel from './PatientDetailsExpansionPanel'
import AddressDetailsExpansionPanel from './AddressDetailsExpansionPanel'
import PaymentExpansionPanel from './PaymentExpansionPanel'

import {
  ATLEAST_ONE_ITEM,
  SELECT_PATIENT,
  SELECT_ADDRESS
} from '../../containers/messages/cartMessages'

import { SNACK_BAR_DURATION_3000 } from '../../components/constants/Constants'

const styles = theme => ({
  root: {
    width: '100%'
  },
  expansionPanel: {
    marginBottom: theme.spacing.unit * 2
  },
  heading: {
    ...theme.typography.title,
    fontSize: theme.spacing.unit * 2.75,
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing.unit * 2.5,
    marginTop: theme.spacing.unit / 2,
    letterSpacing: theme.spacing.unit * 0.275
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  buttonRoot: {
    border: `1px solid ${theme.palette.primary.main}`
  },
  buttonLabel: {
    color: theme.palette.primary.main
  },
  loginButtonRoot: {
    width: '100%'
  },
  nextButtonRoot: {
    marginTop: theme.spacing.unit * 2.5,
    width: theme.spacing.unit * 18.5,
    float: 'right',
    marginRight: theme.spacing.unit * 2.5
  },
  registerButtonRoot: {
    border: `1px solid ${theme.palette.primary.main}`,
    width: '100%'
  },
  registerButtonLabel: {
    color: theme.palette.primary.main
  },
  patientDetailsWrapper: {
    paddingLeft: theme.spacing.unit * 6.25
  },
  loginWrapperClass: {
    display: 'flex',
    flexDirection: 'column'
  },
  patientWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    width: '94%'
  },
  patientContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  loginDescription: {
    marginLeft: theme.spacing.unit * 6.25,
    fontSize: theme.spacing.unit * 1.75,
    color: theme.palette.customGrey.grey500
  },
  loginDetailsWrapper: {
    marginTop: theme.spacing.unit * 2.5,
    marginLeft: theme.spacing.unit * 6.25
  },
  paymentDescription: {
    ...theme.typography.body2,
    marginTop: theme.spacing.unit * 1.25
  },
  radioButton: {
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 4,
    '&$checked': {
      color: theme.palette.customGreen.green300
    }
  },
  checked: {},
  thankYouWrapper: {
    flex: 12,
    flexDirection: 'column'
  },
  imageIcon: {
    width: theme.spacing.unit * 3.5,
    marginTop: theme.spacing.unit * 0.625
  },
  checkedIconWrapper: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  checkedIcon: {
    marginLeft: theme.spacing.unit * 4.5,
    marginTop: theme.spacing.unit * 0.625
  },
  checkboxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 4.5
  },
  teleconsultText: {
    ...theme.typography.body2,
    marginTop: theme.spacing.unit * 1.25
  },
  patientDetails: {
    fontSize: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2.5,
    color: theme.palette.customGrey.grey500
  },
  radioWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 1.875
  },
  selectPaymentMode: {
    marginLeft: theme.spacing.unit * 6.25,
    marginTop: theme.spacing.unit * 2.5,
    fontSize: theme.spacing.unit * 1.75
  }
})

class OrderSummary extends React.Component {
  state = {
    isShowSnackbar: false,
    snackBarMsg: '',
    expanded: !this.props.loginState.isAuthenticated ? 'panel1' : 'panel2'
  }

  componentDidUpdate (prevProps) {
    if (
      this.props.loginState.isAuthenticated !==
      prevProps.loginState.isAuthenticated
    ) {
      this.setState({
        expanded: 'panel2'
      })
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    })
  }

  handleNextChange = (panel, expanded, panelName) => {
    const patientId = this.props.cartState.payload.patient_details.payload
      .patient_id
    const shippingAddressId = this.props.cartState.payload
      .shipping_address_details.payload.shipping_address_id

    if (
      !this.props.cartState.payload.cart_items.payload.length &&
      !this.props.cartState.payload.is_doctor_callback.payload &&
      !this.props.cartState.payload.cart_prescriptions.length
    ) {
      this.setState({
        isShowSnackbar: true,
        snackBarMsg: ATLEAST_ONE_ITEM
      })
      return false
    } else if (!this.props.loginState.isAuthenticated) {
      this.setState({
        expanded: 'panel1'
      })
      return false
    } else if (panelName === 'patientPanel' && !patientId) {
      this.setState({
        isShowSnackbar: true,
        snackBarMsg: SELECT_PATIENT
      })
      return false
    } else if (panelName === 'addressPanel' && !shippingAddressId) {
      this.setState({
        isShowSnackbar: true,
        snackBarMsg: SELECT_ADDRESS
      })
      return false
    }
    this.setState({
      expanded: expanded ? panel : false
    })
  }

  handleClose () {
    this.setState({
      isShowSnackbar: false
    })
  }

  render () {
    return (
      <div className={this.props.classes.root}>
        <LoginExpansionPanel
          expanded={this.state.expanded}
          loginState={this.props.loginState}
          cartState={this.props.cartState}
          customerState={this.props.customerState}
          handleChange={this.handleChange('panel1')}
          imageIcon={this.props.classes.imageIcon}
          expansionPanel={this.props.classes.expansionPanel}
          heading={this.props.classes.heading}
          thankYouWrapper={this.props.classes.thankYouWrapper}
          loginDescription={this.props.classes.loginDescription}
          loginDetailsWrapper={this.props.classes.loginDetailsWrapper}
          loginButtonRoot={this.props.classes.loginButtonRoot}
          registerButtonRoot={this.props.classes.registerButtonRoot}
          registerButtonLabel={this.props.classes.registerButtonLabel}
          updateIsCartOpenLoginFlag={this.props.updateIsCartOpenLoginFlag}
          updateIsCartOpenRegisterModalFlag={
            this.props.updateIsCartOpenRegisterModalFlag
          }
          checkedIcon={this.props.classes.checkedIcon}
        />
        <PrescriptionsExpansionPanel
          expanded={this.state.expanded}
          loginState={this.props.loginState}
          cartState={this.props.cartState}
          handleChange={this.handleChange('panel2')}
          imageIcon={this.props.classes.imageIcon}
          expansionPanel={this.props.classes.expansionPanel}
          heading={this.props.classes.heading}
          thankYouWrapper={this.props.classes.thankYouWrapper}
          loginDescription={this.props.classes.loginDescription}
          nextButtonRoot={this.props.classes.nextButtonRoot}
          uploadPrescriptionLoading={this.props.uploadPrescriptionLoading}
          deletePrescriptionLoading={this.props.deletePrescriptionLoading}
          files={this.props.cartState.payload.cart_prescriptions}
          handleNextChange={this.handleNextChange.bind(
            this,
            'panel3',
            true,
            'prescriptionPanel'
          )}
          checkedIcon={this.props.classes.checkedIcon}
          checkboxWrapper={this.props.classes.checkboxWrapper}
          checkbox={this.props.classes.checkbox}
          teleconsultText={this.props.classes.teleconsultText}
          optForDoctorCallbackLoading={this.props.optForDoctorCallbackLoading}
        />
        <PatientDetailsExpansionPanel
          onClickOfPatient={this.props.onClickOfPatient}
          expanded={this.state.expanded}
          loginState={this.props.loginState}
          cartState={this.props.cartState}
          handleChange={this.handleChange('panel3')}
          imageIcon={this.props.classes.imageIcon}
          expansionPanel={this.props.classes.expansionPanel}
          heading={this.props.classes.heading}
          patientWrapper={this.props.classes.patientWrapper}
          patientContentWrapper={this.props.classes.patientContentWrapper}
          buttonRoot={this.props.classes.buttonRoot}
          buttonLabel={this.props.classes.buttonLabel}
          thankYouWrapper={this.props.classes.thankYouWrapper}
          submitPatientDetailsLoading={this.props.submitPatientDetailsLoading}
          openPatientFormDialog={this.state.openPatientFormDialog}
          savePatientToCartLoading={this.props.savePatientToCartLoading}
          customerState={this.props.customerState}
          patientDetailsState={this.props.patientDetailsState}
          patientIdSelected={
            this.props.cartState.payload.patient_details.payload.patient_id
          }
          cartType={this.props.cartState.payload.source_type}
          patientDetailsWrapper={this.props.classes.patientDetailsWrapper}
          nextButtonRoot={this.props.classes.nextButtonRoot}
          handleNextChange={this.handleNextChange.bind(
            this,
            'panel4',
            true,
            'patientPanel'
          )}
          checkedIconWrapper={this.props.classes.checkedIconWrapper}
          checkedIcon={this.props.classes.checkedIcon}
          patientDetails={this.props.classes.patientDetails}
          updatePatientFormValue={this.props.updatePatientFormValue}
          resetPatientSelected={this.props.resetPatientSelected}
          globalErrorState={this.props.globalErrorState}
          resetIsEditFlag={this.props.resetIsEditFlag}
        />
        <AddressDetailsExpansionPanel
          expanded={this.state.expanded}
          loginState={this.props.loginState}
          cartState={this.props.cartState}
          handleChange={this.handleChange('panel4')}
          imageIcon={this.props.classes.imageIcon}
          expansionPanel={this.props.classes.expansionPanel}
          heading={this.props.classes.heading}
          patientWrapper={this.props.classes.patientWrapper}
          patientContentWrapper={this.props.classes.patientContentWrapper}
          buttonRoot={this.props.classes.buttonRoot}
          buttonLabel={this.props.classes.buttonLabel}
          thankYouWrapper={this.props.classes.thankYouWrapper}
          submitDeliveryDetailsLoading={this.props.submitDeliveryDetailsLoading}
          saveDeliveryAddressToCartLoading={
            this.props.saveDeliveryAddressToCartLoading
          }
          openDeliveryFormDialog={this.state.openDeliveryFormDialog}
          customerState={this.props.customerState}
          deliveryFormState={this.props.deliveryDetailsState.addressForm}
          deliveryDetailsState={this.props.deliveryDetailsState}
          addressIdSelected={
            this.props.cartState.payload.shipping_address_details.payload
              .shipping_address_id
          }
          patientDetailsWrapper={this.props.classes.patientDetailsWrapper}
          nextButtonRoot={this.props.classes.nextButtonRoot}
          handleNextChange={this.handleNextChange.bind(
            this,
            'panel5',
            true,
            'addressPanel'
          )}
          checkedIconWrapper={this.props.classes.checkedIconWrapper}
          checkedIcon={this.props.classes.checkedIcon}
          patientDetails={this.props.classes.patientDetails}
          updateAddressFormValue={this.props.updateAddressFormValue}
          getLocalityDetailListLoading={this.props.getLocalityDetailListLoading}
          checkPincodeDetailLoading={this.props.checkPincodeLoading}
          checkPincodeState={this.props.checkPincodeState}
          updateLassuredExpressFlag={this.props.updateLassuredExpressFlag}
          resetDeliveryAddressSelected={this.props.resetDeliveryAddressSelected}
          globalErrorState={this.props.globalErrorState}
          resetPincodeState={this.props.resetPincodeState}
        />
        <PaymentExpansionPanel
          expanded={this.state.expanded}
          loginState={this.props.loginState}
          cartState={this.props.cartState}
          handleChange={this.handleChange('panel5')}
          imageIcon={this.props.classes.imageIcon}
          expansionPanel={this.props.classes.expansionPanel}
          heading={this.props.classes.heading}
          thankYouWrapper={this.props.classes.thankYouWrapper}
          radioButton={this.props.classes.radioButton}
          checked={this.props.classes.checked}
          paymentDescription={this.props.classes.paymentDescription}
          nextButtonRoot={this.props.classes.nextButtonRoot}
          selectPaymentMode={this.props.classes.selectPaymentMode}
          submitOrderLoading={this.props.submitOrderLoading}
          radioWrapper={this.props.classes.radioWrapper}
          optForExpressDeliveryLoading={this.props.optForExpressDeliveryLoading}
          constantsState={this.props.constantsState}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          autoHideDuration={SNACK_BAR_DURATION_3000}
          open={this.state.isShowSnackbar}
          onClose={this.handleClose.bind(this)}
          ContentProps={{
            'aria-describedby': 'cart-items'
          }}
          message={<span>{this.state.snackBarMsg}</span>}
        />
      </div>
    )
  }
}

export default withStyles(styles)(OrderSummary)
