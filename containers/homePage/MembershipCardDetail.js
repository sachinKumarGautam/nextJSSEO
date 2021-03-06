import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => {
  return {
    membershipWrapper: {
      marginLeft: theme.spacing.unit * 12.375,
      marginRight: theme.spacing.unit * 12.375
    },
    title: {
      fontSize: theme.typography.pxToRem(26),
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing.unit * 8.375,
      marginBottom: theme.spacing.unit * 4
    },
    description: {
      ...theme.typography.body2,
      marginBottom: theme.spacing.unit * 5.375
    },
    button: {
      margiTop: theme.spacing.unit,
      backgroungColor: theme.palette.primary.main,
      marginBottom: theme.spacing.unit * 12
    },
    buttonlabel: {
      ...theme.typography.caption,
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      color: theme.palette.secondary.main
    },
    membershipCardTitle: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold
    },
    membershipCardAmount: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing.unit * 1.25
    },
    membershipCardDescription: {
      ...theme.typography.body1,
      marginBottom: theme.spacing.unit * 1.25
    },
    cardWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    imageStyle: {
      marginRight: theme.spacing.unit * 4.75,
      marginBottom: theme.spacing.unit * 12
    }
  }
}

class MembershipCardDetail extends Component {
  onAddToCart (name, sku) {
    if (!this.props.cartState.payload.uid) {
      const isShowNoCartIdDialog = true

      this.props.updateShowNoCartIdDialogFlag(
        this.props.cartState,
        isShowNoCartIdDialog
      )
    } else {
      const medicineSelected = {
        name: name,
        sku: sku,
        quantity: 0
      }

      this.props.incrementCartItemLoading(
        this.props.cartState,
        medicineSelected
      )
    }
  }
  render () {
    return (
      <div className={this.props.classes.membershipWrapper}>
        <Typography
          variant='headline'
          className={this.props.classes.title}
        >
          Membership Plans
        </Typography>
        <Typography
          variant='body2'
          className={this.props.classes.description}
        >
          Save more with our pre-paid membership plans. Enroll today and get discounts on all your medicines for 1 year.
        </Typography>
        <div className={this.props.classes.cardWrapper}>
          <div>
            <img src='/static/images/atulya-frt.png' className={this.props.classes.imageStyle} />
          </div>
          <div>
            <Typography
              variant='body2'
              className={this.props.classes.membershipCardTitle}
            >
              Atulya Membership Card
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.membershipCardDescription}
            >
              Customer gets flat 25% off on every order for a year.
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.membershipCardAmount}
            >
              &#8377;1999.00
            </Typography>
            <Button
              variant='raised'
              color='primary'
              className={this.props.classes.button}
              classes={{
                label: this.props.classes.buttonlabel
              }}
              onClick={this.onAddToCart.bind(this, 'Atulya', 'I08415')}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MembershipCardDetail)
