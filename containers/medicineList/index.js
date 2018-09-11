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
        cartState={props.cartState}
        searchMedicineState={props.searchMedicineState}
        medicineListState={props.medicineState}
        moleculeName={props.moleculeName}
        queryMoleculeName={props.queryMoleculeName}
        productName={props.productName}
        addToCartHandler={props.addToCartHandler}
        searchMedicineLoading={props.searchMedicineLoading}
        getRelatedMedicinesLoading={props.getRelatedMedicinesLoading}
        checkPincodeState={props.checkPincodeState}
        medicineList={props.medicineListState}
        updateIsShowMore={props.updateIsShowMore}
      />
    </section>
  </div>
)

export default MedicineListWrapper
