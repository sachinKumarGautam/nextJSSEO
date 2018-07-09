import React from 'react'

import DeliveryPincode from './DeliveryPincode'
import DeliveryTAT from './DeliveryTAT'
import ExpressDeliveryInfo from './ExpressDeliveryInfo'
import AssuredServiceInfo from './AssuredServiceInfo'

/*
  delivery pincode
  delivery TAT
  express delivery
  assured service
*/

const DeliveryInfoWrapper = (props) => (
  <div>
    <DeliveryPincode
      pincode={props.checkPincodeState.payload.pincode}
      openPincodeDialog={props.openPincodeDialog}
    />
    <DeliveryTAT
      delivery_day={props.checkPincodeState.payload.delivery_day}
    />
    {props.checkPincodeState.payload.is_urgent_dl_available &&
      <ExpressDeliveryInfo
      />}
    {props.checkPincodeState.payload.is_lc_assured_available &&
      <AssuredServiceInfo
      />}
  </div>
)

export default DeliveryInfoWrapper
