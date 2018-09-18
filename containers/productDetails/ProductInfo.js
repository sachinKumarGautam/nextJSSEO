import React, { Component } from 'react'

import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'
import ProductMolecule from '../../components/ProductMolecule'
import DiseaseTagsWrapper from '../../components/DiseaseTagsWrapper'
import ProductOverview from '../../components/ProductOverview'
import ProductInfoNav from '../../components/ProductInfoNav'
import CommonContentLoader
  from '../../components/activityIndicator/loader/CommonContentLoader'
import ProductStatus from '../../components/ProductStatus'

import ActivityIndicator from '../../components/activityIndicator'

import { ACTIVE_STATUS } from '../../components/constants/Constants'

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
    const { productDetailsState } = this.props
    return (
      <React.Fragment>
        <ActivityIndicator
          isLoading={productDetailsState.isLoadingGetProductDetails}
          LoaderComp={<CommonContentLoader />}
          compName={'ProductInfo'}
        >
          <ProductName
            variant={'title'}
            name={productDetailsState.payload.name}
            serviceType={productDetailsState.available_service_type}
            deliveryOption={productDetailsState.available_delivery_option}
          />
          <ProductBrand
            variant={'subheading'}
            brand={productDetailsState.payload.brand}
          />
          <ProductPackSize
            variant={'subheading'}
            packType={productDetailsState.payload.pack_type}
            packSize={
              productDetailsState.payload.pack_size
                ? productDetailsState.payload.pack_size.name
                : ''
            }
          />
          {
            productDetailsState.payload.status !== ACTIVE_STATUS &&
            <ProductStatus
              variant={'caption'}
              status={productDetailsState.payload.status}
            />
          }
          <ProductMolecule
            variant={'body1'}
            salts={productDetailsState.payload.salts}
          />
          <DiseaseTagsWrapper diseases={productDetailsState.payload.diseases} />
          <ProductOverview overview={productDetailsState.payload.description} />
        </ActivityIndicator>
        {!productDetailsState.isLoadingGetProductDetails &&
          <ProductInfoNav
            toggleHover={this.props.toggleHover}
            hover={this.props.hover}
          />}
      </React.Fragment>
    )
  }
}

export default ProductInfo
