import React from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ProductName from './ProductName'
import ProductBrand from './ProductBrand'
import ProductPackSize from './ProductPackSize'
import ProductPrice from './ProductPrice'
import StrokePrice from './StrokePrice'
import EstimatedPriceLabel from './EstimatedPriceLabel'
import { PRODUCT_DETAILS } from '../routes/RouteConstant'
import Button from './button'
import AlreadyAdded from './AlreadyAdded'
import ProductStatus from './ProductStatus'

import { ACTIVE_STATUS } from './constants/Constants'

const styles = theme => {
  return {
    customName: {
      ...theme.typography.body2,
      display: 'inline-block',
      marginBottom: theme.spacing.unit / 4,
      fontWeight: theme.typography.fontWeightBold
    },
    customBrand: {
      ...theme.typography.body3
    },
    customPackSize: {
      ...theme.typography.body3,
      display: 'inline-block'
    },
    customPrice: {
      ...theme.typography.body1,
      marginRight: theme.spacing.unit * 1.25,
      display: 'inline-block',
      marginBottom: theme.spacing.unit / 4,
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
      marginRight: theme.spacing.unit * 3,
      cursor: 'pointer'
    },
    // buttonLabel: {
    //   color: theme.palette.primary.main,
    //   fontSize: theme.typography.body3.fontSize
    // },
    // disabledButtonLabel: {
    //   color: theme.palette.customGrey.grey300,
    //   fontSize: theme.typography.body3.fontSize
    // },
    buttonWrapperStyle: {
      marginTop: theme.spacing.unit,
      float: 'right',
      minWidth: theme.spacing.unit * 10,
      display: 'inline-block'
    },
    deliveryTat: {
      ...theme.typography.body3,
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    disableLink: {
      pointerEvents: 'none'
    },
    button: {
      pointerEvents: 'auto !important'
    }
  }
}

class MedicineListDetails extends React.Component {
  constructor (props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (event) {
    event.preventDefault()
    if (this.props.isRefillMedicines) {
      if (
        this.props.pastMedicineState.selectedPatientId ===
        this.props.cartState.payload.patient_details.payload.patient_id
      ) {
        event.stopPropagation()
        this.props.addToCartHandler(this.props.itemDetails)
      } else {
        event.stopPropagation()
        this.props.onClickOfPatient(this.props.itemDetails)
      }
    } else {
      event.stopPropagation()
      this.props.addToCartHandler(this.props.itemDetails)
    }
  }

  render () {
    const { props } = this
    const { checkIfAlredyExistInCart } = props
    const city = this.props.checkPincodeState.payload.city
    const searchMedicinePageLinkHref = `${PRODUCT_DETAILS}?id=${props.itemDetails.slug}&location=${city}`
    const searchMedicinePageLinkAs = `${PRODUCT_DETAILS}/${props.itemDetails.slug}?location=${city}`

    return (
      <div className={!props.itemDetails.slug ? props.classes.disableLink : ''}>
        <Link
          prefetch
          href={searchMedicinePageLinkHref}
          as={searchMedicinePageLinkAs}
        >
          <div className={props.classes.medicineListContentWrapper}>
            <div>
              <ProductName
                variant={'body1'}
                name={props.itemDetails.name}
                customStyle={props.classes.customName}
                serviceType={props.itemDetails.available_service_type}
                deliveryOption={props.itemDetails.available_delivery_option}
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
                  props.itemDetails.pack_size &&
                    props.itemDetails.pack_size.name
                    ? props.itemDetails.pack_size.name
                    : props.itemDetails.pack_size
                }
              />
              {props.itemDetails.status !== ACTIVE_STATUS &&
                <ProductStatus
                  variant={'caption'}
                  status={props.itemDetails.status}
                />}
              {props.checkPincodeState.payload.pincode &&
                <Typography
                  gutterBottom
                  variant='caption'
                  component='h1'
                  className={props.classes.deliveryTat}
                >
                  Delivery by
                  {' '}
                  {props.checkPincodeState.payload.delivery_day}
                  {' '}
                  days
                </Typography>}
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
                {!checkIfAlredyExistInCart
                  ? <Button
                    variant='outlined'
                    size='small'
                    color='primary'
                    onClick={this.addToCart} // this is coming from HOC
                    label={'Add To Cart'}
                    className={props.classes.button}
                    disabled={props.itemDetails.status !== ACTIVE_STATUS}
                  />
                  : <AlreadyAdded />}
              </div>
            </div>
          </div>
        </Link>

      </div>
    )
  }
}

export default withStyles(styles)(MedicineListDetails)
