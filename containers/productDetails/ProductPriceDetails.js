import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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
  price: {
    color: theme.palette.customGrey.grey600,
    marginRight: theme.spacing.unit * 2
  },
  estimatedPrice: {
    color: theme.palette.customGrey.grey200
  },
  strokePrice: {
    color: theme.palette.customGrey.grey200,
    marginRight: theme.spacing.unit
  },
  discount: {
    color: theme.palette.customYellow.yellow400
  },
  cardActions: {
    marginBottom: theme.spacing.unit * 4
  }
})

class ProductPriceDetails extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.priceWrapper}>
              <Typography variant='headline' component='h2' className={classes.price}>
                Rs. 38.00
              </Typography>
              <Typography className={classes.estimatedPrice} variant='caption'>
                *Estimated Price
              </Typography>
            </div>
            <div className={classes.priceWrapper}>
              <Typography variant='body1'>
                <s className={classes.strokePrice}>Rs. 43.00</s>
              </Typography>
              <Typography variant='body1' className={classes.discount}>
                5% discount on MRP
              </Typography>
            </div>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button variant='raised' size='small' color='primary'>Add To Cart</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ProductPriceDetails)
