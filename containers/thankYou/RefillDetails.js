import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'

const styles = theme => ({
  repeatTitle: {
    marginLeft: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 1.37,
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold
  },
  description: {
    marginLeft: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 3.5,
    color: theme.palette.customGrey.grey500,
  },
  buttonRoot: {
    border: `1px dashed ${theme.palette.customGrey.grey200}`
  },
  buttonLabel: {
    color: theme.palette.customGrey.grey700,
    fontWeight: theme.typography.fontWeightBold
  },
  buttonWrapperStyle: {
    marginLeft: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 4.12,
    display: 'flex',
    flexDirection: 'row',
    marginRight: theme.spacing.unit * 11.25
  },
  buttonStyle: {
    ...theme.typography.caption,
    marginRight: theme.spacing.unit * 3
  },
})

const refillDays = [
  {
    label: '10 Days',
    value: 10
  },
  {
    label: '15 Days',
    value: 15
  },
  {
    label: '20 Days',
    value: 20
  },
  {
    label: '30 Days',
    value: 30
  }
]

const RefillDetails = (props) => {
  return (
    <div>
      <Typography
        variant='body2'
        className={props.classes.repeatTitle}
      >
        Repeat these Medicines
      </Typography>
      <Typography
        variant='body2'
        className={props.classes.description}
      >
        We ensure that you never miss you medicines
      </Typography>
      <div className={props.classes.buttonWrapperStyle}>
        {
          refillDays.map((item) => {
            return (
              <Button
                size='small'
                variant='outlined'
                color='primary'
                classes={{
                  root: props.classes.buttonRoot,
                  label: props.classes.buttonLabel
                }}
                className={props.classes.buttonStyle}
                // onClick={this.handleClickOpen}
                label={item.label}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default withStyles(styles)(RefillDetails)
