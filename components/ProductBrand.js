import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    brand: {
      color: theme.palette.customGrey.grey500
    }
  }
}

const ProductBrand = (props) => (
  <Typography
    gutterBottom
    variant={props.variant}
    component='h3'
    className={`${props.classes.brand} ${props.customStyle}`}
  >
    {!props.withoutImage && <i class='far fa-building' />} Cipla Ltd
  </Typography>
)

export default withStyles(styles)(ProductBrand)
