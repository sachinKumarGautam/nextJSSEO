import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import ProductDetails from './ProductDetails'
import ProductDetailsContent from './ProductDetailsContent'

/*
  bread crumbs
  Product Details
  Product Details content
*/

class ProductDetailsWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
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
