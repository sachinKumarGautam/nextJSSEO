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

class OrderConfirmationWrapper extends React.Component {
  render () {
    const { addToCartHandler } = this.props
    return (
      <Layout
        title={orderConfirmation.title}
        addToCartHandler={addToCartHandler}
      >
        <div className={this.props.classes.root}>
          <ThankyouWrapper />
        </div>
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(OrderConfirmationWrapper))
