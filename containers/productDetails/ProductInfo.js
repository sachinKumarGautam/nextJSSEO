import React, { Component } from 'react'

import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'
import ProductMolecule from '../../components/ProductMolecule'
import DiseaseTagsWrapper from './DiseaseTagsWrapper'
import ProductOverview from '../../components/ProductOverview'
import ProductInfoNav from '../../components/ProductInfoNav'

/*
  Product name
  product brand
  product pack size
  product molecule
  product related disease tags
  product overview
  product info nav
*/

class ProductInfo extends Component {
  render () {
    return (
      <div>
        <ProductName />
        <ProductBrand />
        <ProductPackSize />
        <ProductMolecule />
        <DiseaseTagsWrapper />
        <ProductOverview />
        <ProductInfoNav />
      </div>
    )
  }
}

export default ProductInfo
