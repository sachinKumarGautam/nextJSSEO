import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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

const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const QuantityField = (props) => (
  <TextField
    id='quantity'
    select
    defaultValue={'1'}
    label='Qty:'
    className={props.classes.textField}
    // value={this.state.currency}
    // onChange={this.handleChange('currency')}
    SelectProps={{
      native: true,
      MenuProps: {
        className: props.classes.menu
      }
    }}
  >
    {quantity.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </TextField>
)

export default withStyles(styles)(QuantityField)
