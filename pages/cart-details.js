import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import CartDetailsWrapper from '../containers/cartDetails'

import {
  getCartDetailsLoading,
  incrementCartItemLoading,
  decrementCartItemLoading,
  deleteCartItemLoading
} from '../containers/cartDetails/cartActions'

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

class CartDetails extends React.Component {
  componentDidMount() {
    this.props.actions.getCartDetailsLoading(
      this.props.cartState,
      '680a75c5-7965-4f9d-ab2f-14cb0ce16c2c'
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div className={this.props.classes.root}>
          <CartDetailsWrapper
            cartState={this.props.cartState}
            incrementCartItemLoading={this.props.actions.incrementCartItemLoading}
            decrementCartItemLoading={this.props.actions.decrementCartItemLoading}
            deleteCartItemLoading={this.props.actions.deleteCartItemLoading}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getCartDetailsLoading,
        incrementCartItemLoading,
        decrementCartItemLoading,
        deleteCartItemLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(CartDetails)))
