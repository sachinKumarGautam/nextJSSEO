import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'


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
      backgroundColor: theme.palette.customGreen.green200,
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
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 1.875
    },
    genderStyle: {
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit * 1.875
    },
    mobileStyle: {
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit * 1.875
    },
    button: {
      backgroundColor: theme.palette.common.white,
      boxShadow: 'none'
    }
  }
}

const PatientDetailsCard = props => (
  <div
    className={
      (props.patientIdSelected === props.patientDetail.id)
      ? props.classes.patientWrapperSelectedStyle
      : props.classes.patientWrapperStyle
    }
    onClick={props.savePatientSelected.bind(this, props.patientDetail.id)}
  >
    <Grid container spacing={24}>
      <Grid item xs={3}>
        <img src="/static/images/profile.svg" />
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant="caption"
          className={props.classes.userNameStyle}
        >
          {props.patientDetail.full_name}
        </Typography>
        <div>
          <Typography
            variant="caption"
            className={props.classes.genderStyle}
          >
            {props.patientDetail.gender} | {props.patientDetail.age}
          </Typography>
        </div>
        <div>
          <Typography
            variant="caption"
            className={props.classes.mobileStyle}
          >
            {props.patientDetail.mobile}
          </Typography>
        </div>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                size="small"
                className={props.classes.button}
              >
                <Typography
                  variant="caption"
                  className={props.classes.buttonLabel}
                >
                  EDIT
                </Typography>
              </Button>
            </Grid>
            {
              // <Grid item xs={3}>
              //   <Button
              //     variant="contained"
              //     size="small"
              //     className={props.classes.button}
              //   >
              //     <Typography
              //       variant="caption"
              //       className={props.classes.buttonLabel}
              //     >
              //       DELETE
              //     </Typography>
              //   </Button>
              // </Grid>
            }
          </Grid>
        </div>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(PatientDetailsCard)
