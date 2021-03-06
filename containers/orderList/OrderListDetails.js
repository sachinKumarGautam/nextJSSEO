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
import OrderListsLoader
  from '../../components/activityIndicator/loader/orderDetailsLoader/OrderListsLoader'
import ActivityIndicator from '../../components/activityIndicator/index'
import ComponentSpecificError from '../../components/activityIndicator/error/ComponentSpecificError'
import SnackbarErrorMessage from '../../components/activityIndicator/error/SnackbarErrorMessage'

import { getReplacedString } from '../../utils/replaceConstants'
import {
  ORDER_DETAILS,
  THANK_YOU
} from '../../routes/RouteConstant'
import {NO_ORDER_LIST} from '../messages/noDataMessage'

import {
  COD
} from '../../components/constants/paymentConstants'

import Router from 'next/router'

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
    marginBottom: theme.spacing.unit * 7
  },
  buttonRoot: {
    backgroundColor: theme.palette.common.white,
    border: `0.5px solid ${theme.palette.customGrey.grey200}`
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
  noContent: {
    color: theme.palette.customGrey.grey500,
    textAlign: 'center',
    marginTop: theme.spacing.unit * 1.25,
    fontWeight: theme.typography.fontWeightBold
  }
})

class OrderListDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 0,
      isShowMore: false
    }
  }

  componentDidUpdate (prevProps) {
    if (
      (this.props.cartState.isOrderSubmitted !==
      prevProps.cartState.isOrderSubmitted) &&
      this.props.cartState.isOrderSubmitted &&
      this.props.cartState.orderResponse.payload.order_type === COD
    ) {
      this.props.resetCartState()
      const url = getReplacedString(THANK_YOU)
      const as = `${url}?payment-status=success`
      const href = `${url}?payment-status=success`
      Router.push(href, as)
    }
  }

  onClickOfShowMore () {
    this.props.getOrderListDetailsLoading(
      this.props.orderListState,
      this.props.customerState.payload.id, // pass customer Id
      this.state.page + 1, // page number
      10 // page size
    )

    this.setState({
      page: this.state.page + 1,
      isShowMore: true
    })
  }

  tryAgain () {
    this.props.getOrderListDetailsLoading(
      this.props.orderListState,
      this.props.customerState.payload.id, // pass customer Id
      0, // page number
      10 // page size
    )

    this.setState({
      isShowMore: false
    })
  }

  redirectToOrderDeatails (orderId) {
    const mappedObject = {
      order_id: orderId
    }

    const url = getReplacedString(ORDER_DETAILS, mappedObject)
    Router.push(url)
  }

  placeOrder (orderId) {
    const paymentChannel = COD

    this.props.paymentInitiateLoading(
      this.props.cartState,
      orderId,
      paymentChannel
    )
  }

  retryPayment (orderId) {
    const mappedObject = {
      order_id: orderId
    }

    this.props.resetCartState()
    const url = getReplacedString(THANK_YOU, mappedObject)
    const as = `${url}?payment-status=retry`
    const href = `${url}?payment-status=retry`
    Router.push(href, as)
  }

  render () {
    const { orderListState } = this.props
    const orderListPagesCondition = (this.state.page + 1) !== this.props.orderListState.totalPages

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
          <ActivityIndicator
            isLoading={orderListState.isLoading}
            LoaderComp={<OrderListsLoader />}
            bottomLoader={this.state.isShowMore}
            isError={orderListState.errorState.isError}
            ErrorComp={
              this.state.isShowMore
                ? <SnackbarErrorMessage
                  error={this.props.globalErrorState}
                />
                : <ComponentSpecificError
                  error={orderListState.errorState.error}
                  tryAgain={this.tryAgain.bind(this)}
                />
            }
            bottomError={this.state.isShowMore}
          >
            {this.props.orderListState.payload.length
              ? this.props.orderListState.payload.map(orderDetails => {
                return (
                  <div
                    className={this.props.classes.orderDetailWrapper}
                  >
                    <OrderHeader
                      orderDetails={orderDetails}
                      redirectToOrderDeatails={this.redirectToOrderDeatails.bind(this, orderDetails.id)}
                    />
                    <Divider />
                    <OrderContent
                      orderDetails={orderDetails}
                      placeOrder={this.placeOrder.bind(this, orderDetails.id)}
                      retryPayment={this.retryPayment.bind(this, orderDetails.id)}
                    />
                    <Divider />
                    <OrderFooter orderDetails={orderDetails} />
                  </div>
                )
              })
              : <Typography
                gutterBottom
                variant='body2'
                className={this.props.classes.noContent}
              >
                {NO_ORDER_LIST}
              </Typography>
            }
            {
              this.props.orderListState.payload.length &&
              orderListPagesCondition
                ? (
                  <div className={this.props.classes.buttonWrapper}>
                    <Button
                      size='medium'
                      loaderColor={'primary'}
                      // isloading={orderListState.isLoading}
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
                ) : null
            }
          </ActivityIndicator>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(OrderListDetails)
