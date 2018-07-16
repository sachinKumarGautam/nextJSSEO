import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import ThankyouWrapper from '../containers/thankYou'

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
    return (
      <div>
        <Header />
        <div className={this.props.classes.root}>
          <ThankyouWrapper />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(OrderConfirmationWrapper))
