import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import MedicineListDetails from '../../components/MedicineListDetails'
import ActivityIndicator from '../../components/activityIndicator/index'
import MultipleMedicineLoader
  from '../../components/activityIndicator/loader/medicineListLoader/MultipleMedicineLoader'

import ComponentSpecificError from '../../components/activityIndicator/error/ComponentSpecificError'

import {NO_REFILL_MEDICINE} from '../messages/noDataMessage'

const styles = theme => {
  return {
    medicineListWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    },
    listItem: {
      '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.customGrey.grey100}`,
        paddingBottom: theme.spacing.unit * 2
      },
      marginTop: theme.spacing.unit * 2
    },
    treatmentHeading: {
      marginLeft: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 6.5,
      fontWeight: theme.typography.fontWeightBold
    },
    noContent: {
      color: theme.palette.customGrey.grey500,
      textAlign: 'center',
      marginTop: theme.spacing.unit * 1.25,
      fontWeight: theme.typography.fontWeightBold
    }
  }
}

class RefillMedicineList extends Component {
  tryAgain () {
    this.props.getRefillPastMedicinesLoading(
      this.props.pastMedicineState,
      this.props.pastMedicineState.selectedPatientId
    )
  }
  render () {
    return (
      <div>
        <Card elevation={'1'}>
          <CardContent>
            <Typography
              gutterBottom
              variant='title'
              component='h1'
              className={this.props.classes.treatmentHeading}
            >
              Treatments of {this.props.pastMedicineState.selectedPatientName}
            </Typography>
            <ActivityIndicator
              isError={this.props.pastMedicineState.errorState.isError}
              ErrorComp={
                <ComponentSpecificError
                  error={this.props.pastMedicineState.errorState.error}
                  tryAgain={this.tryAgain.bind(this)}
                />
              }
              isLoading={this.props.isLoading}
              LoaderComp={<MultipleMedicineLoader />}
            >
              {
                this.props.pastMedicineState.payload.length
                  ? <ul className={this.props.classes.medicineListWrapper}>
                    {this.props.pastMedicineState.payload.map(itemDetails => (
                      <li className={this.props.classes.listItem}>
                        <MedicineListDetails
                          isLoading={this.props.isLoading}
                          itemDetails={itemDetails}
                          isRefillMedicines
                          addToCartHandler={this.props.addToCartHandler}
                          checkPincodeState={this.props.checkPincodeState}
                        />
                      </li>
                    ))}
                  </ul>
                  : <Typography
                    gutterBottom
                    variant='body2'
                    className={this.props.classes.noContent}
                  >
                    {NO_REFILL_MEDICINE}
                  </Typography>
              }
            </ActivityIndicator>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(RefillMedicineList)
