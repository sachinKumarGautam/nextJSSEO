import React from 'react'

import ProductName from './ProductName'
import ProductBrand from './ProductBrand'
import ProductPackSize from './ProductPackSize'
import ProductPrice from './ProductPrice'
import StrokePrice from './StrokePrice'
import EstimatedPriceLabel from './EstimatedPriceLabel'
import Button from '@material-ui/core/Button'

const RelatedMedicinesCard = (props) => (
  <div>
    <ProductName />
    <ProductBrand /> | <ProductPackSize />
    <ProductPrice /> <StrokePrice /> <EstimatedPriceLabel />
    <Button
      size='small'
      variant='raised'
      color='primary'
      onClick={this.handleClickOpen}
    >
      Add To Cart
    </Button>
  </div>
)

export default RelatedMedicinesCard
