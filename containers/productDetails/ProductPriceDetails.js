import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '../../components/button'
import ProductPrice from '../../components/ProductPrice'
import EstimatedPriceLabel from '../../components/EstimatedPriceLabel'
import StrokePrice from '../../components/StrokePrice'
import ProductDiscount from '../../components/ProductDiscount'
import DeliveryInfoWrapper from '../../components/DeliveryInfoWrapper'
import QuantityField from '../../components/QuantityField'
import AddToCartButton from '../cartDetails/addToCartWrapper'

/*
  Product price
  product discount
  delivery info
  add to cart button
*/

const styles = theme => ({
  card: {
    minWidth: 275
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
    alignItems: 'baseline'
  }
})

class ProductPriceDetails extends Component {
  constructor (props) {
    super(props)
  }

  addToCart() {
    //dummy func 
    console.log('sachin is awesome')
  }

  render () {
    const { classes } = this.props

    return (
      <div>
        <Card elevation={1} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <div className={classes.priceWrapper}>
              <ProductPrice variant={'headline'} />
              <EstimatedPriceLabel
                estimatePriceText={'*Estimated Price'}
              />
            </div>
            <div className={classes.priceWrapper}>
              <StrokePrice variant={'body1'} />
              <ProductDiscount />
            </div>
            <DeliveryInfoWrapper />
            <div className={classes.cardActions}>
              <QuantityField />
              <AddToCartButton
                variant='raised'
                size='small'
                color='primary'
                onClick={this.addToCart.bind(this)}
                label={'Add To Cart'}
                checkPincodeState={this.props.checkPincodeState}
                checkPincodeLoading={this.props.checkPincodeLoading}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ProductPriceDetails)
