import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

import Button from './button'

const styles = theme => {
  return {
    patientWrapperStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      width: theme.spacing.unit * 42.5,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    },
    patientWrapperSelectedStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      width: theme.spacing.unit * 42.5,
      backgroundColor: 'rgb(243, 253, 232)',
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      color: theme.palette.customGreen.green300,
      fontWeight: theme.typography.fontWeightBold
    },
    userNameStyle: {
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    genderStyle: {
      color: theme.palette.customGrey.grey500
    },
    mobileStyle: {
      color: theme.palette.customGrey.grey500
    }
  }
}

class PatientDetailsCard extends Component {
  render () {
    return (
      <div
        className={
          (this.props.patientIdSelected === this.props.patientDetail.id)
          ? this.props.classes.patientWrapperSelectedStyle
          : this.props.classes.patientWrapperStyle
        }
        onClick={this.props.savePatientSelected.bind(this, this.props.patientDetail.id)}
      >
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <img src="/static/images/profile.svg" />
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="caption"
              className={this.props.classes.userNameStyle}
            >
              {this.props.patientDetail.full_name}
            </Typography>
            <div>
              <Typography
                variant="caption"
                className={this.props.classes.genderStyle}
              >
                {this.props.patientDetail.gender} | {this.props.patientDetail.age}
              </Typography>
            </div>
            <div>
              <Typography
                variant="caption"
                className={this.props.classes.mobileStyle}
              >
                {this.props.patientDetail.mobile}
              </Typography>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={3}>
                  <div>
                    <Typography
                      variant="caption"
                      className={this.props.classes.buttonLabel}
                    >
                      EDIT
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <Typography
                      variant="caption"
                      className={this.props.classes.buttonLabel}
                    >
                      DELETE
                    </Typography>
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
