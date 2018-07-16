import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    brand: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500,
      marginBottom: theme.spacing.units
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
    {
      !props.withoutImage &&
        <i
          class='far fa-building'
          style={{color: '#9b9b9b', marginRight: '8px'}}
        />
    } {props.brand}
  </Typography>
)

export default withStyles(styles)(ProductBrand)
