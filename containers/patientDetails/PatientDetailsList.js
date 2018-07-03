import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

import Button from '../../components/button'
import PatientDetailsCard from '../../components/PatientDetailsCard'

import PatientDetailForm from './PatientDetailForm'

const styles = theme => {
  return {
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
      marginTop: theme.spacing.unit * 3.75,
      marginRight: theme.spacing.unit * 3.75
    },
    title: {
      ...theme.typography.headline,
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 6
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
      <div>
        <Typography
          gutterBottom
          variant='title'
          component='h1'
          className={this.props.classes.title}
        >
          Patients
        </Typography>
        <Grid container spacing={24}>
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
            />
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PatientDetailsList)
