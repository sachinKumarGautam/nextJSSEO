import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    title: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600
    }
  }
}

const ProductName = (props) => (
  <div>
    <Typography
      className={props.classes.title}
      gutterBottom
      variant='title'
      component='h1'
    >
      Glycomet 0.5 MG TAB 10S
    </Typography>
  </div>
)

export default withStyles(styles)(ProductName)
