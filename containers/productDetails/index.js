import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import ProductDetails from './ProductDetails'
import ProductDetailsContent from './ProductDetailsContent'
import Router from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../../src/withRoot'


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
  componentDidMount () {
    const { pathname, query } = Router
    console.log(Router, pathname, query)
    if (query.sku) {
      this.props.getProductDetailLoading(this.props.productDetailsState, query.sku)
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

function mapStateToProps (state) {
  return {
    patientDetailsState: state.patientDetailsState,
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getPatientDetailsListLoading,
        savePatientSelected
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProductDetailsWrapper))
