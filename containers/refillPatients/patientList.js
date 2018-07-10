import React, { Component } from 'react'

import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
})

class PatientList extends Component {
  getPastMedicines (patientId, patientName) {
    this.props.getRefillPastMedicinesLoading(
      this.props.pastMedicineState,
      patientId
    )
    this.props.setPatientDetails(
      patientId,
      patientName
    )
  }

  render () {
    const { classes, patientDetailsState } = this.props
    return (
      <div>
        <MenuList>
          {patientDetailsState.payload.map((patient, index) => (
            <MenuItem
              className={classes.menuItem}
              onClick={this.getPastMedicines.bind(this, patient.id, patient.full_name)}
            >
              <ListItemIcon className={classes.icon}>
                <img src='/static/images/loggedIn.svg' />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset primary={patient.full_name}
              />
            </MenuItem>
          ))}
        </MenuList>
      </div>
    )
  }
}

export default withStyles(styles)(PatientList)
