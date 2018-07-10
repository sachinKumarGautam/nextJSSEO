import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    refillDays: {
      ...theme.typography.body3,
      color: theme.palette.customYellow.yellow400,
      display: 'inline-block',
      marginLeft: theme.spacing.unit
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'flex-start'
    },
    rxImg: {
      marginLeft: theme.spacing.unit
    }
  }
}

const RefillDueDays = (props) => (
  <div className={props.classes.wrapper}>
    <Typography
      className={props.classes.refillDays}
      gutterBottom
      variant={'caption'}
      component='h3'
    >
      {'10 days due'}
    </Typography>
    <img src='/static/images/prescription.svg' className={props.classes.rxImg} />
  </div>
)

export default withStyles(styles)(RefillDueDays)
