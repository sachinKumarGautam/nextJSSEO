import React from 'react';

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from '../../components/button'

import ImagePicker from './ImagePicker'
import LoginDetails from './LoginDetails'
import PatientDetails from './PatientDetails'
import AddressDetails from './AddressDetails'

import AddDeliveryAddressButton from '../deliveryDetails/AddDeliveryAddressButton'
import DeliveryDetailForm from '../deliveryDetails/DeliveryDetailsForm'

const styles = theme => ({
  root: {
    width: '100%',
  },
  expansionPanel: {
    marginBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    fontSize: theme.spacing.unit * 2.75,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 1.25
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  buttonRoot: {
    border: `1px solid ${theme.palette.primary.main}`,
    // backgroundColor: theme.palette.primary.main
  },
  buttonLabel: {
    color: theme.palette.primary.main
  },
  patientDetailsWrapper: {
    border: `1px solid ${theme.palette.grey['200']}`,
    padding: theme.spacing.unit * 2.5,
    marginLeft: theme.spacing.unit * 1.25
  },
  loginWrapperClass: {
    display: 'flex',
    flexDirection: 'column'
  }
});

class OrderSummary extends React.Component {
  state = {
    expanded: 'panel1',
    openPatientFormDialog: false,
    openDeliveryFormDialog: false
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleNextChange = (panel, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  savePatientToCart(patientId) {
    this.props.savePatientToCartLoading(
      this.props.cartState,
      patientId,
      this.props.cartState.payload.uid
    )
  }

  saveDeliveryAddressToCart(addressId) {
    this.props.saveDeliveryAddressToCartLoading(
      this.props.cartState,
      addressId
    )
  }

  openLoginModal() {
    const isCartOpenLoginDialog = true

    this.props.updateIsCartOpenLoginFlag(
      this.props.cartState,
      isCartOpenLoginDialog
    )
  }

  openRegisterModal() {
    const isCartOpenRegisterDialog = true

    this.props.updateIsCartOpenRegisterModalFlag(
      this.props.cartState,
      isCartOpenRegisterDialog
    )
  }

  onImageSelection(event) {
    this.props.uploadPrescriptionLoading(
      this.props.cartState,
      event.target.files[0]
    )
  }

  onDeleteButton(index) {
    this.props.deletePrescriptionLoading(
      this.props.cartState,
      [],
      index
    )
  }

  // onViewImage() {
  //
  // }

  placeOrder() {
    this.props.submitOrderLoading(
      this.props.cartState
    )
  }

  saveAddressSelected(addressIdSelected) {
    this.props.saveDeliveryAddressToCartLoading(
      this.props.cartState,
      addressIdSelected
    )
  }

  savePatientSelected(patientIdSelected) {
    this.props.savePatientToCartLoading(
      this.props.cartState,
      patientIdSelected,
      this.props.cartState.payload.uid
    )
  }

  openPatientFormModal() {
    this.setState({
      openPatientFormDialog: true
    })
  }

  closePatientFormModal() {
    this.setState({
      openPatientFormDialog: false
    })
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

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === 'panel1'}
          //onChange={this.handleNextChange.bind(this, 'panel1')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <img src='/static/images/loggedIn.svg' />
            <Typography className={classes.heading}>
              {
                !this.props.loginState.isAuthenticated
                ? (
                  'Log in'
                ) : (
                  this.props.customerState.payload.full_name
                )
              }
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <LoginDetails
              loginState={this.props.loginState}
              buttonRoot={this.props.classes.buttonRoot}
              buttonLabel={this.props.classes.buttonLabel}
              openLoginModal={this.openLoginModal.bind(this)}
              openRegisterModal={this.openRegisterModal.bind(this)}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <img src='/static/images/attachedPrescriptions.svg' />
            <Typography className={classes.heading}>Attached Prescriptions</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              *Upload your prescription. If you do not have a ready prescription,
              you may opt for a tele-consultation with our doctor and create a prescription.
              <ImagePicker
                onImageSelection={this.onImageSelection.bind(this)}
                files={this.props.cartState.payload.cart_prescriptions}
                onDeleteButton={this.onDeleteButton.bind(this)}
                //onViewImage={this.onViewImage}
              />
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              label={'NEXT'}
              onClick={this.handleNextChange.bind(this, 'panel3', true)}
            />
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel3'}
          //onChange={this.handleChange('panel3')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <Typography className={classes.heading}>Patient Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <PatientDetails
              expanded={this.state.expanded}
              buttonRoot={this.props.classes.buttonRoot}
              buttonLabel={this.props.classes.buttonLabel}
              openPatientFormModal={this.openPatientFormModal.bind(this)}
              submitPatientDetailsLoading={this.props.submitPatientDetailsLoading}
              openPatientFormDialog={this.state.openPatientFormDialog}
              customerState={this.props.customerState}
              patientDetailsState={this.props.patientDetailsState}
              closePatientFormModal={this.closePatientFormModal.bind(this)}
              savePatientSelected={this.savePatientSelected.bind(this)}
              patientIdSelected={this.props.cartState.payload.patient_id.payload}
            />
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              label={'NEXT'}
              onClick={this.handleNextChange.bind(this, 'panel4', true)}
            />
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel4'}
          //onChange={this.handleChange('panel4')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <Typography className={classes.heading}>Delivery Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <AddressDetails
              expanded={this.state.expanded}
              buttonRoot={this.props.classes.buttonRoot}
              buttonLabel={this.props.classes.buttonLabel}
              openDeliveryFormModal={this.openDeliveryFormModal.bind(this)}
              submitDeliveryDetailsLoading={this.props.submitDeliveryDetailsLoading}
              openDeliveryFormDialog={this.state.openDeliveryFormDialog}
              customerState={this.props.customerState}
              deliveryFormState={this.props.deliveryDetailsState.deliveryFormState}
              deliveryDetailsState={this.props.deliveryDetailsState}
              closeDeliveryFormModal={this.closeDeliveryFormModal.bind(this)}
              saveAddressSelected={this.saveAddressSelected.bind(this)}
              addressIdSelected={this.props.cartState.payload.patient_id.payload}
            />
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              label={'NEXT'}
              onClick={this.handleNextChange.bind(this, 'panel5', true)}
            />
          </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel5'}
          //onChange={this.handleChange('panel5')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <Typography className={classes.heading}>Payment</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              CASH ON DELIVERY
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              label={'Place Order'}
              onClick={this.placeOrder.bind(this)}
            />
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(OrderSummary);
