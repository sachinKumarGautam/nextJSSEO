import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

import Button from './button'

const styles = theme => {
  return {
    addressWrapperStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      width: theme.spacing.unit * 42.5,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      color: theme.palette.primary.main
    }
  }
}

class PatientDetailsCard extends Component {
  render () {
    return (
      <div className={this.props.classes.addressWrapperStyle}>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <img src="/static/images/profile.svg" />
          </Grid>
          <Grid item xs={9}>
            <Typography
              gutterBottom
              variant='display0Bold'
            >
              {this.props.patientDetail.full_name}
            </Typography>
            <div>
              <Typography
                gutterBottom
                variant='subheading'
              >
                {this.props.patientDetail.gender} | {this.props.patientDetail.age}
              </Typography>
            </div>
            <div>
              <Typography
                gutterBottom
                variant='display0'
              >
                {this.props.patientDetail.mobile}
              </Typography>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={3}>
                  <div>
                    <span className={this.props.classes.buttonLabel}>EDIT</span>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <span className={this.props.classes.buttonLabel}>DELETE</span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PatientDetailsCard)
