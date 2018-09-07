import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePageDetails from './HomePageDetails'
import {
  searchMedicineLoading
} from '../searchMedicine/searchMedicineAction'

import {
  incrementCartItemLoading
} from '../cartDetails/cartActions'

class HomePageWrapper extends Component {
  render () {
    return (
      <div>
        <HomePageDetails
          homePageState={this.props.homePageState}
          searchMedicineState={this.props.searchMedicineState}
          checkPincodeState={this.props.checkPincodeState}
          searchMedicineLoading={this.props.actions.searchMedicineLoading}
          addToCartHandler={this.props.addToCartHandler}
          cartState={this.props.cartState}
          loginState={this.props.loginState}
          incrementCartItemLoading={this.props.actions.incrementCartItemLoading}
        />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        searchMedicineLoading,
        incrementCartItemLoading
      },
      dispatch
    )
  }
}

function mapStateToProps (state) {
  return {
    homePageState: state.homePageState,
    searchMedicineState: state.searchMedicineState,
    checkPincodeState: state.checkPincodeState,
    cartState: state.cartState,
    loginState: state.loginState
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageWrapper)
