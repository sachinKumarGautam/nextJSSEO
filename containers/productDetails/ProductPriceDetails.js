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
import AddToCartButton from '../cartDetails/addToCartWrapper'
import Button from '../../components/button'

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
  }
})

class ProductPriceDetails extends Component {
  constructor (props) {
    super(props)
    this.handleOpenPincodeDialog = this.handleOpenPincodeDialog.bind(this)
    this.handleClosePincodeDialog = this.handleClosePincodeDialog.bind(this)
    this.onChangeQuantity = this.onChangeQuantity.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.state = {
      pincodeDialogOpen: false
    }
  }

  addToCart () {
    this.props.incrementCartItemLoading(this.props.cartState, this.props.productDetailsState.payload)
  }

  handleOpenPincodeDialog () {
    this.setState({
      pincodeDialogOpen: true
    })
  }

  onChangeQuantity (event) {
    // sub 1 from select quantity coz medicine is incremented by 1 already in api (epic)
    this.props.onChangeQuantity(this.props.productDetailsState, event.target.value - 1)
  }

  handleClosePincodeDialog () {
    this.setState({
      pincodeDialogOpen: false
    })
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <Card elevation={1} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <div className={classes.priceWrapper}>
              <ProductPrice
                variant={'headline'}
                sellingPrice={this.props.productDetailsState.payload.selling_price}
              />
              <EstimatedPriceLabel
                estimatePriceText={'*Estimated Price'}
              />
            </div>
            <div className={classes.priceWrapper}>
              <StrokePrice
                variant={'body1'}
                mrp={this.props.productDetailsState.payload.selling_price}
              />
              <ProductDiscount
                discount={this.props.productDetailsState.payload.discount}
              />
            </div>
            {
              this.props.checkPincodeState.payload.pincode &&
              <DeliveryInfoWrapper
                checkPincodeState={this.props.checkPincodeState}
                openPincodeDialog={this.handleOpenPincodeDialog}
              />
            }
            <div className={classes.cardActions}>
              <QuantityField
                onChangeQuantity={this.onChangeQuantity}
              />
              <Button
                variant='raised'
                size='small'
                color='primary'
                onClick={this.props.addToCartHandler.bind(this, this.props.productDetailsState.payload)} // it check first any selected city then add to cart
                label={'Add To Cart'}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ProductPriceDetails)
