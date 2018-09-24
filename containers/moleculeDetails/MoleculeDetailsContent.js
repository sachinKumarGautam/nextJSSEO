import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ProductUseCases from '../../components/ProductUseCases'
import UnderConstruction from '../../components/UnderConstruction'

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
    const { payload } = this.props.moleculeDetailsState

    const { uses, side_effects, how_it_works, precautions } = payload
    return (
      <div>
        <Grid
          container
          spacing={24}
          className={this.props.classes.contentWrapper}
        >
          {
            !uses.length &&
            !side_effects.length &&
            !how_it_works.length &&
            Object.keys(precautions).length === 0
              ? <UnderConstruction />
              : <ProductUseCases
                hover={this.props.hover}
                summaryData={payload}
              />}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MoleculeDetailsContent)
