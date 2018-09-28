import CardItemLoader from './CartItemLoader'
import React from 'react'
import Divider from '@material-ui/core/Divider'

const CartItemLoaderWrapper = props => (
  <React.Fragment>
    <CardItemLoader />
    <Divider />
    <CardItemLoader />
    <Divider />
    <CardItemLoader />
  </React.Fragment>
)

export default CartItemLoaderWrapper
