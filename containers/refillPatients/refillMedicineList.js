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

import { NO_REFILL_MEDICINE } from '../messages/noDataMessage'

import RefillPatientDialogue from './RefillPatientDialogue'
import { modifiyMedicineList } from '../../utils/common'

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
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      medicineName: null
    }
    this.handleClose = this.handleClose.bind(this)
    this.onClickOfPatient = this.onClickOfPatient.bind(this)
    this.onClickOfOk = this.onClickOfOk.bind(this)
    this.addMedicine = this.addMedicine.bind(this)
  }
  tryAgain () {
    this.props.getRefillPastMedicinesLoading(
      this.props.pastMedicineState,
      this.props.pastMedicineState.selectedPatientId
    )
  }
  onClickOfPatient (item) {
    this.setState({
      open: true,
      medicineName: item
    })
  }

  handleClose () {
    this.setState({
      open: false
    })
  }

  onClickOfOk () {
    this.props.deleteCartLoading(
      this.props.cartState,
      this.props.checkPincodeState.payload.source,
      this.props.checkPincodeState.payload.id,
      'REFILL',
      this.props.pastMedicineState.selectedPatient,
      this.addMedicine
    )
  }

  addMedicine () {
    this.props.addToCartHandler(this.state.medicineName)
    this.setState({
      open: false
    })
  }

  render () {
    const pastMedicineList = this.props.pastMedicineState.payload
    const cartItems = this.props.cartState.payload.cart_items.payload
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
