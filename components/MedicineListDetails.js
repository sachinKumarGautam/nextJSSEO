import React from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'

import ProductName from './ProductName'
import ProductBrand from './ProductBrand'
import ProductPackSize from './ProductPackSize'
import ProductPrice from './ProductPrice'
import StrokePrice from './StrokePrice'
import EstimatedPriceLabel from './EstimatedPriceLabel'
import AddToCartWrapper from '../containers/cartDetails/addToCartWrapper/index'
import {PRODUCT_DETAILS} from '../routes/RouteConstant'

import RefillDueDays from './RefillDueDays'

const styles = theme => {
  return {
    customName: {
      display: 'inline-block'
    },
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
      color: theme.palette.primary.main,
      fontSize: theme.typography.body3.fontSize
    },
    buttonWrapperStyle: {
      marginTop: theme.spacing.unit,
      float: 'right'
    }
  }
}

class MedicineListDetails extends React.Component {
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
    this.props.incrementCartItemLoading(this.props.cartState, this.props.itemDetails)
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

    const city = this.props.checkPincodeState.payload.city
    return (
      <Link
        prefetch
        href={`${PRODUCT_DETAILS}?id=${props.itemDetails.slug}&location=${city}`}
        as={`${PRODUCT_DETAILS}/${props.itemDetails.slug}`}
      >
        <div className={props.classes.medicineListContentWrapper}>
          <div>
            <ProductName
              variant={'body1'}
              name={props.itemDetails.name}
              customStyle={props.classes.customName}
            />
            {/* {props.isRefillMedicines && <RefillDueDays />} */}
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
              packSize={
                (props.itemDetails.pack_size && props.itemDetails.pack_size.name)
                  ? props.itemDetails.pack_size.name : props.itemDetails.pack_size
              }
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
            <div className={props.classes.buttonWrapperStyle}>
              <AddToCartWrapper
                variant='outlined'
                classes={{
                  root: props.classes.buttonRoot,
                  label: props.classes.buttonLabel
                }}
                // style={{float: 'right'}}
                label={'Add To Cart'}
                open={this.state.pincodeDialogOpen}
                handleOpenPincodeDialog={this.handleOpenPincodeDialog}
                handleClose={this.handleClosePincodeDialog}
                addToCart={this.addToCart}
                checkPincodeState={props.checkPincodeState}
                checkPincodeLoading={props.checkPincodeLoading}
              />
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default withStyles(styles)(MedicineListDetails)
