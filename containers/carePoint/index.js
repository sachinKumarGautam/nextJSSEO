import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import CarePointDetails from './CarePointDetails'
/*
  bread crumbs
  order list
*/

class CarePointWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <section >
          <CarePointDetails/>
        </section>
      </div>
    )
  }
}

export default CarePointWrapper
