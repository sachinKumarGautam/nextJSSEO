import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import ProductDetails from './ProductDetails'
import ProductDetailsContent from './ProductDetailsContent'
// import Router from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import { withStyles } from '@material-ui/core/styles'
// import withRoot from '../../src/withRoot'

/*
  bread crumbs
  Product Details
  Product Details content
*/

class ProductDetailsWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: {}
    }
  }

  toggleHover (item) {
    this.setState((prevState) => ({
      hover: {
        [item]: !prevState.hover[item]
      }
    })
    )
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
            checkPincodeState={this.props.checkPincodeState}
            productDetailsState={this.props.productDetailsState}
            checkPincodeLoading={this.props.checkPincodeLoading}
            incrementCartItemLoading={this.props.incrementCartItemLoading}
            cartState={this.props.cartState}
            onChangeQuantity={this.props.onChangeQuantity}
            addToCartHandler={this.props.addToCartHandler}
          />
        </section>
        <section>
          <ProductDetailsContent
            hover={this.state.hover}
            productDetailsState={this.props.productDetailsState}
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
    actions: bindActionCreators(
      {
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsWrapper)
