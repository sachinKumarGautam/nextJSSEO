import React, { Component } from 'react'

import ProductUseCases from './ProductUseCases'
import RelatedArticles from '../../components/RelatedArticles'
/*
  product use cases
  related articles
*/

class ProductDetailsContent extends Component {
  render() {
    return (
      <div>
        <ProductUseCases />
        <RelatedArticles />
      </div>
    )
  }
}

export default ProductDetailsContent