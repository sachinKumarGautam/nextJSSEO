import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import OrderHeader from './OrderHeader'
import OrderContent from './OrderContent'
import OrderFooter from './OrderFooter'
import Button from '../../components/button'

const orderList= [
  {
    user_name: 'Jyoti Arora',
    status: 'Payment Pending',
    payment: 'failed',
    order_status: 'cancel'
  },
  {
    user_name: 'Ayushi Khetan',
    status: 'Delivered',
    payment: 'sucess',
    order_status: 'return'
  }
]

const styles = theme => ({
  card: {
    marginLeft: theme.spacing.unit * 6
  },
  cardContent: {
    paddingBottom: 0,

  },
  orderDetailWrapper: {
    border: `0.5px solid ${theme.palette.customGrey.grey250}`,
    borderRadius: theme.spacing.unit / 2,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  },
  title: {
    ...theme.typography.headline,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 6
  },
  buttonRoot: {
    backgroundColor: '#ffffff'
  },
  buttonLabel: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey200
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    marginBottom: theme.spacing.unit * 14
  },
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
          {
            orderList.map((item) => {
              return (
                <div className={this.props.classes.orderDetailWrapper}>
                  <OrderHeader/>
                  <Divider/>
                  <OrderContent
                    orderList={item}
                  />
                  <Divider/>
                  <OrderFooter/>
                </div>
              )
            })
          }
          <div className={this.props.classes.buttonWrapper}>
            <Button
              size='medium'
              variant='outlined'
              className={this.props.classes.button}
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              onClick={this.handleClickOpen}
              label={'Show more'}
            />
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(OrderListDetails)
