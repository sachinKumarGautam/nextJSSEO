import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import ProductDetails from './ProductDetails'
import ProductDetailsContent from './ProductDetailsContent'
import Router from 'next/router'

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
    
  componentDidMount () {
    const { pathname, query } = Router
    if (query.id) {
      this.props.getProductDetailLoading(this.props.productDetailsState, query.id , query.location)
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
        { query.id 
          ?
          <React.Fragment>
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
          </React.Fragment>
          : null
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    patientDetailsState: state.patientDetailsState
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
)(withRoot(withStyles(styles)(ProductDetailsWrapper)))
