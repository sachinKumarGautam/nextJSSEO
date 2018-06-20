import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import ProductName from './ProductName'
import ProductBrand from './ProductBrand'
import ProductPackSize from './ProductPackSize'
import ProductPrice from './ProductPrice'
import StrokePrice from './StrokePrice'
import EstimatedPriceLabel from './EstimatedPriceLabel'
import Button from '../components/button'

const styles = theme => {
  return {
    relatedMedicinesCardWrapper: {
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
      borderBottom: `1px solid ${theme.palette.customGrey.grey100}`
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
    },
    buttonRoot: {
      border: '1px solid #80c241'
    },
    buttonLabel: {
      color: '#80c241'
    }

  }
}

const RelatedMedicinesCard = (props) => (
  <div className={props.classes.relatedMedicinesCardWrapper}>
    <ProductName variant={'body1'} />
    <div>
      <ProductBrand
        variant={'caption'}
        withoutImage
        customStyle={props.classes.customBrand}
      />
      <span className={props.classes.divider}>|</span>
      <ProductPackSize
        variant={'caption'}
        withoutImage
        customStyle={props.classes.customPackSize}
      />
    </div>
    <div className={props.classes.priceWrapper}>
      <ProductPrice
        variant={'body1'}
        customStyle={props.classes.customPrice}
      />
      <StrokePrice
        variant={'caption'}
        customStyle={props.classes.customStrokePrice}
      />
      <EstimatedPriceLabel
        variant={'caption'}
        customStyle={props.classes.customEstimatedLabel}
      />
    </div>
    <Button
      size='small'
      variant='outlined'
      color='primary'
      classes={{
        root: props.classes.buttonRoot,
        label: props.classes.buttonLabel
      }}
      onClick={this.handleClickOpen}
      label={'Add To Cart'}
    />
  </div>
)

export default withStyles(styles)(RelatedMedicinesCard)
