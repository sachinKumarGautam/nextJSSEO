import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  patientName: {
    fontSize: theme.spacing.unit * 2.25,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500
  }
})

const PatientDetails = (props) => {
  return (
    <Typography
      className={props.classes.patientName}
    >
      Jyoti Arora
    </Typography>
  )
}

export default withStyles(styles)(PatientDetails)
