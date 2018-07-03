import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import OrderHeader from './OrderHeader'
import OrderContent from './OrderContent'
import OrderFooter from './OrderFooter'
import Button from '../../components/button'

<<<<<<< HEAD
=======
const orderList = [
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

>>>>>>> 06b63f99b00a52cd71af51cea6b7954f0b45e5c7
const styles = theme => ({
  card: {
    marginLeft: theme.spacing.unit * 6
  },
  cardContent: {
    paddingBottom: 0

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
  }
})

class OrderListDetails extends Component {
  constructor(props) {
    super(props)
    this.state ={
      page: 0
    }
  }

  onClickOfShowMore() {
    this.props.getOrderListDetailsLoading(
      this.props.orderListState,
      100183363, // pass customer Id
      this.state.page + 1, // page number
      2 // page size
    )

    this.setState({
      page: this.state.page + 1
    })
  }

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
            this.props.orderListState.payload.map((orderDetails) => {
              return (
                <div className={this.props.classes.orderDetailWrapper}>
<<<<<<< HEAD
                  <OrderHeader
                    orderDetails={orderDetails}
                  />
                  <Divider/>
=======
                  <OrderHeader />
                  <Divider />
>>>>>>> 06b63f99b00a52cd71af51cea6b7954f0b45e5c7
                  <OrderContent
                    orderDetails={orderDetails}
                  />
<<<<<<< HEAD
                  <Divider/>
                  <OrderFooter
                    orderDetails={orderDetails}
                  />
=======
                  <Divider />
                  <OrderFooter />
>>>>>>> 06b63f99b00a52cd71af51cea6b7954f0b45e5c7
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
              onClick={this.onClickOfShowMore.bind(this)}
              label={'Show more'}
            />
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(OrderListDetails)
