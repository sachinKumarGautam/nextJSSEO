import React, { Component } from 'react'

import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'
import ProductMolecule from '../../components/ProductMolecule'
import DiseaseTagsWrapper from '../../components/DiseaseTagsWrapper'
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
        <ProductName variant={'title'} />
        <ProductBrand variant={'subheading'} />
        <ProductPackSize variant={'subheading'} />
        <ProductMolecule variant={'body1'} />
        <DiseaseTagsWrapper />
        <ProductOverview />
        <ProductInfoNav
          toggleHover={this.props.toggleHover}
          hover={this.props.hover}
        />
      </div>
    )
  }
}

export default ProductInfo
