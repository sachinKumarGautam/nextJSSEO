import React, { Component } from 'react'

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
        <ProductInfo />
        <ProductPriceDetails />
      </div>
    )
  }
}

export default ProductDetails