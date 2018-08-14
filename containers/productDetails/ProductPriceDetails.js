import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import ProductPrice from '../../components/ProductPrice'
import EstimatedPriceLabel from '../../components/EstimatedPriceLabel'
import StrokePrice from '../../components/StrokePrice'
import ProductDiscount from '../../components/ProductDiscount'
import DeliveryInfoWrapper from '../../components/DeliveryInfoWrapper'
import QuantityField from '../../components/QuantityField'
import Button from '../../components/button'
import ProductPriceDetailsLoader
  from '../../components/activityIndicator/loader/ProductPriceDetailsLoader'
import ActivityIndicator from '../../components/activityIndicator'

/*
  Product price
  product discount
  delivery info
  add to cart button
*/

const styles = theme => ({
  card: {
    minWidth: theme.spacing.unit * 34.37
  },
  priceWrapper: {
    display: 'flex',
    alignItems: 'baseline'
  },
  cardContent: {
    paddingBottom: 0
  },
  cardActions: {
    display: 'flex',
    alignItems: 'baseline',
    marginTop: theme.spacing.unit * 2
  },
  label: {
    color: theme.palette.primary.main
  }
})

class ProductPriceDetails extends Component {
  constructor (props) {
    super(props)
    this.handleChangePincodeDialog = this.handleChangePincodeDialog.bind(this)
    this.onChangeQuantity = this.onChangeQuantity.bind(this)
  }

  onChangeQuantity (event) {
    // sub 1 from select quantity coz medicine is incremented by 1 already in api (epic)
    this.props.onChangeQuantity(
      this.props.productDetailsState,
      event.target.value - 1
    )
  }

  handleChangePincodeDialog () {
    this.props.openPincodeDialog(this.props.checkPincodeState, { isOpen: true })
  }

  render () {
    const { classes, productDetailsState } = this.props
    return (
      <div>
        <Card elevation={1} className={classes.card}>
          <ActivityIndicator
            isLoading={productDetailsState.isLoadingGetProductDetails}
            LoaderComp={<ProductPriceDetailsLoader />}
          >
            <CardContent className={classes.cardContent}>
              <div className={classes.priceWrapper}>
                <ProductPrice
                  variant={'headline'}
                  sellingPrice={productDetailsState.payload.selling_price}
                />
                <EstimatedPriceLabel estimatePriceText={'*Estimated Price'} />
              </div>
              <div className={classes.priceWrapper}>
                <StrokePrice
                  variant={'body1'}
                  mrp={productDetailsState.payload.selling_price}
                />
                <ProductDiscount
                  discount={productDetailsState.payload.discount}
                />
              </div>
              {this.props.checkPincodeState.payload.pincode &&
                <DeliveryInfoWrapper
                  checkPincodeState={this.props.checkPincodeState}
                  openPincodeDialog={this.handleChangePincodeDialog}
                />}
              <div className={classes.cardActions}>
                <QuantityField onChangeQuantity={this.onChangeQuantity} />
                <Button
                  variant='outlined'
                  size='small'
                  classes={{
                    label: classes.label
                  }}
                  color='primary'
                  onClick={this.props.addToCartHandler.bind(
                    this,
                    productDetailsState.payload
                  )} // it check first any selected city then add to cart
                  label={'Add To Cart'}
                />
              </div>
            </CardContent>
          </ActivityIndicator>
          {/* Insert loader comp here */}
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ProductPriceDetails)
