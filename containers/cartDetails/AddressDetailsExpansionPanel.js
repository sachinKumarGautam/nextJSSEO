import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Button from '../../components/button'

import AddressDetails from './AddressDetails'
import SelectedAddressDetails from './SelectedAddressDetails'

import AddDeliveryAddressButton from '../deliveryDetails/AddDeliveryAddressButton'

class AddressDetailsExpansionPanel extends React.Component {
  state = {
    openDeliveryFormDialog: false
  }

  openDeliveryFormModal () {
    this.setState({
      openDeliveryFormDialog: true
    })
  }

  closeDeliveryFormModal () {
    this.setState({
      openDeliveryFormDialog: false
    })
  }

  saveAddressSelected (addressIdSelected) {
    this.props.saveDeliveryAddressToCartLoading(
      this.props.cartState,
      addressIdSelected
    )
  }

  render () {
    const shippingAddressDetails = this.props.cartState.payload.shipping_address_details
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
          <img src='/static/images/delivery.svg' className={this.props.imageIcon} />
          <div className={this.props.patientWrapper}>
            <div className={this.props.checkedIconWrapper}>
              {
                this.props.expanded !== 'panel4' &&
                shippingAddressDetails.payload.shipping_address_id
                  ? (
                    <SelectedAddressDetails
                      heading={this.props.heading}
                      patientDetails={this.props.patientDetails}
                      shipping_address={shippingAddressDetails.payload.shipping_address}
                    />
                  ) : (
                    <Typography
                      component='h1'
                      className={this.props.heading}
                    >
                    Delivery Details
                    </Typography>
                  )
              }
              {
                this.props.addressIdSelected
                  ? (
                    <img src='/static/images/checkedIcon.svg' className={this.props.checkedIcon} />
                  ) : null
              }
            </div>
            {
              this.props.expanded === 'panel4' &&
              <AddDeliveryAddressButton
                buttonRoot={this.props.buttonRoot}
                buttonLabel={this.props.buttonLabel}
                onClick={this.openDeliveryFormModal.bind(this)}
              />
            }
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
            submitDeliveryDetailsLoading={this.props.submitDeliveryDetailsLoading}
            openDeliveryFormDialog={this.state.openDeliveryFormDialog}
            customerState={this.props.customerState}
            deliveryFormState={this.props.deliveryFormState}
            deliveryDetailsState={this.props.deliveryDetailsState}
            closeDeliveryFormModal={this.closeDeliveryFormModal.bind(this)}
            saveAddressSelected={this.saveAddressSelected.bind(this)}
            addressIdSelected={this.props.addressIdSelected}
            addressDetailsWrapper={this.props.patientDetailsWrapper}
            updateAddressFormValue={this.props.updateAddressFormValue}
            checkPincodeDetailLoading={this.props.checkPincodeDetailLoading}
            getLocalityDetailListLoading={this.props.getLocalityDetailListLoading}
          />
          <Button
            size='small'
            color='primary'
            variant='raised'
            classes={{
              root: this.props.nextButtonRoot
            }}
            label={'NEXT'}
            onClick={
              shippingAddressDetails.payload.shipping_address_id
                ? this.props.handleNextChange
                : null
            }
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default AddressDetailsExpansionPanel
