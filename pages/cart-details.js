// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import CartDetailsWrapper from '../containers/cartDetails'

// page title
import { cartDetail } from '../components/constants/PageTitle'

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
  <Layout
    title={cartDetail.title}
    addToCartHandler={props.addToCartHandler}
  >
    <div className={props.classes.root}>
      <CartDetailsWrapper />
    </div>
  </Layout>
)

export default withRoot(withStyles(styles)(CartDetails))
