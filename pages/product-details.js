import React, { Component } from 'react'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Paper from '@material-ui/core/Paper'

import ProductDetailsWrapper from '../containers/productDetails'

// import fetch from 'isomorphic-fetch'

import {
  getAnonymousCartIdLoading
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

class ProductDetails extends Component {
  componentDidMount () {
    // get anonymous cart
    this.props.actions.getAnonymousCartIdLoading(
      this.props.cartState,
      'MWEB',
      100,
      ''
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div>
          <Paper className={this.props.classes.root} elevation={1}>
            <ProductDetailsWrapper />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    cartDetailsState: state.cartDetailsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getAnonymousCartIdLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(ProductDetails)))
