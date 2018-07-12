import React from 'react';

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Radio from '@material-ui/core/Radio';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '../../components/button'

import ImagePicker from './ImagePicker'
import LoginDetails from './LoginDetails'
import PatientDetails from './PatientDetails'
import AddressDetails from './AddressDetails'

import AddPatientButton from '../patientDetails/AddPatientButton'
import AddDeliveryAddressButton from '../deliveryDetails/AddDeliveryAddressButton'

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
    marginLeft: theme.spacing.unit * 2.5,
    letterSpacing: theme.spacing.unit * 0.275
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  buttonRoot: {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  buttonLabel: {
    color: theme.palette.primary.main
  },
  loginButtonRoot: {
    width: '100%'
  },
  nextButtonRoot: {
    marginTop: theme.spacing.unit *  2.5,
    width: theme.spacing.unit *  18.5,
    float: 'right',
    marginRight: theme.spacing.unit *  2.5
  },
  registerButtonRoot: {
    border: `1px solid ${theme.palette.primary.main}`,
    width: '100%'
  },
  registerButtonLabel: {
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
  },
  patientWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    width: '94%'
  },
  patientContentWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  loginDescription: {
    marginLeft: theme.spacing.unit * 6.25,
    fontSize: theme.spacing.unit * 1.75,
    color: theme.palette.customGrey.grey500
  },
  loginDetailsWrapper: {
    marginTop: theme.spacing.unit * 2.5
  },
  paymentDescription: {
    marginTop: theme.spacing.unit * 1.25
  },
  radioButton: {
    color: theme.palette.customGrey.grey500,
    '&$checked': {
      color: theme.palette.customGreen.green300,
    }
  },
  checked: {},
  checkboxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing.unit * 2
  },
  teleconsultText: {
    ...theme.typography.body2,
    marginTop: theme.spacing.unit * 1.25
  }
});

class OrderSummary extends React.Component {
  state = {
    expanded: !this.props.loginState.isAuthenticated ? 'panel1' : 'panel2',
    openPatientFormDialog: false,
    openDeliveryFormDialog: false
  };

  componentDidUpdate(prevProps) {
    if(this.props.loginState.isAuthenticated !== prevProps.loginState.isAuthenticated) {
      this.setState({
        expanded: 'panel2'
      })
    }
  }

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

