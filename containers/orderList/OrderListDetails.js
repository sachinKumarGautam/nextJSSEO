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
import { ORDER_DETAILS } from '../../routes/RouteConstant'
import {NO_ORDER_LIST} from '../messages/noDataMessage'

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
    marginBottom: theme.spacing.unit * 6
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

  render () {
    const { orderListState } = this.props
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
                  error={orderListState.errorState.error}
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
                    <OrderContent orderDetails={orderDetails} />
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
              this.props.orderListState.payload.length
                ? <div className={this.props.classes.buttonWrapper}>
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
                : null
            }
          </ActivityIndicator>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(OrderListDetails)
