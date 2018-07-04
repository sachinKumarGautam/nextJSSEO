import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'

import withRoot from '../src/withRoot'

import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'

import OrderListWrapper from '../containers/orderList'

import {
  getOrderListDetailsLoading
} from '../containers/orderList/orderListActions'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class Orders extends React.Component {
  componentDidMount () {
    //Represents to get order list details with page size and size per page.
    this.props.actions.getOrderListDetailsLoading(
      this.props.orderListState,
      this.props.customerState.payload.id, // pass customer Id
      0, // page number
      2 // page size
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(Orders)))
