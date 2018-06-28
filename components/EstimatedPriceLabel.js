import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  estimatedPrice: {
    color: theme.palette.customGrey.grey200
  }
})

const EstimatedPriceLabel = (props) => (
  <Typography
    className={`${props.classes.estimatedPrice} ${props.customStyle}`}
    variant='caption'
  >
    {props.estimatePriceText}
  </Typography>
)

export default withStyles(styles)(EstimatedPriceLabel)
