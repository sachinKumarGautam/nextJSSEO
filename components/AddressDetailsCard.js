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
    addressWrapperSelectedStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      backgroundColor: 'rgb(243, 253, 232)',
      width: theme.spacing.unit * 42.5,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    },
    buttonLabel: {
      color: theme.palette.customGreen.green300,
      fontWeight: theme.typography.fontWeightBold
    },
    addressTypeStyle: {
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    addressStyle: {
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit * 1.25,
      paddingBottom: theme.spacing.unit * 1.25
    },
    addressDescriptionStyle: {
      paddingLeft: theme.spacing.unit * 2.5
    }
  }
}

const AddressDetailsCard = props => (
  <div
    className={
      (props.addressIdSelected === props.deliveryDetail.id)
      ? props.classes.addressWrapperSelectedStyle
      : props.classes.addressWrapperStyle
    }
    onClick={props.saveAddressSelected.bind(this, props.deliveryDetail.id)}
  >
    <Grid container spacing={24}>
      <Grid item xs={1}>
        <img src="/static/images/home.svg" />
      </Grid>
      <Grid item xs={11} className={props.classes.addressDescriptionStyle}>
        <Typography
          variant="caption"
          className={props.classes.addressTypeStyle}
        >
          {props.deliveryDetail.type}
        </Typography>
        <div>
          <Typography
            variant="caption"
            className={props.classes.addressStyle}
          >
            {props.deliveryDetail.street1}
          </Typography>
        </div>
        <div>
          <Typography
            variant="caption"
            className={props.classes.medicineNameStyle}
          >
            {props.deliveryDetail.street2}
          </Typography>
        </div>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <div>
                <Typography
                  variant="caption"
                  className={props.classes.buttonLabel}
                >
                  EDIT
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div>
                <Typography
                  variant="caption"
                  className={props.classes.buttonLabel}
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

export default withStyles(styles)(AddressDetailsCard)
