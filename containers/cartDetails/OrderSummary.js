import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import LoginExpansionPanel from './LoginExpansionPanel'
import PrescriptionsExpansionPanel from './PrescriptionsExpansionPanel'
import PatientDetailsExpansionPanel from './PatientDetailsExpansionPanel'
import AddressDetailsExpansionPanel from './AddressDetailsExpansionPanel'
import PaymentExpansionPanel from './PaymentExpansionPanel'

const styles = theme => ({
  root: {
    width: '100%',
  },
  expansionPanel: {
    marginBottom: theme.spacing.unit * 2
  },
  heading: {
    ...theme.typography.title,
    fontSize: theme.typography.pxToRem(19),
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 2.5,
    marginTop: theme.spacing.unit / 2
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
    flexDirection: 'row'
  },
  loginDescription: {
    marginLeft: theme.spacing.unit * 6.25,
    fontSize: theme.spacing.unit * 1.75,
    color: theme.palette.customGrey.grey500
  },
  loginDetailsWrapper: {
    marginTop: theme.spacing.unit * 2.5,
    marginLeft:  theme.spacing.unit * 6.25
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
  thankYouWrapper: {
    flex: 12,
    flexDirection: 'column'
  },
  checked: {},
  imageIcon:{
    width: theme.spacing.unit * 3.5
  }
});

class OrderSummary extends React.Component {
  state = {
    expanded: !this.props.loginState.isAuthenticated ? 'panel1' : 'panel2'
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

  render() {
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
          updateIsCartOpenRegisterModalFlag={this.props.updateIsCartOpenRegisterModalFlag}
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
          handleNextChange={this.handleNextChange.bind(this, 'panel3', true)}
        />
        <PatientDetailsExpansionPanel
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
          patientIdSelected={this.props.cartState.payload.patient_id.payload}
          patientDetailsWrapper={this.props.classes.patientDetailsWrapper}
          nextButtonRoot={this.props.classes.nextButtonRoot}
          handleNextChange={this.handleNextChange.bind(this, 'panel4', true)}
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
          saveDeliveryAddressToCartLoading={this.props.saveDeliveryAddressToCartLoading}
          openDeliveryFormDialog={this.state.openDeliveryFormDialog}
          customerState={this.props.customerState}
          deliveryFormState={this.props.deliveryDetailsState.deliveryFormState}
          deliveryDetailsState={this.props.deliveryDetailsState}
          addressIdSelected={this.props.cartState.payload.shipping_address_id.payload}
          patientDetailsWrapper={this.props.classes.patientDetailsWrapper}
          nextButtonRoot={this.props.classes.nextButtonRoot}
          handleNextChange={this.handleNextChange.bind(this, 'panel5', true)}
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
          submitOrderLoading={this.props.submitOrderLoading}
        />
      </div>
    );
  }
}

export default withStyles(styles)(OrderSummary);
