import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Button from './button'
import ProductName from './ProductName'
import ProductBrand from './ProductBrand'
import ProductPackSize from './ProductPackSize'
import ProductPrice from './ProductPrice'
import StrokePrice from './StrokePrice'
import EstimatedPriceLabel from './EstimatedPriceLabel'

const styles = theme => {
  return {
    relatedMedicinesCardWrapper: {
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2
    },
    customBrand: {
      ...theme.typography.body3
    },
    customPackSize: {
      ...theme.typography.body3
    },
    customPrice: {
      ...theme.typography.body1,
      marginRight: theme.spacing.unit
    },
    customStrokePrice: {
      ...theme.typography.body3
    },
    customEstimatedLabel: {
      ...theme.typography.body3
    },
    divider: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    priceWrapper: {
      textAlign: 'right'
    },
    estimatePriceWrapper: {
      textAlign: 'center'
    },
    medicineListContentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      color: theme.palette.primary.main
    }
  }
}

const MedicineListDetails = (props) => (
  <div className={props.classes.medicineListContentWrapper}>
    <div>
      <ProductName variant={'body1'} />
      <ProductBrand
        variant={'caption'}
        withoutImage
        customStyle={props.classes.customBrand}
      />
      <ProductPackSize
        variant={'caption'}
        withoutImage
        customStyle={props.classes.customPackSize}
      />
    </div>
    <div>
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
  </div>
)

export default withStyles(styles)(MedicineListDetails)
