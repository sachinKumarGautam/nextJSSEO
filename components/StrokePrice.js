import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  strokePrice: {
    ...theme.typography.body1,
    color: theme.palette.customGrey.grey200,
    marginRight: theme.spacing.unit * 1.25,
    marginLeft: theme.spacing.unit * 1.5
  }
})

const ProductPrice = (props) => (
  <Typography variant={props.variant} className={props.customStyle}>
    <s className={`${props.classes.strokePrice} ${props.customStyle}`}>
      &#8377; {props.mrp}
    </s>
  </Typography>
)

export default withStyles(styles)(ProductPrice)
