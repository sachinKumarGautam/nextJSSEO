import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ProductInfo from './ProductInfo'
import ProductPriceDetails from './ProductPriceDetails'

/*
  Product basic info
  product price details
*/

const styles = theme => {
  return {
    productDetailsWrapper: {
      borderBottom: `1px solid ${theme.palette.customGrey.grey100}`,
      paddingBottom: theme.spacing.unit * 3
    }
  }
}

class ProductDetails extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24} className={this.props.classes.productDetailsWrapper}>
          <Grid item xs={8}>
            <ProductInfo
              toggleHover={this.props.toggleHover}
              hover={this.props.hover}
            />
          </Grid>
          <Grid item xs={4}>
            <ProductPriceDetails />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ProductDetails)
