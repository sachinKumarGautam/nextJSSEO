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
import Button from './button/Button'
import MultipleMedicineLoader
  from './activityIndicator/loader/medicineListLoader/MultipleMedicineLoader'
import ActivityIndicator from './activityIndicator'

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
      ...theme.typography.body3
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
    },
    deliveryTat: {
      ...theme.typography.body3,
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    cursor: {
      cursor: 'pointer'
    }
  }
}

class MedicineListDetails extends React.Component {
  constructor (props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (event) {
    event.stopPropagation()
    this.props.addToCartHandler(this.props.itemDetails)
  }

  render () {
    const { props } = this

    const city = props.checkPincodeState.payload.city
    return (
<<<<<<< HEAD
      <ActivityIndicator
        isLoading={props.isLoading}
        LoaderComp={<MultipleMedicineLoader />}
      >
=======
      <div className={props.classes.medicineListContentWrapper}>
        <Link
          prefetch
          href={`${PRODUCT_DETAILS}?id=${props.itemDetails.slug}&location=${city}`}
          as={`${PRODUCT_DETAILS}/${props.itemDetails.slug}?location=${city}`}
        >
          <div
            onClick={this.props.onSelectItem}
            className={props.classes.cursor}
          >
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
                props.itemDetails.pack_size && props.itemDetails.pack_size.name
                  ? props.itemDetails.pack_size.name
                  : props.itemDetails.pack_size
              }
            />
            {
              props.checkPincodeState.payload.pincode &&
              <Typography
                gutterBottom
                variant='caption'
                component='h1'
                className={props.classes.deliveryTat}
              >
                Delivery by {props.checkPincodeState.payload.delivery_day} days
              </Typography>
            }
          </div>
        </Link>
>>>>>>> f884be6568a5ed2bf3f8832454cb7c78d8b97559
        <div>
          <div className={props.classes.medicineListContentWrapper}>
            <Link
              prefetch
              href={`${PRODUCT_DETAILS}?id=${props.itemDetails.slug}&location=${city}`}
              as={`${PRODUCT_DETAILS}/${props.itemDetails.slug}?location=${city}`}
            >
              <div
                onClick={this.props.onSelectItem}
                className={props.classes.cursor}
              >
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
                    props.itemDetails.pack_size &&
                      props.itemDetails.pack_size.name
                      ? props.itemDetails.pack_size.name
                      : props.itemDetails.pack_size
                  }
                />
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
                </Typography>
              </div>
            </Link>
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
                <Button
                  variant='outlined'
                  classes={{
                    root: props.classes.buttonRoot,
                    label: props.classes.buttonLabel
                  }}
                  size='small'
                  color='primary'
                  onClick={this.addToCart} // this is coming from HOC
                  label={'Add To Cart'}
                />
              </div>
            </div>
          </div>
        </div>
      </ActivityIndicator>
    )
  }
}

export default withStyles(styles)(MedicineListDetails)
