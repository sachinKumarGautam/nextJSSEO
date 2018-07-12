import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import Button from '../../components/button'

import PatientDetails from './PatientDetails'

import AddPatientButton from '../patientDetails/AddPatientButton'

class PatientDetailsExpansionPanel extends React.Component {
  state = {
    openPatientFormDialog: false
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

  savePatientSelected(patientIdSelected) {
    this.props.savePatientToCartLoading(
      this.props.cartState,
      patientIdSelected,
      this.props.cartState.payload.uid
    )
  }

  render() {
    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel3'}
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
          <img src='/static/images/loggedIn.svg' className={this.props.imageIcon}/>
          <div className={this.props.patientWrapper}>
            <div className={this.props.checkedIconWrapper}>
              <Typography
                component='h1'
                className={this.props.heading}
              >
                Patient Details
              </Typography>
              {
                this.props.patientIdSelected
                ? (
                  <img src='/static/images/checkedIcon.svg' className={this.props.checkedIcon}/>
                ) : null                
              }
            </div>
            {
              this.props.expanded === 'panel3' &&
              <AddPatientButton
                buttonRoot={this.props.buttonRoot}
                buttonLabel={this.props.buttonLabel}
                onClick={this.openPatientFormModal.bind(this)}
              />
            }
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          classes={{
            root: this.props.thankYouWrapper
          }}
        >
          <PatientDetails
            isCartPage={true}
            expanded={this.props.expanded}
            buttonRoot={this.props.buttonRoot}
            buttonLabel={this.props.buttonLabel}
            openPatientFormModal={this.openPatientFormModal.bind(this)}
            submitPatientDetailsLoading={this.props.submitPatientDetailsLoading}
            openPatientFormDialog={this.state.openPatientFormDialog}
            customerState={this.props.customerState}
            patientDetailsState={this.props.patientDetailsState}
            closePatientFormModal={this.closePatientFormModal.bind(this)}
            savePatientSelected={this.savePatientSelected.bind(this)}
            patientIdSelected={this.props.patientIdSelected}
            patientDetailsWrapper={this.props.patientDetailsWrapper}
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
              this.props.loginState.isAuthenticated
              ? this.props.handleNextChange
              : null
            }
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default PatientDetailsExpansionPanel;
