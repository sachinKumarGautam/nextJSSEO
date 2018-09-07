import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { Grid } from '@material-ui/core'

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
    imageStyle: {
      marginBottom: theme.spacing.unit * 9.625,
      textAlign: 'center'
    },
    button: {
      margin: theme.spacing.unit,
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
    buttonWrapperStyle: {
      marginBottom: theme.spacing.unit * 11.375,
      textAlign: 'center'
    },
    membershipCardTitle: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold
    },
    membershipCardDescription: {
      ...theme.typography.body1,
      marginBottom: theme.spacing.unit * 1.25
    }
  }
}

class MembershipCardDetail extends Component {
  onAddToCart (name, sku) {
    const medicineSelected = {
      name: name,
      sku: sku,
      quantity: 1
    }
    this.props.incrementCartItemLoading(
      this.props.cartState,
      medicineSelected
    )
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
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <img src='/static/images/atulya-frt.png' />
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
              className={this.props.classes.membershipCardTitle}
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
          </Grid>
          <Grid item xs={6}>
            <img src='/static/images/saarthi-frt.png' />
            <Typography
              variant='body2'
              className={this.props.classes.membershipCardTitle}
            >
              Saarthi Membership Card
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.membershipCardDescription}
            >
              Customer gets flat 20% off on every order for a year.
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.membershipCardTitle}
            >
              &#8377;999.00
            </Typography>
            <Button
              variant='raised'
              color='primary'
              className={this.props.classes.button}
              classes={{
                label: this.props.classes.buttonlabel
              }}
              onClick={this.onAddToCart.bind(this, 'Saarthi', 'I08414')}
            >
            ADD TO CART
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MembershipCardDetail)
