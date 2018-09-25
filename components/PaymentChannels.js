import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = theme => ({
  radioButton: {
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 4,
    '&$checked': {
      color: theme.palette.customGreen.green300
    }
  },
  checked: {}
})

const PaymentChannels = props => (
  <div className={props.radioWrapper}>
    <RadioGroup
      aria-label='Payment Channels'
      name='payment_channels'
      value={props.paymentChannel}
      onChange={props.handlePaymentChannelsChange}
    >
      {
        props.paymentChannelsPayload.map(paymentChannel => {
          return (
            <FormControlLabel
              value={paymentChannel.method}
              control={
                <Radio
                  classes={{
                    root: props.classes.radioButton,
                    checked: props.classes.checked
                  }}
                />
              }
              label={paymentChannel.name}
            />
          )
        })
      }
    </RadioGroup>
  </div>
)

export default withStyles(styles)(PaymentChannels)
