import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    patientWrapperStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    },
    patientWrapperSelectedStyle: {
      border: `2px solid ${theme.palette.primary.main}`,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
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
    },
    buttonLabel: {
      ...theme.typography.body2,
      color: theme.palette.customGreen.green300,
      fontWeight: theme.typography.fontWeightBold
    },
    selectButtonLabel: {
      color: theme.palette.primary.main,
      marginLeft: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 1.25
    },
    selectButtonRoot: {
      cursor: 'pointer'
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
    onClick={
      props.savePatientSelected
        ? props.savePatientSelected.bind(this, props.patientDetail)
        : null
    }

  >
    <Grid container spacing={24}>
      <Grid item xs={3}>
        <img src='/static/images/profile.svg' />
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant='caption'
          className={props.classes.userNameStyle}
        >
          {props.patientDetail.full_name}
        </Typography>
        <div>
          <Typography
            variant='caption'
            className={props.classes.genderStyle}
          >
            {props.patientDetail.gender} | {props.patientDetail.age}
          </Typography>
        </div>
        <div>
          <Typography
            variant='caption'
            className={props.classes.mobileStyle}
          >
            {props.patientDetail.mobile}
          </Typography>
        </div>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              {
                props.isCartPage
                  ? (
                    <Typography
                      variant='caption'
                      className={props.classes.selectButtonLabel}
                      classes={{
                        root: props.classes.selectButtonRoot
                      }}
                    >
                      SELECT
                    </Typography>
                  ) : (
                    <div onClick={props.openPatientFormModal}>
                      <Typography
                        variant='caption'
                        className={props.classes.selectButtonLabel}
                        classes={{
                          root: props.classes.selectButtonRoot
                        }}
                      >
                        EDIT
                      </Typography>
                    </div>
                  )
              }
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(PatientDetailsCard)
