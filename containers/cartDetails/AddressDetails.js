import React from 'react'

import Grid from '@material-ui/core/Grid'

import DeliveryDetailForm from '../deliveryDetails/DeliveryDetailsForm'
import AddressDetailsCard from '../../components/AddressDetailsCard'

import ActivityIndicator from '../../components/activityIndicator'
import DotsLoader from '../../components/activityIndicator/loader/DotsLoader'

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
            <ActivityIndicator
              isLoading={deliveryDetail.id === props.inProgressAddressId ? props.checkPincodeState.isLoading : false}
              LoaderComp={<DotsLoader />}
              // isError={this.props.medicineListState.errorState.isError}
              // ErrorComp={
              //   <ComponentSpecificError
              //     error={this.props.medicineListState.errorState.error}
              //     tryAgain={this.tryAgain.bind(this)}
              //   />
              // }
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

export default AddressDetails
