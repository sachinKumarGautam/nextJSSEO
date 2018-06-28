import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer/Footer'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import ProductDetailsWrapper from '../containers/productDetails'

// import fetch from 'isomorphic-fetch'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
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

const ProductDetails = (props) => (
  <div>
    <Header />
    <div>
      <Paper className={props.classes.root} elevation={1}>
        {/* <div>
          Next stars: {props.stars}
        </div> */}
        <ProductDetailsWrapper />
      </Paper>
    </div>
    <Footer />
  </div>
)

// ProductDetails.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }

export default withRoot(withStyles(styles)(ProductDetails))
