import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import BackArrow from '@material-ui/icons/ArrowBack'

import Router from 'next/router'

import OrderContentWrapper from './OrderContentWrapper'

import {
  ORDER,
  THANK_YOU,
  ORDER_DETAILS
} from '../../routes/RouteConstant'

import {
  getReplacedString
} from '../../utils/replaceConstants'

import ActivityIndicator from '../../components/activityIndicator/index'
import ComponentSpecificError from '../../components/activityIndicator/error/ComponentSpecificError'

const styles = theme => ({
  card: {
    marginLeft: theme.spacing.unit * 6
  },
  cardContent: {
    paddingBottom: 0
  },
  title: {
    ...theme.typography.headline,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 1.25,
    margin: theme.spacing.unit * 2.5,
    fontSize: theme.spacing.unit * 1.75
  },
  buttonRoot: {
    border: `1px solid ${theme.palette.primary.main}`
  },
  buttonLabel: {
    ...theme.typography.body3,
    color: theme.palette.customGreen.green300,
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit * 3,
    float: 'right'
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    marginLeft: theme.spacing.unit * 5,
    color: theme.palette.customGrey.grey300,
    marginTop: theme.spacing.unit * 2,
    cursor: 'pointer'
  }
})

class OrderInformation extends Component {
  componentDidMount () {
    this.props.getOrderDetailsLoading(
      this.props.orderDetailsState,
      this.props.orderId
    )
  }

  componentDidUpdate (prevProps) {
    if (
      (this.props.cartState.isOrderSubmitted !==
      prevProps.cartState.isOrderSubmitted) &&
      this.props.cartState.isOrderSubmitted &&
      this.props.cartState.orderResponse.payload.order_type === 'COD'
    ) {
      this.props.resetCartState()
      const url = getReplacedString(THANK_YOU)
      const as = `${url}?payment-status=success`
      const href = `${url}?payment-status=success`
      Router.push(href, as)
    }

    if (
      (this.props.cartState.isRedirectToOrderDetailsPage !==
      prevProps.cartState.isRedirectToOrderDetailsPage) &&
      this.props.cartState.isRedirectToOrderDetailsPage
    ) {
      const url = getReplacedString(ORDER_DETAILS)
      Router.push(url)
    }
  }

  redirectToOrdersPage () {
    const url = getReplacedString(ORDER)

    Router.push(url)
  }

  tryAgain () {
    this.props.getOrderDetailsLoading(
      this.props.orderDetailsState,
      this.props.orderId
    )
  }

  retryPayment () {
    this.props.resetCartState()
    const url = getReplacedString(THANK_YOU)
    const as = `${url}?payment-status=retry`
    const href = `${url}?payment-status=retry`
    Router.push(href, as)
  }

  placeOrder () {
    const paymentChannel = 'COD'

    this.props.paymentInitiateLoading(
      this.props.cartState,
      this.props.orderId,
      paymentChannel
    )
  }

  render () {
    return (
      <div>
        <Card elevation={'1'} className={this.props.classes.card}>
          <CardContent className={this.props.classes.cardContent}>
            <ActivityIndicator
              isError={this.props.orderDetailsState.errorState.isError}
              ErrorComp={
                <ComponentSpecificError
                  error={this.props.orderDetailsState.errorState.error}
                  tryAgain={this.tryAgain.bind(this)}
                />
              }
            >
              <div className={this.props.classes.buttonWrapper}>
                <BackArrow
                  classes={{ root: this.props.classes.image }}
                  onClick={this.redirectToOrdersPage.bind(this)}
                />
                <Typography
                  gutterBottom
                  variant='headline'
                  component='h1'
                  className={this.props.classes.title}
                >
                  Go to My Orders
                </Typography>
              </div>
              <OrderContentWrapper
                cartState={this.props.cartState}
                orderDetailsState={this.props.orderDetailsState}
                retryPayment={this.retryPayment.bind(this)}
                placeOrder={this.placeOrder.bind(this)}
              />
            </ActivityIndicator>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(OrderInformation)
