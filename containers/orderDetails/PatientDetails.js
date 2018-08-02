import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  patientDetailsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: theme.spacing.unit * 2.5,
    marginBottom: theme.spacing.unit * 1.25,
    marginTop: theme.spacing.unit * 1.25
  },
  patientName: {
    fontSize: theme.spacing.unit * 2,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 2.5
  },
  image: {
    height: theme.spacing.unit * 2,
    width: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 0.625
  }
})

const PatientDetails = (props) => {
  return (
    <div className={props.classes.patientDetailsWrapper}>
      <img
        src='/static/images/profileUser.svg'
        className={props.classes.image}
      />
      <Typography
        className={props.classes.patientName}
      >
        {props.patientFirstName + ' ' + props.patientLastName}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(PatientDetails)
