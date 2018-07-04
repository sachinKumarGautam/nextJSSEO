import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import ProductName from './ProductName'
import ProductBrand from './ProductBrand'
import ProductPackSize from './ProductPackSize'
import ProductPrice from './ProductPrice'
import StrokePrice from './StrokePrice'
import EstimatedPriceLabel from './EstimatedPriceLabel'
import AddToCartWrapper from '../containers/cartDetails/addToCartWrapper/index'

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

class MedicineListDetails extends React.Component {
  constructor (props) {
    super(props)
    this.handleOpenPincodeDialog = this.handleOpenPincodeDialog.bind(this)
    this.handleClosePincodeDialog = this.handleClosePincodeDialog.bind(this)
    this.state = {
      pincodeDialogOpen: false
    }
  }

  addToCart () {
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
    const {
      props
    } = this

    return (
      <div className={props.classes.medicineListContentWrapper}>
        <div>
          <ProductName variant={'body1'} />
          <ProductBrand
            variant={'caption'}
            withoutImage
            customStyle={props.classes.customBrand}
            brand={props.itemDetails.brand_name}
          />
          <ProductPackSize
            variant={'caption'}
            withoutImage
            customStyle={props.classes.customPackSize}
            packType={props.itemDetails.pack_type}
            packSize={props.itemDetails.pack_size.name}
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
            sellingPrice={props.itemDetails.selling_price}
          />
          <StrokePrice
            variant={'caption'}
            customStyle={props.classes.customStrokePrice}
            mrp={props.itemDetails.mrp}
          />
          <AddToCartWrapper
            variant='outlined'
            classes={{
              root: props.classes.buttonRoot,
              label: props.classes.buttonLabel
            }}
            open={this.state.pincodeDialogOpen}
            handleOpenPincodeDialog={this.handleOpenPincodeDialog}
            handleClose={this.handleClosePincodeDialog}
            onClick={this.addToCart.bind(this)}
            checkPincodeState={props.checkPincodeState}
            checkPincodeLoading={props.checkPincodeLoading}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MedicineListDetails)
