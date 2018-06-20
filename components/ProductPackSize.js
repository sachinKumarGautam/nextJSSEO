import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    packSize: {
      color: theme.palette.customGrey.grey500
    }
  }
}

const ProductPackSize = (props) => (
  <Typography
    gutterBottom
    variant={props.variant}
    component='h4'
    className={`${props.classes.packSize} ${props.customStyle}`}
  >
    {!props.withoutImage && <i class='fas fa-pills' />} Tablets / 10s
  </Typography>
)

export default withStyles(styles)(ProductPackSize)
