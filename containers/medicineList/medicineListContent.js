import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Button from '../../components/button'
import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'
import ProductPrice from '../../components/ProductPrice'
import StrokePrice from '../../components/StrokePrice'
import EstimatedPriceLabel from '../../components/EstimatedPriceLabel'

const styles = theme => {
  return {
    relatedMedicinesCardWrapper: {
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2
    },
    customBrand: {
      ...theme.typography.body3,
      display: 'inline-block',
      fontSize: theme.typography.fontSize - 4
    },
    customPackSize: {
      ...theme.typography.body3,
      display: 'inline-block',
      fontSize: theme.typography.fontSize - 4
    },
    customPrice: {
      display: 'inline-block',
      marginRight: theme.spacing.unit,
      fontSize: theme.typography.fontSize
    },
    customStrokePrice: {
      ...theme.typography.body3,
      display: 'inline-block',
      fontSize: theme.typography.fontSize - 4
    },
    customEstimatedLabel: {
      ...theme.typography.body3,
      display: 'inline-block',
      fontSize: theme.typography.fontSize - 6
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

const MedicineListContent = (props) => (
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

export default withStyles(styles)(MedicineListContent)
