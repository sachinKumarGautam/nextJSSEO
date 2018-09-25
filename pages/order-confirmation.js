// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

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
    const { addToCartHandler } = this.props
    const paymentCondition = (
      this.props.paymentStatus === 'failed'
        ? orderConfirmation.pendingTitle
        : orderConfirmation.retryTitle
    )

    return (
      <Layout
        title={
          this.props.paymentStatus === 'success'
            ? orderConfirmation.successTitle
            : paymentCondition
        }
        addToCartHandler={addToCartHandler}
      >
        <div className={this.props.classes.root}>
          <ThankyouWrapper
            queryParamPaymentStatus={this.props.paymentStatus}
            orderId={this.props.id}
          />
        </div>
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(OrderConfirmationWrapper))
