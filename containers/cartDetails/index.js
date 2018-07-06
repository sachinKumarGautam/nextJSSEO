import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'

import Grid from '@material-ui/core/Grid'

import OrderSummary from './OrderSummary'
import CartDetails from './CartDetails'

/*
  bread crumbs
  order summary
  cart details
*/

class CartDetailsWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <section>
              <OrderSummary
                loginState={this.props.loginState}
                cartState={this.props.cartState}
                customerState={this.props.customerState}
                patientDetailsState={this.props.patientDetailsState}
                deliveryDetailsState={this.props.deliveryDetailsState}
                savePatientToCartLoading={this.props.savePatientToCartLoading}
                saveDeliveryAddressToCartLoading={this.props.saveDeliveryAddressToCartLoading}
                updateIsCartOpenLoginFlag={this.props.updateIsCartOpenLoginFlag}
                uploadPrescriptionLoading={this.props.uploadPrescriptionLoading}
                deletePrescriptionLoading={this.props.deletePrescriptionLoading}
                submitOrderLoading={this.props.submitOrderLoading}
                updateIsCartOpenRegisterModalFlag={this.props.updateIsCartOpenRegisterModalFlag}
              />
            </section>
          </Grid>
          <Grid item xs={4}>
            <section>
              <CartDetails
                cartState={this.props.cartState}
                incrementCartItemLoading={this.props.incrementCartItemLoading}
                decrementCartItemLoading={this.props.decrementCartItemLoading}
                deleteCartItemLoading={this.props.deleteCartItemLoading}
              />
            </section>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default CartDetailsWrapper
