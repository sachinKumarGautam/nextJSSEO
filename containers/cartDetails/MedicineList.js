import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'
import Loader from '../../components/activityIndicator/loader/index'

const styles = theme => ({
  cartAmountWrapper: {
    marginTop: theme.spacing.unit * 1.25
  },
  cartAmount: {
    marginLeft: theme.spacing.unit * 1.25
  },
  medicineNameWrapper: {
    ...theme.typography.body2,
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing.unit * 3.875,
    marginTop: theme.spacing.unit * 2.875,
    marginBottom: theme.spacing.unit / 4
  },
  companyNameWrapper: {
    ...theme.typography.caption,
    marginLeft: theme.spacing.unit * 3.875,
    marginBottom: theme.spacing.unit / 4
  },
  packType: {
    ...theme.typography.caption,
    marginLeft: theme.spacing.unit * 3.875
  },
  amount: {
    ...theme.typography.subheading,
    fontSize: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 5.5,
    marginTop: theme.spacing.unit * 2.875
  },
  amountWrapper: {
    textAlign: 'right'
  },
  buttonWrapper: {
    minWidth: theme.typography.pxToRem(100),
    display: 'flex',
    flexDirection: 'row',
    marginRight: theme.spacing.unit * 3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  deliveryTat: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing.unit * 3.875,
    marginBottom: theme.spacing.unit * 1.75
  },
  fabProgress: {
    color: theme.palette.primary.main
  },
  buttonImage: {
    position: 'absolute'
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    position: 'relative',
    minHeight: '50px',
    minWidth: '50px'
  }
})

class MedicineList extends Component {
  render () {
    const { quantityStatus } = this.props
    return (
      <div>
        {this.props.cartState.payload.cart_items.payload.map(cartItem => {
          return (
            <div>
              <Grid container>
                <Grid item xs={8}>
                  <ProductName
                    customStyle={this.props.classes.medicineNameWrapper}
                    name={cartItem.name}
                    serviceType={cartItem.available_service_type}
                    deliveryOption={cartItem.available_delivery_option}
                  />
                  <ProductBrand
                    customStyle={this.props.classes.companyNameWrapper}
                    brand={cartItem.brand}
                    withoutImage
                  />
                  <ProductPackSize
                    customStyle={this.props.classes.packType}
                    packType={cartItem.type}
                    packSize={cartItem.per_pack_qty}
                    withoutImage
                  />
                  {this.props.checkPincodeState.payload.pincode &&
                    <Typography
                      gutterBottom
                      variant='caption'
                      component='h1'
                      className={this.props.classes.deliveryTat}
                    >
                      Delivery by
                      {' '}
                      {this.props.checkPincodeState.payload.delivery_day}
                      {' '}
                      days
                    </Typography>}
                </Grid>
                <Grid item xs={4}>
                  <div className={this.props.classes.amountWrapper}>
                    <Typography className={this.props.classes.amount}>
                      ₹ {cartItem.mrp}
                    </Typography>
                  </div>
                  <div className={this.props.classes.buttonWrapper}>

                    <div
                      onClick={
                        !cartItem.isLoading
                          ? (
                            this.props.decrementCartItem.bind(
                              this,
                              cartItem
                            )
                          ) : null
                      }
                      className={this.props.classes.iconButton}
                    >
                      <img
                        className={this.props.classes.buttonImage}
                        src='/static/images/minusDisable.svg'
                      />
                      <Loader
                        loaderType={'commonSpinner'}
                        isLoading={
                          quantityStatus === 'decrease' && cartItem.isLoading
                        }
                        size={28}
                        customStyle={this.props.classes.fabProgress}
                      />
                    </div>
                    <Typography>
                      {cartItem.quantity}
                    </Typography>
                    <div
                      className={this.props.classes.iconButton}
                      onClick={
                        !cartItem.isLoading
                          ? (
                            this.props.incrementCartItem.bind(
                              this,
                              cartItem
                            )
                          ) : null
                      }
                    >
                      <img
                        className={this.props.classes.buttonImage}
                        src='/static/images/plus.svg'
                      />
                      <Loader
                        loaderType={'commonSpinner'}
                        isLoading={
                          quantityStatus === 'increase' && cartItem.isLoading
                        }
                        size={28}
                        customStyle={this.props.classes.fabProgress}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Divider />
            </div>
          )
        })}
      </div>
    )
  }
}

export default withStyles(styles)(MedicineList)
