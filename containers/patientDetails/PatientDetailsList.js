import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import PatientDetailsCardWrapper from './PatientDetailsCardWrapper'

import PatientDetailForm from './PatientDetailForm'
import AddPatientButton from './AddPatientButton'

const styles = theme => {
  return {
    card: {
      marginLeft: theme.spacing.unit * 6
    },
    cardContent: {
      paddingBottom: 0
    },
    nameStyle: {
      ...theme.typography.subheading,
      marginBottom: theme.spacing.unit * 4,
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      color: theme.palette.primary.main
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: theme.spacing.unit * 2
    },
    title: {
      ...theme.typography.headline,
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 6
    },
    titleWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    patientDetailsCardWrapper: {
      padding: theme.spacing.unit * 1.25
    }
  }
}

class PatientDetailsList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openPatientFormDialog: false
    }
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

    this.props.resetPatientSelected(this.props.patientDetailsState)
  }

  savePatientSelected (patientDetail) {
    this.props.savePatientSelected(
      this.props.patientDetailsState,
      patientDetail
    )
  }

  render () {
    return (
      <Card elevation={'1'} className={this.props.classes.card}>
        <CardContent className={this.props.classes.cardContent}>
          <div className={this.props.classes.titleWrapper}>
            <Typography
              gutterBottom
              variant='title'
              component='h1'
              className={this.props.classes.title}
            >
              Patients
            </Typography>
            <div className={this.props.classes.buttonWrapper}>
              <AddPatientButton
                buttonRoot={this.props.classes.buttonRoot}
                buttonLabel={this.props.classes.buttonLabel}
                onClick={this.openPatientFormModal.bind(this)}
              />
              <PatientDetailForm
                closePatientFormModal={this.closePatientFormModal.bind(this)}
                openPatientFormDialog={this.state.openPatientFormDialog}
                patientFormState={this.props.patientDetailsState}
                customerState={this.props.customerState}
                submitPatientDetailsLoading={
                  this.props.submitPatientDetailsLoading
                }
                isEdit={'false'}
              />
            </div>
          </div>
          <PatientDetailsCardWrapper
            openPatientFormModal={this.openPatientFormModal.bind(this)}
            savePatientSelected={this.savePatientSelected.bind(this)}
            payload={this.props.patientDetailsState.payload}
            isLoading={this.props.patientDetailsState.isLoading}
            patientDetailsCardWrapper={
              this.props.classes.patientDetailsCardWrapper
            }
          />
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(PatientDetailsList)
