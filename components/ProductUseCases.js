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

const usesContent = [
  `Glimepiride is used to Control high blood sugar which also helps prevent kidney damage.`,
  `Glimepiride lowers blood sugar by causing the release of your body's natural insulin.`,
  `Metformin works by helping to restore your body's proper response to the insulin you naturally produce.`,
  `Metformin also decreases the amount of sugar that your liver makes and that your stomach/intestines absorb.`
]

const sideEffectsContent = [
  `Excessive usage of Glimepiride and Metformin leads to vomiting & fatigue.`,
  `Limited (less than prescribed) usage of Metformin may lead to nausea etc.`,
  `Lactic acidosis is a rare but serious side effect of Metformin.`
]

const howItWorksContent = [
  `Glimepiride delays the digestion of ingested carbohydrates and hence reduces the blood glucose concentrations.`,
  `Metaformin reduces the amount of glucose (sugar) made by your liver, and increases the effect of insulin on your body.`,
  `Glimepiride helps your pancreas to release insulin.`
]

const data = 
  {
    avoid: 'Should be avoided in hypertensive patients and during pregnancy',
    food: 'Avoid Alcohol',
    storage: 'Store in a cool & dry place',
    miss_dose: 'Skip the missed dose and continue your regular dosing schedule. Do not take two doses at the same time.'
  }

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
                content={usesContent}
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
                content={sideEffectsContent}
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
                content={howItWorksContent}
                hover={this.props.hover}
              />
            </articles>
          </Grid>
          <Grid item xs={12}>
            <articles>
              <TableContent
                itemKey={'precautions'}
                hover={this.props.hover}
                title={'Precautions'}
                src={this.props.hover.precautions ? '/static/images/precautions-green.svg' : '/static/images/precautions.svg'}
                // content={this.props.summaryData.precautions}
                content={data}
              />
            </articles>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ProductUseCases
