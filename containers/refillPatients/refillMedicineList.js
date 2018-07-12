import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import MedicineListDetails from '../../components/MedicineListDetails'

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
      marginBottom: theme.spacing.unit * 7,
      fontWeight: theme.typography.fontWeightBold
    }
  }
}

class RefillMedicineList extends Component {
  render () {
    const {
      incrementCartItemLoading,
      cartState,
      checkPincodeLoading
    } = this.props
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
            <ul className={this.props.classes.medicineListWrapper}>
              {
                this.props.pastMedicineState.payload.map((itemDetails) => (
                  <li className={this.props.classes.listItem}>
                    <MedicineListDetails
                      itemDetails={itemDetails}
                      isRefillMedicines
                      cartState={cartState}
                      incrementCartItemLoading={incrementCartItemLoading}
                      checkPincodeLoading={checkPincodeLoading}
                      checkPincodeState={this.props.checkPincodeState}
                    />
                  </li>
                ))
              }
            </ul>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(RefillMedicineList)
