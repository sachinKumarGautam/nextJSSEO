import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'
import MedicineList from './MedicineList'

/*
  bread crumbs
  label
  medicine list
*/

const MedicineListWrapper = (props) => (
    <div>
        <BreadCrumbs />
        <section >
          <MedicineList
            medicineListState={props.medicineState}
            query={props.query}
            addToCartHandler={props.addToCartHandler}
            getRelatedMedicinesLoading={props.getRelatedMedicinesLoading}
            checkPincodeState={props.checkPincodeState}
            moleculeName={props.moleculeName}
            incrementCartItemLoading={props.incrementCartItemLoading}
            cartState={props.cartState}
            checkPincodeLoading={props.checkPincodeLoading}
          />
        </section>
      </div>
  )

export default MedicineListWrapper
