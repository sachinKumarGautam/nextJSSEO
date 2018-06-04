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
  <div>
    <Typography
      gutterBottom
      variant='subheading'
      component='h3'
      className={props.classes.brand}
    >
      Cipla Ltd
    </Typography>
  </div>
)

export default withStyles(styles)(ProductBrand)
