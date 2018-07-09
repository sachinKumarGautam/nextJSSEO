import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'

import OrderConfirmation from './OrderConfirmation'

class ThankyouWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <section>
          <OrderConfirmation/>
        </section>
      </div>
    )
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

function mapStateToProps (state) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankyouWrapper)
