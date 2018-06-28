import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import OrderHeader from './OrderHeader'

const styles = theme => ({
  card: {
    minWidth: theme.spacing.unit * 86,
    marginLeft: theme.spacing.unit * 5
  },
  cardContent: {
    paddingBottom: 0,

  },
  orderDetailWrapper: {
    border: `0.5px solid ${theme.palette.customGrey.grey250}`,
    borderRadius: theme.spacing.unit / 2
  },
  title: {
    ...theme.typography.headline,
    color: theme.palette.customGrey.grey500
  }
})

class OrderListDetails extends Component {
  render () {
    return (
      <Card elevation={'1'} className={this.props.classes.card}>
        <CardContent className={this.props.classes.cardContent}>
          <Typography
            gutterBottom
            variant='title'
            component='h1'
            className={this.props.classes.title}
          >
            My Orders
          </Typography>
          <div className={this.props.classes.orderDetailWrapper}>
            <OrderHeader/>
            <Divider/>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(OrderListDetails)
