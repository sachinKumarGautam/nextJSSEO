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
    customBrand: {
      ...theme.typography.body3
    },
    customPackSize: {
      ...theme.typography.body3
    },
    customPrice: {
      ...theme.typography.body1,
      marginRight: theme.spacing.unit,
      display: 'inline-block',
      marginLeft: theme.spacing.unit
    },
    customStrokePrice: {
      ...theme.typography.body3,
      textAlign: 'right'
    },
    customEstimatedLabel: {
      ...theme.typography.body3,
      display: 'inline-block'
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
      <EstimatedPriceLabel
        variant={'caption'}
        customStyle={props.classes.customEstimatedLabel}
        estimatePriceText={'*Est. Price '}
      />
      <ProductPrice
        variant={'body1'}
        customStyle={props.classes.customPrice}
      />
      <StrokePrice
        variant={'caption'}
        customStyle={props.classes.customStrokePrice}
      />
      <Button
        size='small'
        variant='outlined'
        color='primary'
        classes={{
          root: props.classes.buttonRoot,
          label: props.classes.buttonLabel
        }}
        style={{float: 'right'}}
        onClick={this.handleClickOpen}
        label={'Add To Cart'}
      />
    </div>
  </div>
)

export default withStyles(styles)(MedicineListDetails)
