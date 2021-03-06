import React, { Component } from 'react'

import SearchSection from './SearchSection'
import DiscountDetailSection from './DiscountDetailSection'
import RefillMedicineSection from './RefillMedicineSection'
import HealthManagementSection from './HealthManagementSection'
import MembershipCardDetail from './MembershipCardDetail'
import ArticleSection from './ArticleSection'
import Testimonal from './Testimonal'
import ActivityIndicator from '../../components/activityIndicator/index'
import SnackbarErrorMessage from '../../components/activityIndicator/error/SnackbarErrorMessage'

import queryLimitedData from '../../utils/queryLimitedData'
import HomePageContent from './HomePageContent'

class HomePageWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      publishedContent: []
    }

    this.saveRecentlyPublishedContent = this.saveRecentlyPublishedContent.bind(this)
  }

  resetState () {
    this.props.resetCartItemErrorState()
    this.props.resetUploadPrescriptionError()
  }

  componentDidMount () {
    const element = document.getElementsByClassName('slick-arrow')

    if (element.length) {
      element[0].className = 'slick-arrow'
      element[0].style.display = 'inline-block'
    }

    this.getRecentlyPublishedContent()
  }

  getRecentlyPublishedContent () {
    queryLimitedData(
      this.saveRecentlyPublishedContent
    )
  }

  saveRecentlyPublishedContent (payload) {
    this.setState({
      publishedContent: payload
    })
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
            resetSearchMedicineState={this.props.resetSearchMedicineState}
            loginState={this.props.loginState}
            updateIsCartOpenLoginFlag={this.props.updateIsCartOpenLoginFlag}
          />
          <DiscountDetailSection />
          <RefillMedicineSection loginState={this.props.loginState} />
          <HealthManagementSection />
          <MembershipCardDetail
            incrementCartItemLoading={this.props.incrementCartItemLoading}
            updateShowNoCartIdDialogFlag={this.props.updateShowNoCartIdDialogFlag}
            cartState={this.props.cartState}
          />
          <ArticleSection
            publishedContent={this.state.publishedContent}
          />
          <Testimonal homePageState={this.props.homePageState} />
          <HomePageContent />
        </ActivityIndicator>
      </div>
    )
  }
}

export default HomePageWrapper
