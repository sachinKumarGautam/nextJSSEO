// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Router from 'next/router'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import ThankyouWrapper from '../containers/thankYou'

// page title
import { orderConfirmation } from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 3.5,
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

class OrderConfirmationWrapper extends React.Component {
  static getInitialProps ({query}) {
    return query
  }

  render () {
    const {query} = Router
    const { addToCartHandler } = this.props

    return (
      <Layout
        title={
          query.paymentStatus === 'success'
            ? orderConfirmation.successTitle
            : (
              query.paymentStatus === 'failed'
                ? orderConfirmation.pendingTitle
                : orderConfirmation.retryTitle
            )
        }
        addToCartHandler={addToCartHandler}
      >
        <div className={this.props.classes.root}>
          <ThankyouWrapper
            queryParamPaymentStatus={query.paymentStatus}
            orderId={query.id}
          />
        </div>
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(OrderConfirmationWrapper))
