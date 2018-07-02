import React, { Component } from 'react'

import SideMenu from '../../components/SideMenu'
import CarePointsDetails from './CarePointsDetails'

import Grid from '@material-ui/core/Grid'

class CarePoint extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <aside><SideMenu/></aside>
          </Grid>
          <Grid item xs={10}>
            <CarePointsDetails
              carePointState={this.props.carePointState}
              getCarePointDetailsLoading={this.props.getCarePointDetailsLoading}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default CarePoint
