import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  prescriptionsWrapper: {
    paddingLeft: theme.spacing.unit * 2.5
  },
  prescriptionText: {
    paddingTop: theme.spacing.unit * 1.75,
    fontSize: theme.spacing.unit * 2,
    color: theme.palette.customGrey.grey500
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
      {
        props.orderPrescriptions.map(orderPrescription => {
          return (
            <img
              src={orderPrescription.location}
              className={props.classes.image}
            />
          )
        })
      }
    </div>
  )
}

export default withStyles(styles)(Prescriptions)
