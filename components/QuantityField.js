import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: theme.spacing.unit * 1.5
  },
  quantityTextFix: {
    marginTop: theme.spacing.unit
  },
  menu: {
    ...theme.typography.caption,
    paddingTop: theme.spacing.unit / 4,
    paddingBottom: theme.spacing.unit / 4,
    color: theme.palette.customGrey.grey500
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
      value={props.productDetailsState.payload.quantity + 1}
    >
      {quantity.map(item => (
        <MenuItem key={item} value={item} className={props.classes.menu}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  </div>
)

export default withStyles(styles)(QuantityField)
