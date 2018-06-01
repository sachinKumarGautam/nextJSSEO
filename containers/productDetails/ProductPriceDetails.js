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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

class ProductPriceDetails extends Component {
  render () {
    const { classes } = this.props
    const bull = <span className={classes.bullet}>•</span>

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant='title' component='h2'>
              Rs. 38.00
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              *Estimated Price
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              Rs. 43.00, 5% discount on MRP
            </Typography>
            <Typography component='p'>
              well meaning and kindly.<br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='raised' size='small' color='primary'>Add To Cart</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(ProductPriceDetails)
