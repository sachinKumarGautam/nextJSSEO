import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  address: {
    fontSize: theme.spacing.unit * 2.25,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500
  }
})

const AddressDetails = (props) => {
  return (
    <Typography
      className={props.classes.address}
    >
      Home
    </Typography>
  )
}

export default withStyles(styles)(AddressDetails)
