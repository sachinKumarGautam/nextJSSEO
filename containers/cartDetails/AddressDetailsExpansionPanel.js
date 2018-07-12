import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import Button from '../../components/button'

import AddressDetails from './AddressDetails'

import AddDeliveryAddressButton from '../deliveryDetails/AddDeliveryAddressButton'

class AddressDetailsExpansionPanel extends React.Component {
  state = {
    openDeliveryFormDialog: false
  }

  openDeliveryFormModal() {
    this.setState({
      openDeliveryFormDialog: true
    })
  }

  closeDeliveryFormModal() {
    this.setState({
      openDeliveryFormDialog: false
    })
  }

  saveAddressSelected(addressIdSelected) {
    this.props.saveDeliveryAddressToCartLoading(
      this.props.cartState,
      addressIdSelected
    )
  }

  render() {
    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel4'}
        onChange={
          this.props.loginState.isAuthenticated
          ? this.props.handleChange
          : null
        }
        className={this.props.expansionPanel}
      >
        <ExpansionPanelSummary
          expandIcon={<div />}
          classes={{
            content: this.props.patientContentWrapper
          }}
        >
          <img src='/static/images/attachedPrescriptions.svg' />
          <div className={this.props.patientWrapper}>
            <Typography
              component='h1'
              className={this.props.heading}
            >
              Delivery Details
            </Typography>
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
            isCartPage={true}
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default AddressDetailsExpansionPanel;
