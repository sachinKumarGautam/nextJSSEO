import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import MedicineListDetails from '../../components/MedicineListDetails'
import ActivityIndicator from '../../components/activityIndicator/index'
import MultipleMedicineLoader
  from '../../components/activityIndicator/loader/medicineListLoader/MultipleMedicineLoader'

import ComponentSpecificError
  from '../../components/activityIndicator/error/ComponentSpecificError'

import SnackbarErrorMessage from '../../components/activityIndicator/error/SnackbarErrorMessage'

import { NO_REFILL_MEDICINE } from '../messages/noDataMessage'

import RefillPatientDialogue from '../../components/RefillPatientDialogue'
import { modifiyMedicineList } from '../../utils/common'
import {
  SWITCH_PATIENT_DIALOG_TITLE,
  REFILL_DIALOG_TITLE,
  SWITCH_PATIENT_DIALOG_CONTENT,
  REFILL_DIALOG_CONTENT
} from '../messages/refillPatientMessage'

import { REFILL } from '../../components/constants/Constants'

const styles = theme => {
  return {
    medicineListWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    },
    listItem: {
      '&:hover': {
        backgroundColor: theme.palette.customGrey.grey50
      },
      '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.customGrey.grey100}`,
        paddingBottom: theme.spacing.unit * 2
      },
      paddingTop: theme.spacing.unit * 2
    },
    treatmentHeading: {
      marginLeft: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3.5,
      fontWeight: theme.typography.fontWeightBold
    },
    noContent: {
      color: theme.palette.customGrey.grey500,
      textAlign: 'center',
      marginTop: theme.spacing.unit * 1.25,
      fontWeight: theme.typography.fontWeightBold
    },
    listWrapperStyle: {
      // paddingTop: '0'
    }
  }
}

class RefillMedicineList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      dialogTitle: '',
      dialogContent: '',
      medicineName: null
    }
  }
  tryAgain () {
    this.props.getRefillPastMedicinesLoading(
      this.props.pastMedicineState,
      this.props.pastMedicineState.selectedPatientId
    )
  }
  onClickOfPatient = item => {
    const sourceType = this.props.cartState.payload.source_type
    this.setState({
      open: true,
      dialogTitle: sourceType === REFILL
        ? SWITCH_PATIENT_DIALOG_TITLE
        : REFILL_DIALOG_TITLE,
      dialogContent: sourceType === REFILL
        ? SWITCH_PATIENT_DIALOG_CONTENT
        : REFILL_DIALOG_CONTENT,
      medicineName: item
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  onClickOfOk = () => {
    this.setState({
      open: false
    })
    this.props.deleteCartLoading(
      this.props.cartState,
      this.props.checkPincodeState.payload.source,
      this.props.checkPincodeState.payload.id,
      REFILL,
      this.props.pastMedicineState.selectedPatient[0],
      this.addMedicine,
      true
    )
  }

  addMedicine = () => {
    this.props.addToCartHandler(this.state.medicineName)
  }

  resetState = () => {
    this.props.resetSavePatientToCartError()
  }

  render () {
    const pastMedicineList = this.props.pastMedicineState.payload
    const cartItems = this.props.cartState.payload.cart_items.payload
    return (
      <div>
        <Card elevation={'1'}>
          <CardContent className={this.props.classes.listWrapperStyle}>
            <Typography
              gutterBottom
              variant='title'
              component='h1'
              className={this.props.classes.treatmentHeading}
            >
              Treatments of {this.props.pastMedicineState.selectedPatientName}
            </Typography>
            <ActivityIndicator
              isError={
                this.props.pastMedicineState.errorState.isError ||
                this.props.cartState.payload.patient_details.errorState.isError
              }
              ErrorComp={
                this.props.pastMedicineState.errorState.isError
                  ? <ComponentSpecificError
                    error={this.props.pastMedicineState.errorState.error}
                    tryAgain={this.tryAgain.bind(this)}
                  />
                  : <SnackbarErrorMessage
                    error={this.props.globalErrorState}
                    resetState={this.resetState}
                  />
              }
              isLoading={this.props.isLoading}
              LoaderComp={<MultipleMedicineLoader />}
              bottomError={this.props.cartState.payload.patient_details.errorState.isError}
            >
              {this.props.pastMedicineState.payload.length
                ? <ul className={this.props.classes.medicineListWrapper}>
                  {modifiyMedicineList(
                    pastMedicineList,
                    cartItems
                  ).map(itemDetails => (
                    <li className={this.props.classes.listItem}>
                      <MedicineListDetails
                        isLoading={this.props.isLoading}
                        itemDetails={itemDetails}
                        checkIfAlredyExistInCart={
                          itemDetails.is_exist_in_cart
                        }
                        isRefillMedicines
                        addToCartHandler={this.props.addToCartHandler}
                        checkPincodeState={this.props.checkPincodeState}
                        onClickOfPatient={this.onClickOfPatient}
                        pastMedicineState={this.props.pastMedicineState}
                        cartState={this.props.cartState}
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
                </Typography>}
            </ActivityIndicator>
            <RefillPatientDialogue
              dialogTitle={this.state.dialogTitle}
              dialogContent={this.state.dialogContent}
              open={this.state.open}
              handleClose={this.handleClose}
              onClickOfOk={this.onClickOfOk}
            />
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(RefillMedicineList)
