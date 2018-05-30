import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';

import Paper from '@material-ui/core/Paper';

import ProductDetailsWrapper from '../containers/productDetails'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
  }
})

const ProductDetails = (props) => (
  <div>
    <Paper className={props.classes.root} elevation={4}>
      <ProductDetailsWrapper />
    </Paper>
  </div>
)

export default withRoot(withStyles(styles)(ProductDetails));