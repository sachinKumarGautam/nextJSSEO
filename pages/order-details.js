import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Head from 'next/head'

import OrderDetailsWrapper from '../containers/orderDetails'
import Layout from '../components/layouts/Layout'

import {
  orderDetail
} from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 7.5,
    minHeight: theme.spacing.unit * 100,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class OrderDetails extends React.Component {
  static getInitialProps ({ query }) {
    return query
  }

  render () {
    // const { query } = Router
    const { id, addToCartHandler } = this.props

    return (
      <Layout
        title={orderDetail.title}
        addToCartHandler={addToCartHandler}
      >
        <div className={this.props.classes.root}>
          <OrderDetailsWrapper
            orderId={id}
          />
        </div>
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(OrderDetails))
