import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'

const steps = ['Processing', 'Confirmed', 'Dispatched', 'Delivered']

const styles = theme => ({
  image: {
    height: theme.spacing.unit * 3,
    width: theme.spacing.unit * 3
  },
  stepLabel: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.customGrey.grey500,
    fontSize: theme.spacing.unit * 1.75
  },
  stepLabelGreyed: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.customGrey.grey100,
    fontSize: theme.spacing.unit * 1.75
  },
  steps: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

const Bazooka = (props) => {
  return (
    <Stepper activeStep={props.orderDetailsState.payload.activeStep + 1} alternativeLabel>
      {steps.map((label, index) => {
        if (index <= props.orderDetailsState.payload.activeStep) {
          return (
            <Step key={label} className={props.classes.steps}>
              <img src='/static/images/checkedBazooka.svg' className={props.classes.image} />
              <Typography className={props.classes.stepLabel}>
                {label}
              </Typography>
            </Step>
          )
        } else {
          return (
            <Step key={label} className={props.classes.steps}>
              <img src='/static/images/greyBazooka.svg' className={props.classes.image} />
              <Typography className={props.classes.stepLabelGreyed}>
                {label}
              </Typography>
            </Step>
          )
        }
      })}
    </Stepper>
  )
}

export default withStyles(styles)(Bazooka)
