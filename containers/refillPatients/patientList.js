import React, { Component } from 'react'

import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ActivityIndicator from '../../components/activityIndicator'
import SideListItemsLoader
  from '../../components/activityIndicator/loader/SideListItemLoader'

const styles = theme => ({
  menuItem: {
    '&:focus': {
      // backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
      }
    }
  },
  primary: {
    ...theme.typography.caption,
    color: theme.palette.customGrey.grey500
  },
  icon: {
    marginRight: theme.spacing.unit * 1.81
  }
})

class PatientList extends Component {
  getPastMedicines (patientId, patientName, patient) {
    this.props.getRefillPastMedicinesLoading(
      this.props.pastMedicineState,
      patientId
    )
    this.props.updateSelectedPatientDetails(
      this.props.pastMedicineState,
      patientId,
      patientName,
      patient
    )
  }

  render () {
    const { classes, patientDetailsState } = this.props
    return (
      <ActivityIndicator
        isLoading={patientDetailsState.isLoading}
        LoaderComp={<SideListItemsLoader />}
      >
        <MenuList>
          {patientDetailsState.payload.map((patient, index) => (
            <MenuItem
              className={classes.menuItem}
              onClick={
                this.getPastMedicines.bind(
                  this,
                  patient.id,
                  patient.full_name,
                  patient
                )
              }
            >
              <ListItemIcon className={classes.icon}>
                <img src='/static/images/shape-copy.svg' />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary={patient.full_name}
              />
            </MenuItem>
          ))}
        </MenuList>
      </ActivityIndicator>
    )
  }
}

export default withStyles(styles)(PatientList)
