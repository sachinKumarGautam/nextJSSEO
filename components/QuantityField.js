import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    width: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 4
  },
  menu: {
    width: theme.spacing.unit * 8
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  quantityTextFix: {
    marginTop: theme.spacing.unit
  }
})

const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const QuantityField = (props) => (
  <div className={props.classes.wrapper}>
    <Typography
      variant='caption'
      className={props.classes.quantityTextFix}
    >
      Qty:
    </Typography>
    <TextField
      id='quantity'
      select
      defaultValue={'1'}
      onChange={props.onChangeQuantity.bind(this)}
      className={props.classes.textField}
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
  </div>
)

export default withStyles(styles)(QuantityField)
