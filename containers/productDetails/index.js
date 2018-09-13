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

import { storage } from '../../services/firebase'

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
      publishedContent: []
    }
  }

  componentDidMount () {
    this.newsRef = storage.collection('news')

    this.getRecentlyPublishedContent()
  }

  getRecentlyPublishedContent () {
    this.queryLimitedData()
  }

  queryLimitedData () {
    this.newsRef
      .where('is_enabled', '==', true)
      .where('is_published', '==', true)
      .orderBy('created_at', 'desc')
      .limit(3)
      .onSnapshot((querySnapshot) => {
        let payload = []

        querySnapshot.forEach(function (doc) {
          let docObj = doc.data()

          docObj = {
            ...docObj,
            doc_id: doc.id,
            isLoading: false
          }

          payload = [
            ...payload,
            docObj
          ]
        })
        this.saveRecentlyPublishedContent(payload)
      })
  }

  saveRecentlyPublishedContent (payload) {
    const modifiedPayload = payload.map(item => {
      const body = item.body.split(' ').slice(0, 12).join(' ') + ' ...'
      return {
        ...item,
        body: body
      }
    })

    this.setState({
      publishedContent: modifiedPayload
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
