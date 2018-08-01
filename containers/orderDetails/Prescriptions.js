import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  prescriptionsWrapper: {
    paddingLeft: theme.spacing.unit * 2.5
  },
  prescriptionText: {
    paddingTop: theme.spacing.unit * 1.75,
    fontSize: theme.spacing.unit * 2.25
  },
  image: {
    height: theme.spacing.unit * 10,
    width: theme.spacing.unit * 10,
    padding: theme.spacing.unit * 1.25
  }
})

const Prescriptions = (props) => {
  return (
    <div className={props.classes.prescriptionsWrapper}>
      <Typography
        className={props.classes.prescriptionText}
      >
        Attached Prescription
      </Typography>
      <img
        src='/static/images/profile.svg'
        className={props.classes.image}
      />
    </div>
  )
}

export default withStyles(styles)(Prescriptions)
