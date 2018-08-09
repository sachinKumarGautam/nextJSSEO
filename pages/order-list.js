// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Router from 'next/router'

// components
import withRoot from '../src/withRoot'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import OrderListWrapper from '../containers/orderList'

import {
  getOrderListDetailsLoading
} from '../containers/orderList/orderListActions'

// page title
import { orderList } from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  },
  wrapperStyle: {
    paddingBottom: theme.spacing.unit * 3,
    minHeight: theme.spacing.unit * 100
  }
})

class Orders extends React.Component {
  componentDidMount () {
    let customerId = this.props.customerState.payload.id
    const { query } = Router

    if (query.id === this.props.customerState.payload.id) {
      customerId = query.id
    }

    // Represents to get order list details with page size and size per page.
    this.props.actions.getOrderListDetailsLoading(
      this.props.orderListState,
      customerId, // pass customer Id
      0, // page number
      10 // page size
    )
  }

  render () {
    const { addToCartHandler } = this.props
    return (
      <div>
        <Header title={orderList.title} addToCartHandler={addToCartHandler} />
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <OrderListWrapper />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    orderListState: state.orderListState,
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getOrderListDetailsLoading
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(Orders))
)
