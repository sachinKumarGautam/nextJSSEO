import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  discount: {
    color: theme.palette.customYellow.yellow400
  }
})

const ProductDiscount = (props) => (
  <Typography variant='body1' className={props.classes.discount}>
    {props.discount}% discount on MRP
  </Typography>
)

export default withStyles(styles)(ProductDiscount)
