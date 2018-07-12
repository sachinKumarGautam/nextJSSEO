import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from './button'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    addressWrapperStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    },
    addressWrapperSelectedStyle: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      backgroundColor: theme.palette.customGreen.green200,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    },
    addressTypeStyle: {
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    addressTypeWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline'
    },
    addressTypeImage: {
      marginRight: theme.spacing.unit * 2.5
    },
    addressStyle: {
      color: theme.palette.customGrey.grey500,
      paddingBottom: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 5
    },
    addressDescriptionStyle: {
      paddingLeft: theme.spacing.unit * 2.5
    },
    button: {
      backgroundColor: theme.palette.common.white,
      boxShadow: 'none',
      marginLeft: theme.spacing.unit * 3.25
    },
    selectButtonLabel: {
      color: theme.palette.primary.main,
      paddingLeft: theme.spacing.unit * 5,
      marginTop: theme.spacing.unit * 1.25
    },
    selectButtonRoot: {
      cursor: 'pointer'
    },
    buttonLabel: {
      ...theme.typography.body2,
      color: theme.palette.customGreen.green300,
      fontWeight: theme.typography.fontWeightBold
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
    <div className={props.classes.addressTypeWrapper}>
      <img src='/static/images/home.svg' className={props.classes.addressTypeImage} />
      <Typography
        variant='caption'
        className={props.classes.addressTypeStyle}
      >
        {props.deliveryDetail.type}
      </Typography>
    </div>
    <Typography
      variant='caption'
      className={props.classes.addressStyle}
    >
      {props.deliveryDetail.street1}
    </Typography>
    <Typography
      variant='caption'
      className={props.classes.addressStyle}
    >
      {props.deliveryDetail.street2}
    </Typography>
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
          <div onClick={this.handleClickOpen}>
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
  </div>
)

export default withStyles(styles)(AddressDetailsCard)
