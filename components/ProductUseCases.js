import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import ListContent from './ListContent'
import TableContent from './TableContent'

/*
  product uses
  product side effects
  how it works
  precautions
*/

class ProductUseCases extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <articles>
              <ListContent
                title={'Uses'}
                itemKey={'uses'}
                src={this.props.hover.uses ? '/static/images/uses-green.svg' : '/static/images/uses.svg'}
                // content={this.props.summaryData.uses}
                content={this.props.productDetailsState.payload.uses}
                hover={this.props.hover}
              />
            </articles>
          </Grid>
          <Grid item xs={6}>
            <articles>
              <ListContent
                title={'Side Effects'}
                itemKey={'sideEffects'}
                src={this.props.hover.sideEffects ? '/static/images/side-effects-green.svg' : '/static/images/side-effects.svg'}
                // content={this.props.summaryData.side_effects}
                content={this.props.productDetailsState.payload['side_effects']}
                hover={this.props.hover}
              />
            </articles>
          </Grid>
          <Grid item xs={12}>
            <articles>
              <ListContent
                title={'How it Works'}
                itemKey={'howItWorks'}
                src={this.props.hover.howItWorks ? '/static/images/how-it-works-green.svg' : '/static/images/how-it-works.svg'}
                // content={this.props.summaryData.how_it_works}
                content={this.props.productDetailsState.payload['how_it_works']}
                hover={this.props.hover}
              />
            </articles>
          </Grid>
          <Grid item xs={12}>
            <articles>
              {this.props.productDetailsState.payload['precautions'] &&
                <TableContent
                  itemKey={'precautions'}
                  hover={this.props.hover}
                  title={'Precautions'}
                  src={this.props.hover.precautions ? '/static/images/precautions-green.svg' : '/static/images/precautions.svg'}
                  // content={this.props.summaryData.precautions}
                  content={this.props.productDetailsState.payload['precautions']}
                />}
            </articles>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ProductUseCases
