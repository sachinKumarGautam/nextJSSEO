import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer/Footer'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import ProductDetailsWrapper from '../containers/productDetails'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto'
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

const ProductDetails = (props) => (
  <div>
    <Header />
    <div>
      <Paper className={props.classes.root}>
        <ProductDetailsWrapper />
      </Paper>
    </div>
    <Footer />
  </div>
)

export default withRoot(withStyles(styles)(ProductDetails))
