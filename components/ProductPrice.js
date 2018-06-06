import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  price: {
    color: theme.palette.customGrey.grey600,
    marginRight: theme.spacing.unit * 2
  }
})

const ProductPrice = (props) => (
  <Typography variant='headline' component='h2' className={props.classes.price}>
    Rs. 38.00
  </Typography>
)

export default withStyles(styles)(ProductPrice)
