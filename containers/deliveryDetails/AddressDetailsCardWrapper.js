import React from 'react'

import Grid from '@material-ui/core/Grid'

import AddressDetailsCard from '../../components/AddressDetailsCard'

const AddressDetailsCardWrapper = props => (
  <Grid container spacing={24}>
    {
      props.payload.map(deliveryDetail => {
        return (
          <Grid item xs={6}>
            <AddressDetailsCard
              deliveryDetail={deliveryDetail}
              saveAddressSelected={props.saveAddressSelected}
              addressIdSelected={props.addressIdSelected}
            />
          </Grid>
        )
      })
    }
  </Grid>
)

export default AddressDetailsCardWrapper
