import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'

const styles = theme => ({
  medicineListWrapper: {
    padding: theme.spacing.unit * 2.5,
    borderBottom: `1px solid ${theme.palette.customGrey.grey800}`
  },
  cartAmountWrapper: {
    marginTop: theme.spacing.unit * 1.25
  },
  medicineNameWrapper: {
    fontSize: theme.spacing.unit * 1.75,
    fontWeight: theme.typography.fontWeightBold
  },
  companyNameWrapper: {
    fontSize: theme.spacing.unit * 1.5
  },
  amount: {
    fontSize: theme.spacing.unit * 2
  },
  amountWrapper: {
    textAlign: 'center'
  }
})

class MedicineList extends Component {
  render () {
    return (
      <div>
        {
          this.props.cartState.payload.cart_items.payload.map(cartItem => {
            return (
              <div className={this.props.classes.medicineListWrapper}>
                <Grid container spacing={24}>
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
                      customStyle={this.props.classes.companyNameWrapper}
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
                    <div>
                      <Grid container spacing={24}>
                        <Grid item xs={5}>
                          <IconButton
                            onClick={this.props.decrementCartItem.bind(this, cartItem)}
                          >
                            <img src='/static/images/minusDisable.svg' />
                          </IconButton>
                        </Grid>
                        <Grid item xs={2} className={this.props.classes.cartAmountWrapper}>
                          <Typography>
                            {cartItem.quantity}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton
                            onClick={this.props.incrementCartItem.bind(this, cartItem)}
                          >
                            <img src='/static/images/plus.svg' />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default withStyles(styles)(MedicineList)
