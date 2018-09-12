import React, { Component } from 'react'

import SearchSection from './SearchSection'
import DiscountDetailSection from './DiscountDetailSection'
import RefillMedicineSection from './RefillMedicineSection'
import HealthManagementSection from './HealthManagementSection'
import MembershipCardDetail from './MembershipCardDetail'
import ArticleSection from './ArticleSection'
import Testimonal from './Testimonal'
import ActivityIndicator from '../../components/activityIndicator/index'
import SnackbarErrorMessage
  from '../../components/activityIndicator/error/SnackbarErrorMessage'

class HomePageWrapper extends Component {
  resetState () {
    this.props.resetCartItemErrorState()
    this.props.resetUploadPrescriptionError()
  }
  render () {
    return (
      <div>
        <ActivityIndicator
          isError={
            this.props.cartState.prescriptionDetails.errorState.isError ||
          this.props.cartState.payload.cart_items.errorState.isError
          }
          ErrorComp={
            <SnackbarErrorMessage
              error={
                this.props.cartState.prescriptionDetails.errorState.error ||
              this.props.cartState.payload.cart_items.errorState.error
              }
              resetState={this.resetState.bind(this)}
            />
          }
          bottomError
        >
          <SearchSection
            searchMedicineState={this.props.searchMedicineState}
            checkPincodeState={this.props.checkPincodeState}
            searchMedicineLoading={this.props.searchMedicineLoading}
            addToCartHandler={this.props.addToCartHandler}
            cartState={this.props.cartState}
            uploadPrescriptionLoading={this.props.uploadPrescriptionLoading}
          />
          <DiscountDetailSection />
          <RefillMedicineSection loginState={this.props.loginState} />
          <HealthManagementSection />
          <MembershipCardDetail
            incrementCartItemLoading={this.props.incrementCartItemLoading}
            cartState={this.props.cartState}
          />
          <ArticleSection />
          <Testimonal homePageState={this.props.homePageState} />
        </ActivityIndicator>
      </div>
    )
  }
}

export default HomePageWrapper
