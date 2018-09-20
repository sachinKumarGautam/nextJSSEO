import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'

const styles = theme => ({
  textField: {
    flexBasis: theme.spacing.unit * 34.25,
    margin: theme.spacing.unit,
    marginRight: theme.spacing.unit * 1.5
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  inputStyle: {
    ...theme.typography.subheading,
    color: theme.palette.customGrey.grey500
  },
  imageStyle: {
    marginTop: theme.spacing.unit
  }
})

class PatientList extends Component {
  getPastMedicines(event, index, value) {
    this.props.getRefillPastMedicinesLoading(
      this.props.pastMedicineState,
      event.target.value
    )
    const patientDetail = this.props.patientDetailsState.payload.filter((item) => item.id === event.target.value)
    this.props.updateSelectedPatientDetails(
      this.props.pastMedicineState,
      event.target.value,
      patientDetail.full_name,
      patientDetail
    )
  }

  render() {
    const { classes, patientDetailsState } = this.props
    return (
      <div className={classes.menuWrapper}>
        <TextField
          value={this.props.pastMedicineState.selectedPatientId}
          onChange={this.getPastMedicines.bind(this)}
          select
          className={classes.textField}
          InputProps={{
            startAdornment: <InputAdornment position='start'>
              <img src='/static/images/shape-copy-2.svg' className={classes.imageStyle} />
            </InputAdornment>
          }}
          SelectProps={{
            classes: {
              selectMenu: classes.inputStyle
            }
          }}
        >
          <MenuItem key={''} value={0}>
            Select Patient
          </MenuItem>
          {patientDetailsState.payload.map((patient, index) => (
            <MenuItem key={index} value={patient.id}>
              {patient.full_name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    )
  }
}

export default withStyles(styles)(PatientList)
