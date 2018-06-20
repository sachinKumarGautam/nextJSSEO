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
      ...theme.typography.body3,
      display: 'inline-block'
    },
    customPackSize: {
      ...theme.typography.body3,
      display: 'inline-block'
    },
    customPrice: {
      display: 'inline-block',
      marginRight: theme.spacing.unit,
      fontSize: theme.typography.fontSize
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
      <div>
        <ProductName variant={'body1'} />
      </div>
      <div>
        <ProductBrand
          variant={'caption'}
          withoutImage
          customStyle={props.classes.customBrand}
        />
      </div>
      <div>
        <ProductPackSize
          variant={'caption'}
          withoutImage
          customStyle={props.classes.customPackSize}
        />
      </div>
    </div>
    <div>
      <div className={props.classes.priceWrapper}>
        <ProductPrice
          variant={'body1'}
          customStyle={props.classes.customPrice}
        />
      </div>
      <div className={props.classes.priceWrapper}>
        <StrokePrice
          variant={'caption'}
          customStyle={props.classes.customStrokePrice}
        />
      </div>
      <div className={props.classes.estimatePriceWrapper}>
        <EstimatedPriceLabel
          variant={'caption'}
          customStyle={props.classes.customEstimatedLabel}
        />
      </div>
      <div>
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
  </div>
)

export default withStyles(styles)(MedicineListDetails)
