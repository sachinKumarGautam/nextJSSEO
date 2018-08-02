import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Head from 'next/head'

import OrderDetailsWrapper from '../containers/orderDetails'

import {
  orderDetail
} from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12,
    minHeight: theme.spacing.unit * 100
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

const OrderDetails = props => (
  <div>
    <Head>
      <title>{orderDetail.title}</title>
    </Head>
    <Header />
    <div className={props.classes.root}>
      <OrderDetailsWrapper />
    </div>
    <Footer />
  </div>
)

export default withRoot(withStyles(styles)(OrderDetails))
