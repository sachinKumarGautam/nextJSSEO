import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import BreadCrumbs from '../../components/BreadCrumbs'
import SideMenu from '../../components/SideMenu'
import DeliveryDetailsList from './DeliveryDetailsList'

/*
  bread crumbs
*/

const styles = theme => {
  return {
    mainStyle: {
      boxShadow: '0 0 6px 0 rgba(224, 224, 224, 0.72)',
      marginBottom: theme.spacing.unit * 2.5,
      height: theme.spacing.unit * 62.5,
    }
  }
}

class DeliveryDetailsWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <section>
              <SideMenu />
            </section>
          </Grid>
          <Grid item xs={8} className={this.props.classes.mainStyle}>
            <DeliveryDetailsList
              deliveryDetailsState={this.props.deliveryDetailsState}
              saveAddressSelected={this.props.saveAddressSelected}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default  withStyles(styles)(DeliveryDetailsWrapper)
