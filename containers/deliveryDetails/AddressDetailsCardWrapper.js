import React from 'react'

import Grid from '@material-ui/core/Grid'

import AddressDetailsCard from '../../components/AddressDetailsCard'
import ActivityIndicator from '../../components/activityIndicator/index'
import MultipleCardLoader
  from '../../components/activityIndicator/loader/cardLoader/MultipleCardLoader'
import ComponentSpecificError
  from '../../components/activityIndicator/error/ComponentSpecificError'

class AddressDetailsCardWrapper extends React.Component {
  tryAgain () {
    this.props.getDeliveryDetailsListLoading(
      this.props.deliveryDetailsState,
      this.props.customerState.payload.id
    )
  }
  render () {
    return (
      <Grid
        container={!this.props.errorState.isError}
        spacing={24}
        className={this.props.addressDetailsCardWrapper}
      >
        <ActivityIndicator
          LoaderComp={<MultipleCardLoader />}
          isLoading={this.props.isLoading}
          isError={this.props.errorState.isError}
          ErrorComp={
            <ComponentSpecificError
              error={this.props.errorState.error}
              tryAgain={this.tryAgain.bind(this)}
            />
          }
        >
          {this.props.payload.map(deliveryDetail => {
            return (
              <Grid item xs={6}>
                <AddressDetailsCard
                  deliveryDetail={deliveryDetail}
                  openDeliveryFormModal={this.props.openDeliveryFormModal.bind(this, true)}
                  addressWrapper={this.props.addressWrapper}
                  selectAddressDetail={this.props.saveDeliveryAddressSelected.bind(this, deliveryDetail)}
                />
              </Grid>
            )
          })}
        </ActivityIndicator>
      </Grid>
    )
  }
}

export default AddressDetailsCardWrapper
