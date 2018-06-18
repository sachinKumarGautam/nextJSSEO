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
    <DeliveryPincode />
    <DeliveryTAT />
    <ExpressDeliveryInfo />
    <AssuredServiceInfo />
  </div>
)

export default DeliveryInfoWrapper
