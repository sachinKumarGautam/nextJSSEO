import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import OrderList from './OrderList'
/*
  bread crumbs
  order list
*/

class OrderListWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <section >
          <OrderList />
        </section>
      </div>
    )
  }
}

export default OrderListWrapper
