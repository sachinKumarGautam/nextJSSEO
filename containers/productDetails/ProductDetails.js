import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';

import ProductInfo from './ProductInfo'
import ProductPriceDetails from './ProductPriceDetails'

/* 
  Product basic info
  product price details
*/

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item lg={8}>
            <ProductInfo />
          </Grid>
          <Grid item lg={4}>
            <ProductPriceDetails />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ProductDetails