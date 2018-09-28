import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  price: {
    ...theme.typography.title,
    color: theme.palette.customGrey.grey600,
    marginRight: theme.spacing.unit * 1.875,
    marginLeft: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 1.75
  }
})

const ProductPrice = (props) => (
  <Typography
    variant={props.variant}
    component='h2'
    className={`${props.classes.price} ${props.customStyle}`}
  >
    &#8377; {props.sellingPrice}
  </Typography>
)

export default withStyles(styles)(ProductPrice)
