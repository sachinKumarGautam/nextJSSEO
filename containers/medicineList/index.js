import React from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import MedicineList from './MedicineList'

/*
  bread crumbs
  label
  medicine list
*/

const MedicineListWrapper = props => (
  <div>
    <BreadCrumbs
      isLoading={
        props.isLoadingRelatedMedicine || props.isLoadingSearchMedicine
      }
    />
    <section>
      <MedicineList
        isLoading={
          props.isLoadingRelatedMedicine || props.isLoadingSearchMedicine
        }
        medicineListState={props.medicineState}
        query={props.query}
        addToCartHandler={props.addToCartHandler}
        getRelatedMedicinesLoading={props.getRelatedMedicinesLoading}
        checkPincodeState={props.checkPincodeState}
        medicineList={props.medicineListState}
      />
    </section>
  </div>
)

export default MedicineListWrapper
