import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'

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
      backgroundColor: theme.palette.customGreen.green200,
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
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 3.5
    },
    addressStyle: {
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit * 1.25,
      paddingBottom: theme.spacing.unit * 1.25,
      marginLeft: theme.spacing.unit * 3.5
    },
    addressDescriptionStyle: {
      paddingLeft: theme.spacing.unit * 2.5
    },
    button: {
      backgroundColor: theme.palette.common.white,
      boxShadow: 'none',
      marginLeft: theme.spacing.unit * 1.25
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
        <Typography
          variant="caption"
          className={props.classes.addressStyle}
        >
          {props.deliveryDetail.street1}
        </Typography>
        <Typography
          variant="caption"
          className={props.classes.medicineNameStyle}
        >
          {props.deliveryDetail.street2}
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3}>
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
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(AddressDetailsCard)
