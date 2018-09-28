import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  labelStyle: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey500,
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3
  },
  valueStyle: {
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 5
  },
  amountWrapperStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: theme.spacing.unit * 9,
    marginRight: theme.spacing.unit * 8
  }
})

const CarePointAmount = (props) => {
  return (
    <div className={props.classes.amountWrapperStyle}>
      <div>
        <Typography
          variant='body1'
          className={props.classes.labelStyle}
        >
          TOTAL
        </Typography>
        <Typography
          variant='subheading'
          className={props.classes.valueStyle}
        >
          {props.carePointAmountDetails.bonus + props.carePointAmountDetails.cash}
        </Typography>
      </div>
      <div>
        <Typography
          variant='body1'
          className={props.classes.labelStyle}
        >
          CARE POINTS
        </Typography>
        <Typography
          variant='subheading'
          className={props.classes.valueStyle}
        >
          {props.carePointAmountDetails.bonus}
        </Typography>
      </div>
      <div>
        <Typography
          variant='body1'
          className={props.classes.labelStyle}
        >
          CARE POINTS +
        </Typography>
        <Typography
          variant='subheading'
          className={props.classes.valueStyle}
        >
          {props.carePointAmountDetails.cash}
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(CarePointAmount)
