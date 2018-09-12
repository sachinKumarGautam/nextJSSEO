import React from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import DeliveryDetailForm from '../deliveryDetails/DeliveryDetailsForm'
import AddressDetailsCard from '../../components/AddressDetailsCard'

import ActivityIndicator from '../../components/activityIndicator'
import CommonSpinner from '../../components/activityIndicator/loader/CommonSpinner'

const styles = theme => ({
  addressWrapper: {
    position: 'relative'
  },
  spinnerCustomStyle: {
    position: 'absolute',
    top: '20px',
    right: '20px'
  }
})

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
          <Grid item xs={6} className={props.classes.addressWrapper}>
            <ActivityIndicator
              isLoading={
                deliveryDetail.id === props.inProgressAddressId
                ? (props.checkPincodeState.isLoading || props.shippingAddressDetails.isLoading)
                : false
              }
              LoaderComp={
                <CommonSpinner
                  customStyle={props.classes.spinnerCustomStyle}
                  thickness={3}
                  size={25}
                />
              }
              bottomLoader
            >
              <AddressDetailsCard
                deliveryDetail={deliveryDetail}
                checkPincodeServiceble={props.checkPincodeServiceble}
                addressIdSelected={props.addressIdSelected}
                isCartPage={props.isCartPage}
              />
            </ActivityIndicator>
          </Grid>
        )
      })
    }
  </Grid>
)

export default withStyles(styles)(AddressDetails)
