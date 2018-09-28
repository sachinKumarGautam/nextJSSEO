import React from 'react'
import MedicineListsLoader from './MedicineListsLoader'
import Divider from '@material-ui/core/Divider'

const MultipleMedicineLoader = () => (
  <React.Fragment>
    <MedicineListsLoader />
    <Divider />
    <MedicineListsLoader />
    <Divider />
    <MedicineListsLoader />
    <Divider />
  </React.Fragment>
)

export default MultipleMedicineLoader
