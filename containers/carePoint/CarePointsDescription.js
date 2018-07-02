import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  labelStyle: {
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit * 2
  },
  valueStyle:{
    color: theme.palette.customGrey.grey500,
    paddingRight: theme.spacing.unit * 5
  },
  descriptionWrapperStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.unit * 8
  },
  carePointWrapper: {
    borderRight: `0.5px solid ${theme.palette.customGrey.grey300}`,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2
  },
  carePointPlusWrapper: {
    marginLeft: theme.spacing.unit * 7,
    marginTop: theme.spacing.unit * 2
  }
})

const CarePointsDescription = (props) => {
  return (
    <div className={props.classes.descriptionWrapperStyle}>
      <div className={props.classes.carePointWrapper}>
        <Typography
          variant='subheading'
          className={props.classes.labelStyle}
        >
          What is Care Point?
        </Typography>
        <Typography
          variant='caption'
          className={props.classes.valueStyle}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <div className={props.classes.carePointPlusWrapper}>
        <Typography
          variant='subheading'
          className={props.classes.labelStyle}
        >
          What is Care Point+?
        </Typography>
        <Typography
          variant='caption'
          className={props.classes.valueStyle}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(CarePointsDescription)
