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

class ProductUseCases extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <articles>
              <ListContent title={'Uses'} />
            </articles>
          </Grid>
          <Grid item xs={6}>
            <articles>
              <ListContent title={'Side Effects'} />
            </articles>
          </Grid>
          <Grid item xs={12}>
            <articles>
              <ListContent title={'How it Works'} />
            </articles>
          </Grid>
          <Grid item xs={12}>
            <articles>
              <TableContent title={'Precautions'} />
            </articles>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ProductUseCases
