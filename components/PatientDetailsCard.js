import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'
import { REFILL } from './constants/Constants'

const styles = theme => {
  return {
    patientWrapperStyle: {
      cursor: 'pointer',
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

class PatientDetailsCard extends React.Component {
  handleOnClickPatientCard = () => {
    // check source type and patient id selected  and patient id in cart
    if (this.props.cartType === REFILL) {
      this.props.onClickOfPatient(this.props.patientDetail)
    } else {
      this.props.savePatientSelected &&
        this.props.savePatientSelected(this.props.patientDetail)
    }
  }

  render () {
    return (
      <div
        className={
          this.props.patientIdSelected === this.props.patientDetail.id
            ? this.props.classes.patientWrapperSelectedStyle
            : this.props.classes.patientWrapperStyle
        }
        onClick={this.handleOnClickPatientCard}
      >
        <Grid container>
          <Grid item xs={2}>
            <img src='/static/images/profile.svg' />
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant='caption'
              className={this.props.classes.userNameStyle}
            >
              {this.props.patientDetail.full_name}
            </Typography>
            <div>
              <Typography
                variant='caption'
                className={this.props.classes.genderStyle}
              >
                {this.props.patientDetail.gender}
                {' '}
                |
                {' '}
                {this.props.patientDetail.age}
              </Typography>
            </div>
            <div>
              <Typography
                variant='caption'
                className={this.props.classes.mobileStyle}
              >
                {this.props.patientDetail.mobile}
              </Typography>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  {this.props.isCartPage
                    ? <Typography
                      variant='caption'
                      className={this.props.classes.selectButtonLabel}
                      classes={{
                        root: this.props.classes.selectButtonRoot
                      }}
                    >
                        SELECT
                    </Typography>
                    : <div onClick={this.props.openPatientFormModal}>
                      <Typography
                        variant='caption'
                        className={this.props.classes.selectButtonLabel}
                        classes={{
                          root: this.props.classes.selectButtonRoot
                        }}
                      >
                          EDIT
                      </Typography>
                    </div>}
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
