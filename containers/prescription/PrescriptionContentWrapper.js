import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import PrescriptionContent from './PrescriptionContent'

const PrescriptionContentWrapper = (props) => {
  return (
    <div>
      {
        <Grid container spacing={24}>
          {props.prescriptionState.payload.map((prescriptionDetails) => {
            return prescriptionDetails.prescription.map((prescription) => {
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
        </Grid>
      }
    </div>
  )
}

export default PrescriptionContentWrapper
