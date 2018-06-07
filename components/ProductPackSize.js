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
  <div>
    <Typography
      gutterBottom
      variant='subheading'
      component='h4'
      className={props.classes.packSize}
    >
      <i class='fas fa-pills' /> Tablets / 10s
    </Typography>
  </div>
)

export default withStyles(styles)(ProductPackSize)
