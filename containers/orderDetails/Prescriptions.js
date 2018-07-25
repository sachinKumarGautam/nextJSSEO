import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  prescriptionText: {
    fontSize: theme.spacing.unit * 2.25
  }
})

const Prescriptions = (props) => {
  return (
    <div>
      <Typography
        className={props.classes.prescriptionText}
      >
        Attached Prescription
      </Typography>
      <Typography
      >
        08 Apr 2018
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Prescriptions)
