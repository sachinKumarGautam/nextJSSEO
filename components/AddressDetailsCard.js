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
    userNameStyle: {
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    medicineNameStyle: {
      color: theme.palette.customGrey.grey500
    },
  }
}

class AddressDetailsCard extends Component {
  render () {
    return (
      <div
        className={
          (this.props.addressIdSelected === this.props.deliveryDetail.id)
          ? this.props.classes.addressWrapperSelectedStyle
          : this.props.classes.addressWrapperStyle
        }
        onClick={this.props.saveAddressSelected.bind(this, this.props.deliveryDetail.id)}
      >
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <img src="/static/images/home.svg" />
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="caption"
              className={this.props.classes.userNameStyle}
            >
              {this.props.deliveryDetail.type}
            </Typography>
            <div>
              <Typography
                variant="caption"
                className={this.props.classes.medicineNameStyle}
              >
                {this.props.deliveryDetail.street1}
              </Typography>
            </div>
            <div>
              <Typography
                variant="caption"
                className={this.props.classes.medicineNameStyle}
              >
                {this.props.deliveryDetail.street2}
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

export default withStyles(styles)(AddressDetailsCard)