  onClickOfDoctorCallBack () {
    this.props.optForDoctorCallbackLoading(
      this.props.cartState,
      this.props.cartState.payload.uid,
      !this.props.cartState.payload.is_doctor_callback.payload
    )
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={
            !this.props.loginState.isAuthenticated
            ? this.handleChange('panel1')
            : null
          }
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <img src='/static/images/loggedIn.svg' />
            <Typography className={classes.heading}>
              {
                !this.props.loginState.isAuthenticated
                ? (
                  'Login/Register'
                ) : (
                  this.props.customerState.payload.full_name
                )
              }
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={this.props.classes.loginDescription}>
              To place an order now, login to your existing account or register
              <div className={this.props.classes.loginDetailsWrapper}>
                <LoginDetails
                  loginState={this.props.loginState}
                  loginButtonRoot={this.props.classes.loginButtonRoot}
                  registerButtonRoot={this.props.classes.registerButtonRoot}
                  registerButtonLabel={this.props.classes.registerButtonLabel}
                  openLoginModal={this.openLoginModal.bind(this)}
                  openRegisterModal={this.openRegisterModal.bind(this)}
                />
              </div>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <img src='/static/images/attachedPrescriptions.svg' />
            <Typography className={classes.heading}>Upload Prescriptions</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={this.props.classes.loginDescription}>
              *Upload your prescription. If you do not have a ready prescription,
              you may opt for a tele-consultation with our doctor and create a prescription.
              <ImagePicker
                onImageSelection={this.onImageSelection.bind(this)}
                files={this.props.cartState.payload.cart_prescriptions}
                onDeleteButton={this.onDeleteButton.bind(this)}
                //onViewImage={this.onViewImage}
              />
              <div className={this.props.classes.checkboxWrapper}>
                <div className={this.props.classes.checkbox}>
                  <Checkbox
                    checked={this.props.cartState.payload.is_doctor_callback.payload}
                    onChange={this.onClickOfDoctorCallBack.bind(this)}
                    color="primary"
                    disabled={
                      this.props.cartState.prescriptionDetails.cartPrescriptionList.length > 0
                    }
                  />
                  <Typography
                    variant='caption'
                    className={this.props.classes.teleconsultText}
                  >
                    Opt in for Free Doctor Consultation
                  </Typography>
                </div>
                <Button
                  size='small'
                  color='primary'
                  variant='raised'
                  classes={{
                    root: this.props.classes.nextButtonRoot
                  }}
                  label={'NEXT'}
                  onClick={
                    this.props.loginState.isAuthenticated
                    ? this.handleNextChange.bind(this, 'panel3', true)
                    : null
                  }
                />
              </div>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel3'}
          onChange={
            this.props.loginState.isAuthenticated
            ? this.handleChange('panel3')
            : null
          }
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary
            expandIcon={<div />}
            classes={{
              content: this.props.classes.patientContentWrapper
            }}
          >
            <img src='/static/images/loggedIn.svg' />
            <div className={this.props.classes.patientWrapper}>
              <Typography className={classes.heading}>Patient Details</Typography>
              {
                this.state.expanded === 'panel3' &&
                <AddPatientButton
                  buttonRoot={this.props.classes.buttonRoot}
                  buttonLabel={this.props.classes.buttonLabel}
                  onClick={this.openPatientFormModal.bind(this)}
                />
              }
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <PatientDetails
                isCartPage={true}
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
              <Button
                size='small'
                color='primary'
                variant='raised'
                classes={{
                  root: this.props.classes.nextButtonRoot
                }}
                label={'NEXT'}
                onClick={
                  this.props.loginState.isAuthenticated
                  ? this.handleNextChange.bind(this, 'panel4', true)
                  : null
                }
              />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel4'}
          onChange={
            this.props.loginState.isAuthenticated
            ? this.handleChange('panel4')
            : null
          }
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary
            expandIcon={<div />}
            classes={{
              content: this.props.classes.patientContentWrapper
            }}
          >
            <img src='/static/images/attachedPrescriptions.svg' />
            <div className={this.props.classes.patientWrapper}>
              <Typography className={classes.heading}>Delivery Details</Typography>
              {
                this.state.expanded === 'panel4' &&
                <AddDeliveryAddressButton
                  buttonRoot={this.props.classes.buttonRoot}
                  buttonLabel={this.props.classes.buttonLabel}
                  onClick={this.openDeliveryFormModal.bind(this)}
                />
              }
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <AddressDetails
                isCartPage={true}
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
                addressIdSelected={this.props.cartState.payload.shipping_address_id.payload}
              />
              <Button
                size='small'
                color='primary'
                variant='raised'
                classes={{
                  root: this.props.classes.nextButtonRoot
                }}
                label={'NEXT'}
                onClick={this.handleNextChange.bind(this, 'panel5', true)}
              />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel5'}
          onChange={
            this.props.loginState.isAuthenticated
            ? this.handleChange('panel5')
            : null
          }
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <img src='/static/images/attachedPrescriptions.svg' />
            <Typography className={classes.heading}>Payment</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Radio
              checked={true}
              name="radio-button-demo"
              classes={{
                root: this.props.classes.radioButton,
                checked: this.props.classes.checked,
              }}
            />
            <Typography className={this.props.classes.paymentDescription}>
              CASH ON DELIVERY
              <Button
                size='small'
                color='primary'
                variant='raised'
                classes={{
                  root: this.props.classes.nextButtonRoot
                }}
                label={'Place Order'}
                onClick={this.placeOrder.bind(this)}
              />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(OrderSummary);
