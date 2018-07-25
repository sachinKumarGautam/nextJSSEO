import React from 'react'

import Grid from '@material-ui/core/Grid'

import AddressDetailsCard from '../../components/AddressDetailsCard'

const AddressDetailsCardWrapper = props => (
  <Grid container spacing={24} className={props.addressDetailsCardWrapper}>
    {
      props.payload.map(deliveryDetail => {
        return (
          <Grid item xs={6} onClick={props.saveDeliveryAddressSelected.bind(this, deliveryDetail)}>
            <AddressDetailsCard
              deliveryDetail={deliveryDetail}
              openDeliveryFormModal={props.openDeliveryFormModal.bind(this, true)}
            />
          </Grid>
        )
      })
    }
  </Grid>
)

export default AddressDetailsCardWrapper
