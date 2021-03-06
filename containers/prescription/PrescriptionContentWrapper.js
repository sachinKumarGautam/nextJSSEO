import React from 'react'

import Grid from '@material-ui/core/Grid'

import PrescriptionContent from './PrescriptionContent'
import MultipleCardLoader
  from '../../components/activityIndicator/loader/cardLoader/MultipleCardLoader'
import ActivityIndicator from '../../components/activityIndicator'
import ComponentSpecificError from '../../components/activityIndicator/error/ComponentSpecificError'
import Typography from '@material-ui/core/Typography'
import {NO_PRESCRIPTION_LIST} from '../messages/noDataMessage'

class PrescriptionContentWrapper extends React.Component {
  tryAgain () {
    this.props.getPrescriptionListLoading(
      this.props.prescriptionState,
      this.props.customerState.payload.id
    )
  }
  render () {
    const { isLoading } = this.props.prescriptionState
    return (
      <Grid
        container={
          !this.props.prescriptionState.errorState.isError &&
          this.props.prescriptionState.payload.length
        }
        spacing={24}
      >
        <ActivityIndicator
          isLoading={isLoading}
          LoaderComp={<MultipleCardLoader />}
          isError={this.props.prescriptionState.errorState.isError}
          ErrorComp={
            <ComponentSpecificError
              error={this.props.prescriptionState.errorState.error}
              tryAgain={this.tryAgain.bind(this)}
            />
          }
        >
          {
            this.props.prescriptionState.payload.length
              ? this.props.prescriptionState.payload.map(prescriptionDetails => {
                return prescriptionDetails.prescription.map(prescription => {
                  return (
                    <Grid item xs={6}>
                      <PrescriptionContent
                        prescriptionDetails={prescriptionDetails}
                        prescription={prescription}
                      />
                    </Grid>
                  )
                })
              })
              : <Typography
                gutterBottom
                variant='body2'
                className={this.props.noContent}
              >
                {NO_PRESCRIPTION_LIST}
              </Typography>
          }
        </ActivityIndicator>
      </Grid>
    )
  }
}

export default PrescriptionContentWrapper
