import React, { Component } from 'react'

import SideMenu from '../../components/SideMenu'
import PrescriptionList from './PrescriptionList'

import Grid from '@material-ui/core/Grid'

class PrescriptionDetails extends Component {
  render () {
    const {prescriptionState} = this.props
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <SideMenu isLoading={prescriptionState.isLoading} />
          </Grid>
          <Grid item xs={10}>
            <PrescriptionList
              prescriptionState={this.props.prescriptionState}
              getPrescriptionListLoading={this.props.getPrescriptionListLoading}
              customerState={this.props.customerState}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default PrescriptionDetails
