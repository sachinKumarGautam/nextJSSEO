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

// activity indicatoe
import ActivityIndicator from '../components/activityIndicator'
import FullPageError from '../components/activityIndicator/error/FullPageError'
import PageNotFound from '../components/activityIndicator/error/PageNotFound'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 7.5,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md
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
  constructor (props) {
    super(props)
    this.getErrorComponent = this.getErrorComponent.bind(this)
    this.getProductDetail = this.getProductDetail.bind(this)
  }
  static getInitialProps ({ query }) {
    return query
  }

  getProductDetail () {
    const { query } = Router
    if (query.product_id) {
      this.props.actions.getProductDetailLoading(
        this.props.productDetailsState,
        query.product_id,
        query.location
      )
    }
  }

  componentDidMount () {
    this.getProductDetail()
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

  tryAgain () {
    this.getProductDetail()
  }

  getErrorComponent () {
    if (
      this.props.productDetailsState.errorStateGetProductDetails.error &&
      this.props.productDetailsState.errorStateGetProductDetails.error.response &&
      this.props.productDetailsState.errorStateGetProductDetails.error.response.statusCode === 404
    ) {
      return (
        <PageNotFound />
      )
    } else {
      return (
        <FullPageError
          error={this.props.productDetailsState.errorStateGetProductDetails.error}
          tryAgain={this.tryAgain.bind(this)}
        />
      )
    }
  }

  render () {
    const { classes, actions, checkPincodeState, addToCartHandler, product_id } = this.props
    return (
      <Layout
        title={productDetail.title}
        addToCartHandler={addToCartHandler}
      >
        <div className={this.props.classes.wrapperStyle}>
          <ActivityIndicator
            isError={this.props.productDetailsState.errorStateGetProductDetails.isError}
            ErrorComp={this.getErrorComponent()}
          >
            {product_id && product_id !== 'undefined' &&
              <Paper className={classes.root} elevation={1}>
                <ProductDetailsWrapper
                  checkPincodeState={checkPincodeState}
                  getProductDetailLoading={actions.getProductDetailLoading}
                  addToCartHandler={addToCartHandler}
                  onChangeQuantity={actions.onChangeQuantity}
                />
              </Paper>
            }
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
