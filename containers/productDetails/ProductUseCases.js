import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import ListContent from '../../components/ListContent'
import TableContent from '../../components/TableContent'

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

class ProductUseCases extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <articles>
              <ListContent
                title={'Uses'}
                src={'/static/images/uses.svg'}
                content={usesContent}
              />
            </articles>
          </Grid>
          <Grid item xs={6}>
            <articles>
              <ListContent
                title={'Side Effects'}
                src={'/static/images/side-effects.svg'}
                content={sideEffectsContent}
              />
            </articles>
          </Grid>
          <Grid item xs={12}>
            <articles>
              <ListContent
                title={'How it Works'}
                src={'/static/images/how-it-works.svg'}
                content={howItWorksContent}
              />
            </articles>
          </Grid>
          <Grid item xs={12}>
            <articles>
              <TableContent title={'Precautions'} src={'/static/images/precautions.svg'} />
            </articles>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ProductUseCases
