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
        <ProductName
          variant={'title'}
          name={this.props.productDetailsState.payload.name}
        />
        <ProductBrand
          variant={'subheading'}
          brand={this.props.productDetailsState.payload.brand}
        />
        <ProductPackSize
          variant={'subheading'}
          packType={this.props.productDetailsState.payload.pack_type}
          packSize={this.props.productDetailsState.payload.pack_size
            ? this.props.productDetailsState.payload.pack_size.name : ''}
        />
        <ProductMolecule
          variant={'body1'}
          salts={this.props.productDetailsState.payload.salts}
        />
        <DiseaseTagsWrapper
          diseases={this.props.productDetailsState.payload.diseases}
        />
        <ProductOverview
          overview={this.props.productDetailsState.payload.description}
        />
        <ProductInfoNav
          toggleHover={this.props.toggleHover}
          hover={this.props.hover}
        />
      </div>
    )
  }
}

export default ProductInfo
