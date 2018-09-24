import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import ProductName from './ProductName'
import ProductBrand from './ProductBrand'
import ProductPackSize from './ProductPackSize'
import ProductPrice from './ProductPrice'
import StrokePrice from './StrokePrice'
import EstimatedPriceLabel from './EstimatedPriceLabel'
import Button from './button/Button'
import AlreadyAdded from './AlreadyAdded'

const styles = theme => {
  return {
    relatedMedicinesCardWrapper: {
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
      borderBottom: `1px solid ${theme.palette.customGrey.grey100}`
    },
    medicineName: {
      ...theme.typography.body1,
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing.unit / 4,
      display: 'inline-block'
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
      ...theme.typography.body1,
      display: 'inline-block',
      marginRight: theme.spacing.unit * 0.25,
      marginLeft: theme.spacing.unit / 4,
      marginBottom: theme.spacing.unit * 0.5
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
      border: `1px solid ${theme.palette.primary.main}`,
      padding: `${0} ${theme.spacing.unit / 2}`,
      minHeight: theme.spacing.unit * 1.5
    },
    buttonLabel: {
      color: theme.palette.primary.main,
      fontSize: theme.spacing.unit * 1.5
    }
  }
}

class RelatedMedicinesCard extends React.Component {
  constructor (props) {
    super(props)
    this.handleOpenPincodeDialog = this.handleOpenPincodeDialog.bind(this)
    this.handleClosePincodeDialog = this.handleClosePincodeDialog.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.state = {
      pincodeDialogOpen: false
    }
  }

  addToCart (event) {
    event.stopPropagation()
    this.props.addToCartHandler(this.props.itemDetails)
  }

  handleOpenPincodeDialog () {
    this.setState({
      pincodeDialogOpen: true
    })
  }

  handleClosePincodeDialog () {
    this.setState({
      pincodeDialogOpen: false
    })
  }

  render () {
    const { props } = this
    const checkIfAlredyExistInCart = props.checkIfAlredyExistInCart
    return (
      <div>
        <ProductName
          variant={'body1'}
          name={props.itemDetails.name}
          customStyle={props.classes.medicineName}
          serviceType={props.itemDetails.available_service_type}
          deliveryOption={props.itemDetails.available_delivery_option}
        />
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
        {!checkIfAlredyExistInCart
          ? <Button
            variant='outlined'
            color='primary'
            classes={{
              root: props.classes.buttonRoot,
              label: props.classes.buttonLabel
            }}
            onClick={this.addToCart}
            label={'ADD TO CART'}
            />
          : <AlreadyAdded />}
      </div>
    )
  }
}

export default withStyles(styles)(RelatedMedicinesCard)
