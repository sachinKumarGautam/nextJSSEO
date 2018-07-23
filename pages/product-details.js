import React from 'react'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'
import Router from 'next/router'

import Head from 'next/head'

import ProductDetailsWrapper from '../containers/productDetails'

import { getProductDetailLoading, onChangeQuantity } from '../containers/productDetails/productDetailsActions'

import {
  getAnonymousCartIdLoading,
  incrementCartItemLoading
} from '../containers/cartDetails/cartActions'

import {checkPincodeLoading} from '../containers/location/pincode/pincodeAction'

import {
  productDetail
} from '../components/constants/PageTitle'

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
  state = {
    id: ''
  }
  static getInitialProps ({query}) {
    return query
  }

  componentDidMount () {
    const { query } = Router
    if (Router.query.id) {
      this.props.actions.getProductDetailLoading(
        this.props.productDetailsState,
        query.id,
        query.location
      )
    }
    this.setState({
      id: Router.query.id
    })
  }

  componentDidUpdate (prevProps) {
    const { query } = Router
    if (prevProps.id !== Router.query.id) {
      this.props.actions.getProductDetailLoading(
        this.props.productDetailsState,
        query.id,
        query.location
      )
    }
  }

  render () {
    const {
      classes,
      actions,
      checkPincodeState,
      cartState
    } = this.props
    const { query } = Router

    return (
      <div>
        <Head>
          <title>{productDetail.title}</title>
        </Head>
        <Header />
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={classes.root} elevation={1}>
            {
              query.id && query.id !== 'undefined'
                ? <ProductDetailsWrapper
                  checkPincodeState={checkPincodeState}
                  getProductDetailLoading={actions.getProductDetailLoading}
                  checkPincodeLoading={actions.checkPincodeLoading}
                  incrementCartItemLoading={actions.incrementCartItemLoading}
                  cartState={cartState}
                  onChangeQuantity={actions.onChangeQuantity}
                />
                : 'Page not found'
            }
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
        checkPincodeLoading,
        incrementCartItemLoading,
        onChangeQuantity
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(ProductDetails)))
