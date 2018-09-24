import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ProductUseCases from '../../components/ProductUseCases'
import RelatedArticles from '../../components/RelatedArticles'
import UnderConstruction from '../../components/UnderConstruction'
import ActivityIndicator from '../../components/activityIndicator'

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
    const { productDetailsState } = this.props
    const productDetailsStateData = productDetailsState.payload
    const {
      uses,
      sideEffects,
      howItWorks,
      precautions
    } = productDetailsStateData
    return (
      <ActivityIndicator
        isLoading={productDetailsState.isLoadingGetProductDetails}
        LoaderComp={null}
      >
        <Grid
          container
          spacing={24}
          className={this.props.classes.contentWrapper}
        >
          <Grid item xs={9}>
            {!uses.length &&
              !sideEffects.length &&
              !howItWorks.length &&
              !precautions.length
              ? <UnderConstruction />
              : <ProductUseCases
                hover={this.props.hover}
                summaryData={productDetailsStateData}
              />}
          </Grid>
          <Grid item xs={3}>
            <RelatedArticles publishedContent={this.props.publishedContent} />
          </Grid>
        </Grid>
      </ActivityIndicator>
    )
  }
}

export default withStyles(styles)(ProductDetailsContent)
