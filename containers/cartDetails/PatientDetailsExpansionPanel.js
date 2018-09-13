import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '../../components/button'

import PatientDetails from './PatientDetails'
import SelectedPatientDetails from './SelectedPatientDetails'

import AddPatientButton from '../patientDetails/AddPatientButton'

class PatientDetailsExpansionPanel extends React.Component {
  state = {
    openPatientFormDialog: false,
    inProgressPatientId: 0
  }

  openPatientFormModal () {
    this.setState({
      openPatientFormDialog: true
    })
  }

  closePatientFormModal () {
    this.setState({
      openPatientFormDialog: false
    })
  }

  savePatientSelected (patientSelected) {
    this.setState({
      inProgressPatientId: patientSelected.id
    })

    this.props.savePatientToCartLoading(
      this.props.cartState,
      patientSelected,
      this.props.cartState.payload.uid
    )
  }

  render () {
    const patientDetails = this.props.cartState.payload.patient_details
    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel3'}
        onChange={
          this.props.loginState.isAuthenticated &&
          (
            this.props.cartState.payload.cart_items.payload.length ||
            this.props.cartState.payload.cart_prescriptions.length ||
            this.props.cartState.payload.is_doctor_callback.payload
          ) ? this.props.handleChange : null
        }
        className={this.props.expansionPanel}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{
            content: this.props.patientContentWrapper
          }}
        >
          <img src='/static/images/loggedIn.svg' className={this.props.imageIcon} />
          <div className={this.props.patientWrapper}>
            <div className={this.props.checkedIconWrapper}>
              {
                this.props.expanded !== 'panel3' &&
                patientDetails.payload.patient_id
                  ? (
                    <SelectedPatientDetails
                      heading={this.props.heading}
                      patientDetails={this.props.patientDetails}
                      patient={patientDetails.payload}
                    />
                  ) : (
                    <Typography
                      component='h1'
                      className={this.props.heading}
                    >
                    Patient Details
                    </Typography>
                  )
              }
              {
                this.props.patientIdSelected
                  ? (
                    <img src='/static/images/checkedIcon.svg' className={this.props.checkedIcon} />
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
            isCartPage
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
            patientDetails={patientDetails}
            inProgressPatientId={this.state.inProgressPatientId}
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
              this.props.loginState.isAuthenticated &&
              patientDetails.payload.patient_id
                ? this.props.handleNextChange
                : null
            }
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default PatientDetailsExpansionPanel
