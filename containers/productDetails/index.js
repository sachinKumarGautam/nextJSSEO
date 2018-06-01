import React, { Component } from 'react'

import ProductDetails from './ProductDetails'
import ProductDetailsContent from './ProductDetailsContent'

/* Product Details
Product Details content */

class ProductDetailsWrapper extends Component {
  render () {
    return (
      <div>
        <section>
          <ProductDetails />
        </section>
        <section>
          <ProductDetailsContent />
        </section>
      </div>
    )
  }
}

export default ProductDetailsWrapper
