import React from 'react'

import Typography from '@material-ui/core/Typography'

const SelectedAddressDetails = props => (
  <div>
    <Typography
      component='h1'
      className={props.heading}
    >
      {
        props.shipping_address.type
          ? props.shipping_address.type
          : 'Others'
      }
    </Typography>
    <Typography
      component='h1'
      className={props.patientDetails}
    >
      {props.shipping_address.street1}
    </Typography>
    <Typography
      component='h1'
      className={props.patientDetails}
    >
      {props.shipping_address.street2}
    </Typography>
  </div>
)

export default SelectedAddressDetails
