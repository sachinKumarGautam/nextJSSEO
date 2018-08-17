import React from 'react'

import Grid from '@material-ui/core/Grid'

import AddressDetailsCard from '../../components/AddressDetailsCard'
import ActivityIndicator from '../../components/activityIndicator/index'
import MultipleCardLoader
  from '../../components/activityIndicator/loader/cardLoader/MultipleCardLoader'

const AddressDetailsCardWrapper = props => (
  <Grid container spacing={24} className={props.addressDetailsCardWrapper}>
    <ActivityIndicator
      LoaderComp={<MultipleCardLoader />}
      isLoading={props.isLoading}
    >
      {props.payload.map(deliveryDetail => {
        return (
          <Grid item xs={6} onClick={props.saveDeliveryAddressSelected.bind(this, deliveryDetail)}>
            <AddressDetailsCard
              deliveryDetail={deliveryDetail}
              openDeliveryFormModal={props.openDeliveryFormModal.bind(this, true)}
            />
          </Grid>
        )
      })}
    </ActivityIndicator>
  </Grid>
)

export default AddressDetailsCardWrapper
