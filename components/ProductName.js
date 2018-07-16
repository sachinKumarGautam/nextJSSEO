import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    title: {
      ...theme.typography.title,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600,
      marginBottom: theme.spacing.unit * 1.5,
      marginRight: theme.spacing.unit * 7
    }
  }
}

const ProductName = (props) => (
  <Typography
    className={`${props.classes.title} ${props.customStyle}`}
    gutterBottom
    variant={props.variant}
    component='h1'
  >
    {props.name}
  </Typography>
)

export default withStyles(styles)(ProductName)
