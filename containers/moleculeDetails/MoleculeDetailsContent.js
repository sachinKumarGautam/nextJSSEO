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
      marginTop: theme.spacing.unit * 8,
      paddingLeft: theme.spacing.unit * 1.25
    }
  }
}

class MoleculeDetailsContent extends Component {
  render () {
    return (
      <div>
        <Grid
          container
          spacing={24}
          className={this.props.classes.contentWrapper}
        >
          <ProductUseCases
            hover={this.props.hover}
            summaryData={this.props.moleculeDetailsStatePayload}
          />
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MoleculeDetailsContent)
