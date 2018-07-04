import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Button from '../../components/button'
import PatientDetailsCardWrapper from './PatientDetailsCardWrapper'

import PatientDetailForm from './PatientDetailForm'

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
    }
  }
}

class PatientDetailsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientIdSelected: 0,
      openPatientFormDialog: false
    }
  }

  savePatientSelected(patientIdSelected) {
    this.setState({
      patientIdSelected: patientIdSelected
    })

    this.props.savePatientSelected(
      this.props.patientDetailsState,
      patientIdSelected
    )
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
              <Button
                size='small'
                variant='outlined'
                color='primary'
                classes={{
                  root: this.props.classes.buttonRoot,
                  label: this.props.classes.buttonLabel
                }}
                style={{float: 'right'}}
                label={'ADD NEW PATIENT'}
                onClick={this.openPatientFormModal.bind(this)}
              />
              {
                this.state.openPatientFormDialog &&
                <PatientDetailForm
                  closePatientFormModal = {this.closePatientFormModal.bind(this)}
                  openPatientFormDialog = {this.state.openPatientFormDialog}
                  patientFormState = {this.props.patientDetailsState}
                  onSubmit = {this.props.submitPatientDetailsLoading}
                  customerId = {this.props.customerState.payload.id}
                />
              }
            </div>
          </div>
          <PatientDetailsCardWrapper
            payload={this.props.patientDetailsState.payload}
            savePatientSelected={this.savePatientSelected.bind(this)}
            patientIdSelected={this.state.patientIdSelected}
          />
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(PatientDetailsList)
