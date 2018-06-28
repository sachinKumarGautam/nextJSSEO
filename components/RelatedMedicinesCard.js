import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import ProductName from './ProductName'
import ProductBrand from './ProductBrand'
import ProductPackSize from './ProductPackSize'
import ProductPrice from './ProductPrice'
import StrokePrice from './StrokePrice'
import EstimatedPriceLabel from './EstimatedPriceLabel'
import Button from '@material-ui/core/Button'

const styles = theme => {
  return {
    relatedMedicinesCardWrapper: {
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2
    },
    customBrand: {
      ...theme.typography.body3,
      display: 'inline-block'
    },
    customPackSize: {
      ...theme.typography.body3,
      display: 'inline-block'
    },
    customPrice: {
      display: 'inline-block',
      marginRight: theme.spacing.unit
    },
    customStrokePrice: {
      ...theme.typography.body3,
      display: 'inline-block'
    },
    customEstimatedLabel: {
      ...theme.typography.body3,
      display: 'inline-block'
    },
    divider: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    priceWrapper: {
      marginBottom: theme.spacing.unit
    }
  }
}

const RelatedMedicinesCard = (props) => (
  <div>
    <ProductName variant={'body1'} name={props.itemDetails.name} />
    <div>
      <ProductBrand
        variant={'caption'}
        withoutImage
        customStyle={props.classes.customBrand}
        brand={props.itemDetails.brand_name}
      />
      <span className={props.classes.divider}>|</span>
      <ProductPackSize
        variant={'caption'}
        withoutImage
        customStyle={props.classes.customPackSize}
        packType={props.itemDetails.pack_type}
        packSize={props.itemDetails.pack_size.name}
      />
    </div>
    <div className={props.classes.priceWrapper}>
      <ProductPrice
        variant={'body1'}
        customStyle={props.classes.customPrice}
        sellingPrice={props.itemDetails.selling_price}
      />
      <StrokePrice
        variant={'caption'}
        customStyle={props.classes.customStrokePrice}
        mrp={props.itemDetails.mrp}
      />
      <EstimatedPriceLabel
        variant={'caption'}
        customStyle={props.classes.customEstimatedLabel}
        estimatePriceText={'*Estimated Price'}
      />
    </div>
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

export default withStyles(styles)(RelatedMedicinesCard)
