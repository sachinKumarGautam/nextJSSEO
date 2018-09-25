import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import Button from '../../components/button'

import AddressDetails from './AddressDetails'
import SelectedAddressDetails from './SelectedAddressDetails'

import AddDeliveryAddressButton
  from '../deliveryDetails/AddDeliveryAddressButton'

import {
  LIFCARE_URGENT_CONFLICT_MSG,
  LIFCARE_ASSURED_CONFLICT_MSG
} from '../messages/cartMessages'

import { DELIVERY_OPTION_URGENT } from '../../components/constants/Constants'

const styles = theme => ({
  dialogWrapper: {
    width: theme.spacing.unit * 50
  },
  buttonRoot: {
    border: 'none',
    borderRadius: 0
  },
  cancelButtonLabel: {
    color: theme.palette.customGrey.grey500
  },
  okButtonLabel: {
    color: theme.palette.customGreen.green300
  },
  dialogContent: {
    ...theme.typography.body1
  }
})

class AddressDetailsExpansionPanel extends React.Component {
  state = {
    openDeliveryFormDialog: false,
    addressId: 0
  }

  openDeliveryFormModal (event) {
    event.stopPropagation()
    this.setState({
      openDeliveryFormDialog: true
    })
  }

  closeDeliveryFormModal () {
    this.setState({
      openDeliveryFormDialog: false
    })
  }

  closeExpressDialog () {
    this.props.updateLassuredExpressFlag(this.props.cartState, {
      isDialogOpen: false
    })
  }

  checkPincodeServiceble (deliveryDetails) {
    // save address id in local state for further access it while assigning in cart
    this.setState({
      addressId: deliveryDetails.id
    })

    this.props.checkPincodeDetailLoading(
      this.props.checkPincodeState,
      null, // handle close function for closing pincode popup
      null, // setSubmitting function while submitting form
      { pincode: deliveryDetails.pincode },
      {
        isDeliveryAddress: false,
        incrementCartItemLoading: null,
        inProgressCartItem: {},
        isCartAddressSelection: true,
        addressId: deliveryDetails.id,
        isDeliveryAssignment: true
      }
    )
  }

  saveSelectedAddress () {
    this.props.saveDeliveryAddressToCartLoading(
      this.props.cartState,
      this.state.addressId
    )
    this.props.updateLassuredExpressFlag(this.props.cartState, {
      isDialogOpen: false
    })
  }

  render () {
    const shippingAddressDetails = this.props.cartState.payload
      .shipping_address_details
    const patientDetails = this.props.cartState.payload.patient_details

    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel4'}
        onChange={
          this.props.loginState.isAuthenticated &&
            patientDetails.payload.patient_id
            ? this.props.handleChange
            : null
        }
        className={this.props.expansionPanel}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{
            content: this.props.patientContentWrapper
          }}
        >
          <img
            src='/static/images/delivery.svg'
            className={this.props.imageIcon}
          />
          <div className={this.props.patientWrapper}>
            <div className={this.props.checkedIconWrapper}>
              {this.props.expanded !== 'panel4' &&
                shippingAddressDetails.payload.shipping_address_id
                ? <SelectedAddressDetails
                  heading={this.props.heading}
                  patientDetails={this.props.patientDetails}
                  shipping_address={
                    shippingAddressDetails.payload.shipping_address
                  }
                />
                : <Typography component='h1' className={this.props.heading}>
                    Delivery Details
                </Typography>}
              {this.props.addressIdSelected
                ? <img
                  src='/static/images/checkedIcon.svg'
                  className={this.props.checkedIcon}
                />
                : null}
            </div>
            {this.props.expanded === 'panel4' &&
              <AddDeliveryAddressButton
                buttonRoot={this.props.buttonRoot}
                buttonLabel={this.props.buttonLabel}
                onClick={this.openDeliveryFormModal.bind(this)}
              />}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          classes={{
            root: this.props.thankYouWrapper
          }}
        >
          <AddressDetails
            isCartPage
            expanded={this.props.expanded}
            buttonRoot={this.props.buttonRoot}
            buttonLabel={this.props.buttonLabel}
            openDeliveryFormModal={this.openDeliveryFormModal.bind(this)}
            submitDeliveryDetailsLoading={
              this.props.submitDeliveryDetailsLoading
            }
            openDeliveryFormDialog={this.state.openDeliveryFormDialog}
            customerState={this.props.customerState}
            deliveryFormState={this.props.deliveryFormState}
            deliveryDetailsState={this.props.deliveryDetailsState}
            closeDeliveryFormModal={this.closeDeliveryFormModal.bind(this)}
            checkPincodeServiceble={this.checkPincodeServiceble.bind(this)}
            addressIdSelected={this.props.addressIdSelected}
            addressDetailsWrapper={this.props.patientDetailsWrapper}
            updateAddressFormValue={this.props.updateAddressFormValue}
            checkPincodeDetailLoading={this.props.checkPincodeDetailLoading}
            getLocalityDetailListLoading={
              this.props.getLocalityDetailListLoading
            }
            checkPincodeState={this.props.checkPincodeState}
            inProgressAddressId={this.state.addressId}
            shippingAddressDetails={shippingAddressDetails}
          />
          <Button
            size='small'
            color='primary'
            variant='raised'
            classes={{
              root: this.props.nextButtonRoot
            }}
            label={'NEXT'}
            onClick={this.props.handleNextChange}
          />

          <Dialog
            open={this.props.cartState.isLAssuredLExpressAlertOpen}
            onClose={this.closeExpressDialog.bind(this)}
            aria-labelledby='Express delivery alert'
            classes={{
              paper: this.props.classes.dialogWrapper
            }}
          >
            <DialogTitle id='Express delivery alert'>
              {this.props.cartState.payload.delivery_option ===
                DELIVERY_OPTION_URGENT &&
                !this.props.checkPincodeState.payload.is_urgent_dl_available
                ? 'Lifcare Express Delivery Alert'
                : 'Lifcare Assured Service Alert'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {this.props.cartState.payload.delivery_option ===
                  DELIVERY_OPTION_URGENT &&
                  !this.props.checkPincodeState.payload.is_urgent_dl_available
                  ? LIFCARE_URGENT_CONFLICT_MSG
                  : LIFCARE_ASSURED_CONFLICT_MSG}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.closeExpressDialog.bind(this)}
                color='primary'
                classes={{
                  root: this.props.classes.buttonRoot,
                  label: this.props.classes.cancelButtonLabel
                }}
                label={'Cancel'}
              >
                Cancel
              </Button>
              <Button
                onClick={this.saveSelectedAddress.bind(this)}
                color='primary'
                autoFocus
                classes={{
                  root: this.props.classes.buttonRoot,
                  label: this.props.classes.okButtonLabel
                }}
                label={'OK'}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(AddressDetailsExpansionPanel)
