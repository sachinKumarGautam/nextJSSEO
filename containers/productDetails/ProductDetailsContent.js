import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ProductUseCases from '../../components/ProductUseCases'
import RelatedArticles from '../../components/RelatedArticles'

/*
  product use cases
  related articles
*/

const styles = theme => {
  return {
    contentWrapper: {
      marginTop: theme.spacing.unit * 8
    }
  }
}

class ProductDetailsContent extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24} className={this.props.classes.contentWrapper}>
          <Grid item xs={9}>
            <ProductUseCases
              hover={this.props.hover}
              productDetailsState={this.props.productDetailsState}
            />
          </Grid>
          <Grid item xs={3}>
            <RelatedArticles />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(ProductDetailsContent)
