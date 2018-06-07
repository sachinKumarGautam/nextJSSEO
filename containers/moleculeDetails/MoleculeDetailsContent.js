import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ProductUseCases from '../../components/ProductUseCases'

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

class MoleculeDetailsContent extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24} className={this.props.classes.contentWrapper}>
          <ProductUseCases
            hover={this.props.hover}
          />
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MoleculeDetailsContent)
