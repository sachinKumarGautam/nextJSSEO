import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import ThankYou from '../containers/thankYou'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class ThankYouWrapper extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <ThankYou />
        <Footer />
      </div>
    )
  }
}

export default withRoot(ThankYouWrapper)
