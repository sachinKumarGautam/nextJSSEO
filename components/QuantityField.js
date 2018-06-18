import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    width: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 4
  },
  menu: {
    width: theme.spacing.unit * 8
  }
})

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

const QuantityField = (props) => (
  <TextField
    id='quantity'
    select
    label='Qty:'
    className={props.classes.textField}
    // value={this.state.currency}
    // onChange={this.handleChange('currency')}
    SelectProps={{
      MenuProps: {
        className: props.classes.menu
      }
    }}
  >
    {currencies.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
)

export default withStyles(styles)(QuantityField)
