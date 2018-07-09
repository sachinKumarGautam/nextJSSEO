import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'
import PatientList from './patientList'
import RefillMedicineList from './refillMedicineList'

/*
  bread crumbs
  side menu of patient list
  patient related medicines
*/

class RefillPatientsWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <aside>
              <PatientList />
            </aside>
          </Grid>
          <Grid item xs={9}>
            <section>
              <RefillMedicineList
                medicineListState={this.props.medicineListState}
              />
            </section>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    medicineListState: state.medicineListState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillPatientsWrapper)
