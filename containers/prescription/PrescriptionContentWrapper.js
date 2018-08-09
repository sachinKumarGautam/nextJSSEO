import React from 'react'

import Grid from '@material-ui/core/Grid'

import PrescriptionContent from './PrescriptionContent'
import MultipleCardLoader
  from '../../components/activityIndicator/loader/cardLoader/MultipleCardLoader'
import ActivityIndicator from '../../components/activityIndicator'
const PrescriptionContentWrapper = props => {
  const { isLoading } = props.prescriptionState
  return (
    <Grid container spacing={24}>
      <ActivityIndicator
        isLoading={isLoading}
        LoaderComp={<MultipleCardLoader />}
      >
        {props.prescriptionState.payload.map(prescriptionDetails => {
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
        })}
      </ActivityIndicator>
    </Grid>
  )
}

export default PrescriptionContentWrapper
