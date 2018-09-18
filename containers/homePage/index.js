import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePageDetails from './HomePageDetails'
import {
  searchMedicineLoading,
  resetSearchMedicineState
} from '../searchMedicine/searchMedicineAction'

import {
  incrementCartItemLoading,
  uploadPrescriptionLoading,
  resetCartItemErrorState,
  resetUploadPrescriptionError
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
          uploadPrescriptionLoading={this.props.actions.uploadPrescriptionLoading}
          resetCartItemErrorState={this.props.actions.resetCartItemErrorState}
          resetUploadPrescriptionError={this.props.actions.resetUploadPrescriptionError}
          resetSearchMedicineState={this.props.actions.resetSearchMedicineState}
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
        incrementCartItemLoading,
        uploadPrescriptionLoading,
        resetCartItemErrorState,
        resetUploadPrescriptionError,
        resetSearchMedicineState
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
