import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  strokePrice: {
    color: theme.palette.customGrey.grey200,
    marginRight: theme.spacing.unit
  }
})

const ProductPrice = (props) => (
  <Typography variant='body1'>
    <s className={props.classes.strokePrice}>Rs. 43.00</s>
  </Typography>
)

export default withStyles(styles)(ProductPrice)
