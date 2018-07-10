import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'

import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'

const styles = theme => ({
  cartAmountWrapper: {
    marginTop: theme.spacing.unit * 1.25
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
    marginBottom: theme.spacing.unit /4
  },
  packType:{
    ...theme.typography.caption,
    marginLeft: theme.spacing.unit * 3.875,
    marginBottom: theme.spacing.unit * 3.125
  },
  amount: {
    ...theme.typography.subheading,
    fontSize: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 5.5,
    marginTop: theme.spacing.unit * 2.875
  },
  amountWrapper: {
    textAlign: 'center'
  },
  plusIcon: {
    marginRight: theme.spacing.unit * 3.75,
    marginLeft: theme.spacing.unit
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: theme.spacing.unit * 2
  },
  minusButton: {
    marginRight: theme.spacing.unit
  }
})

class MedicineList extends Component {
  render () {
    return (
      <div>
        {
          this.props.cartState.payload.cart_items.payload.map(cartItem => {
            return (
              <div>
                <Grid
                  container
                >
                  <Grid item xs={7}>
                    <ProductName
                      customStyle={this.props.classes.medicineNameWrapper}
                      name={cartItem.name}
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
                  </Grid>
                  <Grid item xs={5}>
                    <div className={this.props.classes.amountWrapper}>
                      <Typography className={this.props.classes.amount}>
                        Rs. {cartItem.mrp}
                      </Typography>
                    </div>
                    <div className={this.props.classes.buttonWrapper}>
                      <IconButton
                        onClick={this.props.decrementCartItem.bind(this, cartItem)}
                        className={this.props.classes.minusButton}
                      >
                        <img
                          src='/static/images/minusDisable.svg'
                        />
                      </IconButton>
                      <Typography
                        className={this.props.classes.cartAmountWrapper}
                      >
                        {cartItem.quantity}
                      </Typography>
                      <IconButton
                        onClick={this.props.incrementCartItem.bind(this, cartItem)}
                        className={this.props.classes.plusIcon}
                      >
                        <img
                          src='/static/images/plus.svg'
                        />
                      </IconButton>
                    </div>
                  </Grid>
                </Grid>
                <Divider/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default withStyles(styles)(MedicineList)
