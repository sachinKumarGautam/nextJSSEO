import React from 'react'

import Grid from '@material-ui/core/Grid'

import DeliveryDetailForm from '../deliveryDetails/DeliveryDetailsForm'
import AddressDetailsCard from '../../components/AddressDetailsCard'

const AddressDetails = props => (
  <Grid container spacing={24} className={props.addressDetailsWrapper}>
    <Grid item xs={12}>
      <DeliveryDetailForm
        isCartPage={props.isCartPage}
        onSubmit={props.submitDeliveryDetailsLoading}
        openDeliveryFormDialog={props.openDeliveryFormDialog}
        customerState={props.customerState}
        deliveryDetailsState={props.deliveryDetailsState}
        deliveryFormState={props.deliveryFormState}
        closeDeliveryFormModal={props.closeDeliveryFormModal}
        updateAddressFormValue={props.updateAddressFormValue}
        checkPincodeDetailLoading={props.checkPincodeDetailLoading}
        getLocalityDetailListLoading={props.getLocalityDetailListLoading}
      />
    </Grid>
    {
      props.deliveryDetailsState.payload.map(deliveryDetail => {
        return (
          <Grid item xs={6}>
            <AddressDetailsCard
              deliveryDetail={deliveryDetail}
              saveAddressSelected={props.saveAddressSelected}
              addressIdSelected={props.addressIdSelected}
              isCartPage={props.isCartPage}
            />
          </Grid>
        )
      })
    }
  </Grid>
)

export default AddressDetails
