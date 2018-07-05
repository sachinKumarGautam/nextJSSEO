import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import ProductDetails from './ProductDetails'
import ProductDetailsContent from './ProductDetailsContent'
import Router from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../../src/withRoot'

import {getPatientDetailsListLoading} from '../patientDetails/patientDetailsActions'

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
    if (query.id) {
      this.props.getProductDetailLoading(this.props.productDetailsState, query.id, query.location)
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
    const { pathname, query } = Router
    console.log(query)
    return (
      <div>
        {
          query.id
          ? <div>
            <BreadCrumbs />
            <section>
              <ProductDetails
                toggleHover={this.toggleHover.bind(this)}
                hover={this.state.hover}
                checkPincodeState={this.props.checkPincodeState}
                productDetailsState={this.props.productDetailsState}
                checkPincodeLoading={this.props.checkPincodeLoading}
              />
            </section>
            <section>
              <ProductDetailsContent
                hover={this.state.hover}
                productDetailsState={this.props.productDetailsState}

              />
            </section>
          </div>
          : null
        }
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
