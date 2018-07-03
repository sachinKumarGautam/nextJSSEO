import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import ProductDetails from './ProductDetails'
import ProductDetailsContent from './ProductDetailsContent'

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
    return (
      <div>
        <BreadCrumbs />
        <section>
          <ProductDetails
            toggleHover={this.toggleHover.bind(this)}
            hover={this.state.hover}
            checkPincodeState={this.props.checkPincodeState}
            checkPincodeLoading={this.props.checkPincodeLoading}
          />
        </section>
        <section>
          <ProductDetailsContent
            hover={this.state.hover}
          />
        </section>
      </div>
    )
  }
}

export default ProductDetailsWrapper
