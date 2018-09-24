import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import ProductDetails from './ProductDetails'
import ProductDetailsContent from './ProductDetailsContent'
// import Router from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import { withStyles } from '@material-ui/core/styles'
// import withRoot from '../../src/withRoot'

import {
  openPincodeDialog
} from '../../containers/location/pincode/pincodeAction'

import queryLimitedData from '../../utils/queryLimitedData'

/*
  bread crumbs
  Product Details
  Product Details content
*/

class ProductDetailsWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: {},
      showSnackBar: false,
      publishedContent: []
    }

    this.saveRecentlyPublishedContent = this.saveRecentlyPublishedContent.bind(
      this
    )
  }

  componentDidMount () {
    this.getRecentlyPublishedContent()
  }

  getRecentlyPublishedContent () {
    queryLimitedData(this.saveRecentlyPublishedContent)
  }

  saveRecentlyPublishedContent (payload) {
    this.setState({
      publishedContent: payload
    })
  }

  toggleHover (item) {
    this.setState(prevState => ({
      hover: {
        [item]: !prevState.hover[item]
      }
    }))
  }

  render () {
    // const { query } = Router
    return (
      <div>
        <BreadCrumbs />
        <section>
          <ProductDetails
            toggleHover={this.toggleHover.bind(this)}
            hover={this.state.hover}
            openPincodeDialog={this.props.actions.openPincodeDialog}
            checkPincodeState={this.props.checkPincodeState}
            productDetailsState={this.props.productDetailsState}
            onChangeQuantity={this.props.onChangeQuantity}
            addToCartHandler={this.props.addToCartHandler}
          />
        </section>
        <section>
          <ProductDetailsContent
            hover={this.state.hover}
            productDetailsState={this.props.productDetailsState}
            publishedContent={this.state.publishedContent}
          />
        </section>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    checkPincodeState: state.checkPincodeState,
    productDetailsState: state.productDetailsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ openPincodeDialog }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductDetailsWrapper
)
