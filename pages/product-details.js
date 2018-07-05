import React, { Component } from 'react'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import ProductDetailsWrapper from '../containers/productDetails'

import { getProductDetailLoading } from '../containers/productDetails/productDetailsActions'

// import fetch from 'isomorphic-fetch'

import {
  getAnonymousCartIdLoading
} from '../containers/cartDetails/cartActions'

import {checkPincodeLoading} from '../containers/location/pincode/pincodeAction'

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

class ProductDetails extends React.Component {
  // static getInitialProps (props) {
  //   const { query } = props
  //   console.log(props)
  //   return query
  // }

  static getInitialProps ({query}) {
    return query
  }

  componentDidMount () {
    // this.props.actions.getProductDetailLoading(this.props.productDetailsState, 'I0008')
    // get anonymous cart
    this.props.actions.getAnonymousCartIdLoading(
      this.props.cartState,
      'MWEB',
      100,
      ''
    )
  }

  render () {
    const {
      classes,
      actions,
      checkPincodeState
    } = this.props

    return (
      <div>
        <Header />
        <div>
          <Paper className={classes.root} elevation={1}>
            <ProductDetailsWrapper
              checkPincodeState={checkPincodeState}
              getProductDetailLoading={actions.getProductDetailLoading}
              checkPincodeLoading={actions.checkPincodeLoading}
            />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

// ProductDetails.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }

function mapStateToProps (state) {
  return {
    productDetailsState: state.productDetailsState,
    cartState: state.cartState,
    checkPincodeState: state.checkPincodeState,
    cartDetailsState: state.cartDetailsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getProductDetailLoading,
        getAnonymousCartIdLoading,
        checkPincodeLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(ProductDetails)))
