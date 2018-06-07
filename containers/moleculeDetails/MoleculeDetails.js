import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import ProductName from '../../components/ProductName'
import DiseaseTagsWrapper from '../../components/DiseaseTagsWrapper'
import ProductOverview from '../../components/ProductOverview'
import ProductInfoNav from '../../components/ProductInfoNav'

/*
  Product name
  product related disease tags
  product overview
  product info nav
*/

const styles = theme => {
  return {
    productDetailsWrapper: {
      borderBottom: `1px solid ${theme.palette.customGrey.grey100}`,
      paddingBottom: theme.spacing.unit * 3
    }
  }
}

class MoleculeDetails extends Component {
  render () {
    return (
      <div className={this.props.classes.productDetailsWrapper}>
        <ProductName />
        <DiseaseTagsWrapper />
        <ProductOverview />
        <ProductInfoNav
          toggleHover={this.props.toggleHover}
          hover={this.props.hover}
        />
      </div>
    )
  }
}

export default withStyles(styles)(MoleculeDetails)
