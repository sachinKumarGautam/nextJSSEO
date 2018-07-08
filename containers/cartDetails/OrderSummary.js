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
import PatientDetailsCard from '../../components/PatientDetailsCard'
import AddressDetailsCard from '../../components/AddressDetailsCard'
import ImagePicker from './ImagePicker'

import AddPatientButton from '../patientDetails/AddPatientButton'
import PatientDetailForm from '../patientDetails/PatientDetailForm'

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
    backgroundColor: theme.palette.primary.main
  },
  buttonLabel: {
    color: theme.palette.common.white
  },
  patientDetailsWrapper: {
    border: '1px solid #eee',
    padding: theme.spacing.unit * 2.5,
    marginLeft: theme.spacing.unit * 1.25
  }
});

class OrderSummary extends React.Component {
  state = {
    expanded: 'panel1',
    patientIdSelected: 0,
    addressIdSelected: 0,
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
      '680a75c5-7965-4f9d-ab2f-14cb0ce16c2c'
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

  onViewImage() {

  }

  placeOrder() {
    this.props.submitOrderLoading(
      this.props.cartState
    )
  }

  saveAddressSelected(addressIdSelected) {
    this.setState({
      addressIdSelected: addressIdSelected
    })

    this.props.saveDeliveryAddressToCartLoading(
      this.props.cartState,
      addressIdSelected
    )
  }

  savePatientSelected(patientIdSelected) {
    this.setState({
      patientIdSelected: patientIdSelected
    })

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
            {
              !this.props.loginState.isAuthenticated &&
              <Grid container spacing={24}>
                <Grid item xs={2}>
                  <Button
                    size='small'
                    variant='outlined'
                    color='primary'
                    classes={{
                      root: this.props.classes.buttonRoot,
                      label: this.props.classes.buttonLabel
                    }}
                    label={'Login'}
                    onClick={this.openLoginModal.bind(this)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    size='small'
                    variant='outlined'
                    color='primary'
                    classes={{
                      root: this.props.classes.buttonRoot,
                      label: this.props.classes.buttonLabel
                    }}
                    label={'Register'}
                    onClick={this.openRegisterModal.bind(this)}
                  />
                </Grid>
              </Grid>
            }
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
                onViewImage={this.onViewImage}
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
            <Grid container spacing={24}>
              <Grid item xs={12}>
                {
                  this.state.expanded === 'panel3' &&
                  <AddPatientButton
                    buttonRoot={this.props.classes.buttonRoot}
                    buttonLabel={this.props.classes.buttonLabel}
                    onClick={this.openPatientFormModal.bind(this)}
                  />
                }
                <PatientDetailForm
                  closePatientFormModal={this.closePatientFormModal.bind(this)}
                  openPatientFormDialog={this.state.openPatientFormDialog}
                  patientFormState={this.props.patientDetailsState}
                  customerState={this.props.customerState}
                  submitPatientDetailsLoading={this.props.submitPatientDetailsLoading}
                  isEdit={'false'}
                />
              </Grid>
              {
                this.props.patientDetailsState.payload.map(patientDetail => {
                  return (
                    <Grid item xs={6}>
                      <PatientDetailsCard
                        patientDetail={patientDetail}
                        savePatientSelected={this.savePatientSelected.bind(this)}
                        patientIdSelected={this.state.patientIdSelected}
                      />
                    </Grid>
                  )
                })
              }
            </Grid>
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
          </ExpansionPanelDetails>
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
            <Grid container spacing={24}>
              <Grid item xs={12}>
                {
                  this.state.expanded === 'panel4' &&
                  <AddDeliveryAddressButton
                    buttonRoot={this.props.classes.buttonRoot}
                    buttonLabel={this.props.classes.buttonLabel}
                    onClick={this.openDeliveryFormModal.bind(this)}
                  />
                }
                <DeliveryDetailForm
                  onSubmit={this.props.submitDeliveryDetailsLoading}
                  openDeliveryFormDialog={this.state.openDeliveryFormDialog}
                  customerState={this.props.customerState}
                  deliveryDetailsState={this.props.deliveryDetailsState}
                  deliveryFormState={this.props.deliveryDetailsState.deliveryFormState}
                  closeDeliveryFormModal={this.closeDeliveryFormModal.bind(this)}
                />
              </Grid>
              {
                this.props.deliveryDetailsState.payload.map(deliveryDetail => {
                  return (
                    <Grid item xs={6}>
                      <AddressDetailsCard
                        deliveryDetail={deliveryDetail}
                        saveAddressSelected={this.saveAddressSelected.bind(this)}
                        addressIdSelected={this.state.addressIdSelected}
                      />
                    </Grid>
                  )
                })
              }
            </Grid>
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
          </ExpansionPanelDetails>
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
