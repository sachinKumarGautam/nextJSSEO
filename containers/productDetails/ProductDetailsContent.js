import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';

import ProductUseCases from './ProductUseCases'
import RelatedArticles from '../../components/RelatedArticles'
/*
  product use cases
  related articles
*/

class ProductDetailsContent extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item lg={9}>
            <ProductUseCases />
          </Grid>
          <Grid item lg={3}>
            <RelatedArticles />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ProductDetailsContent