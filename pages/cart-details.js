import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import CircularProgress from '@material-ui/core/CircularProgress'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import CartDetailsWrapper from '../containers/cartDetails'

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
  },
  loaderStyle: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
    zIndex: '9999'
  },
  spinnerStyle: {
    position: 'fixed',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
    zIndex: '1'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})

const CartDetails = props => (
  <div>
    <Header />
    <div className={props.classes.root}>
      <CartDetailsWrapper />
    </div>
    <Footer />
  </div>
)

export default withRoot(withStyles(styles)(CartDetails))
