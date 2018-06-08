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
import PincodeDialog from './PincodeDialog'

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
    this.state = {
      open: false
    }

    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClickOpen () {
    this.setState({ open: true })
  };

  handleClose () {
    this.setState({ open: false })
  };

  render () {
    const { classes } = this.props

    return (
      <div>
        <Card elevation={'1'} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <div className={classes.priceWrapper}>
              <ProductPrice />
              <EstimatedPriceLabel />
            </div>
            <div className={classes.priceWrapper}>
              <StrokePrice />
              <ProductDiscount />
            </div>
            <DeliveryInfoWrapper />
            <div className={classes.cardActions}>
              <QuantityField />
              <Button
                variant='raised'
                size='small'
                color='primary'
                onClick={this.handleClickOpen}
                label={'Add To Cart'}
              />
            </div>
          </CardContent>
        </Card>
        <PincodeDialog
          handleClose={this.handleClose}
          open={this.state.open}
        />
      </div>
    )
  }
}

export default withStyles(styles)(ProductPriceDetails)
