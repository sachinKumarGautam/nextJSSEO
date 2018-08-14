// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Router from 'next/router'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import ProductDetailsWrapper from '../containers/productDetails'

import {
  getProductDetailLoading,
  onChangeQuantity
} from '../containers/productDetails/productDetailsActions'

import {
  getAnonymousCartIdLoading
} from '../containers/cartDetails/cartActions'

// page title
import { productDetail } from '../components/constants/PageTitle'

//activity indicatoe
import ActivityIndicator from '../components/activityIndicator'
import FullPageError from '../components/activityIndicator/error/FullPageError'

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

class ProductDetails extends React.Component {
  static getInitialProps ({ query }) {
    return query
  }

  componentDidMount () {
    const { query } = Router
    if (query.product_id) {
      this.props.actions.getProductDetailLoading(
        this.props.productDetailsState,
        query.product_id,
        query.location
      )
    }
  }

  componentDidUpdate (prevProps) {
    const { query } = Router
    if (prevProps.product_id !== query.product_id) {
      this.props.actions.getProductDetailLoading(
        this.props.productDetailsState,
        query.product_id,
        query.location
      )
    }
  }

  tryAgain() {
    const { query } = Router
    this.props.actions.getProductDetailLoading(
      this.props.productDetailsState,
      query.product_id,
      query.location
    )
  }

  render () {
    const { classes, actions, checkPincodeState, addToCartHandler } = this.props
    const { query } = Router
    return (
      <Layout
        title={productDetail.title}
        addToCartHandler={addToCartHandler}
      >
        <div className={this.props.classes.wrapperStyle}>
          <ActivityIndicator
            isError={this.props.productDetailsState.errorStateGetProductDetails.isError}
            ErrorComp={
              <FullPageError
                error={this.props.productDetailsState.errorStateGetProductDetails.error}
                tryAgain={this.tryAgain.bind(this)}
              />
            }
          >
            <Paper className={classes.root} elevation={1}>
              {query.product_id && query.product_id !== 'undefined'
                ? <ProductDetailsWrapper
                  checkPincodeState={checkPincodeState}
                  getProductDetailLoading={actions.getProductDetailLoading}
                  addToCartHandler={addToCartHandler}
                  onChangeQuantity={actions.onChangeQuantity}
                />
                : 'Page not found'}
            </Paper>
          </ActivityIndicator>
        </div>
      </Layout>
    )
  }
}

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
        onChangeQuantity
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(ProductDetails))
)
