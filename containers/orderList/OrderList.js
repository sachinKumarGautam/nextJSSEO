import React, { Component } from 'react'

import SideMenu from '../../components/SideMenu'
import OrderListDetails from './OrderListDetails'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  orderListWrapperStyle: {
    display: 'flex',
    flexDirection: 'row'
  }
})

class OrderList extends Component {
  render () {
    return (
      <div className={this.props.classes.orderListWrapperStyle}>
        <section>
          <SideMenu/>
        </section>
        <section>
          <OrderListDetails/>
        </section>
      </div>
    )
  }
}

export default withStyles(styles)(OrderList)
