import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    packSize: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey200,
      marginBottom: theme.spacing.units,
      display: 'inline-block'
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
    {
      !props.withoutImage &&
        <i
          class='fas fa-pills'
          style={{color: '#9b9b9b', marginRight: '6px'}}
        />
    } {props.packType} {props.packSize ? ' / ' + props.packSize : null}
  </Typography>
)

export default withStyles(styles)(ProductPackSize)
