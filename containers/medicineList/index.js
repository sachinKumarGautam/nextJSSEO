import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import MedicineList from './medicineList'
/*
  bread crumbs
  label
  medicine list
*/

class MedicineListWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <section >
          <MedicineList/>
        </section>
      </div>
    )
  }
}

export default MedicineListWrapper
