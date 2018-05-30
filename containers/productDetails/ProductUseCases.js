import React, { Component } from 'react'

import ListContent from '../../components/ListContent'
import TableContent from '../../components/TableContent'
/*
  product uses
  product side effects
  how it works
  precautions
*/

class ProductUseCases extends Component {
  render() {
    return (
      <div>
        <ListContent title={'Uses'}/>
        <ListContent title={'Side Effects'}/>
        <ListContent title={'How it Works'}/>
        <TableContent title={'Precautions'}/>
      </div>
    )
  }
}

export default ProductUseCases