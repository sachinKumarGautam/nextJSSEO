import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from './button'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    addressWrapperStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      // width: theme.spacing.unit * 42.5,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5,
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    },
    addressWrapperSelectedStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      backgroundColor: theme.palette.customGreen.green200,
      // width: theme.spacing.unit * 42.5,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5,
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    },
    buttonLabel: {
      color: theme.palette.customGreen.green300,
      fontWeight: theme.typography.fontWeightBold
    },
    addressTypeStyle: {
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold,
      display: 'flex',
      flexDirection: 'row',
      marginBottom: theme.spacing.unit
    },
    addressTypeImage: {
      marginRight: theme.spacing.unit * 2.5,
      marginTop: theme.spacing.unit * -0.75
    },
    addressStyle: {
      color: theme.palette.customGrey.grey500,
      paddingBottom: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 5,
    },
    addressDescriptionStyle: {
      paddingLeft: theme.spacing.unit * 2.5
    },
    button: {
      backgroundColor: theme.palette.common.white,
      boxShadow: 'none',
      marginLeft: theme.spacing.unit * 3.25
    },
    buttonLabel: {
      ...theme.typography.body2,
      color: theme.palette.customGreen.green300,
      fontWeight: theme.typography.fontWeightBold
    },
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
    <Typography
      variant="caption"
      className={props.classes.addressTypeStyle}
    >
      <img src="/static/images/home.svg" className={props.classes.addressTypeImage}/>
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
      className={props.classes.addressStyle}
    >
      {props.deliveryDetail.street2}
    </Typography>
    <Button
      variant="contained"
      size="small"
      className={props.classes.button}
      classes={{
        label: props.classes.buttonLabel
      }}
      onClick={this.handleClickOpen}
      label={'EDIT'}
    />
  </div>
)

export default withStyles(styles)(AddressDetailsCard)
