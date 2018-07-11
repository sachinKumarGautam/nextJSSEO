import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import Router from 'next/router'

import withRoot from '../src/withRoot'

import { connect } from 'react-redux'

import MedicineListWrapper from '../containers/medicineList'
import {searchMedicineLoading} from '../containers/searchMedicine/searchMedicineAction'
import {getRelatedMedicinesLoading} from '../containers/medicineList/medicineListActions'
import {incrementCartItemLoading} from '../containers/cartDetails/cartActions'


const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class MedicineList extends React.Component {
  componentDidMount () {
    const {query} = Router
    // Represents to get medicine list with page size and size per page.

    if (query.name) {
      this.props.actions.getRelatedMedicinesLoading(
        this.props.medicineListState,
        query.name, // pass salt name
        0, // page number
        10 // page size
      )
    }

    if (query.productName) {
      this.props.actions.searchMedicineLoading(
        this.props.searchMedicineState,
        this.props.checkPincodeState.payload.id,
        query.productName
      )
    }
  }

  render () {
    const {query} = Router

    return (
      <div>
        <Header />
        <div className={this.props.classes.root}>
          <MedicineListWrapper
            cartState={this.props.cartState}
            checkPincodeState={this.props.checkPincodeState}
            moleculeName={Router.query.name}
            incrementCartItemLoading={this.props.actions.incrementCartItemLoading}
            searchMedicineLoading={this.props.actions.searchMedicineLoading}
            getRelatedMedicinesLoading={this.props.actions.getRelatedMedicinesLoading}
            medicineState={
              query.productName 
              ? this.props.searchMedicineState.payload.searchMedicineResult
              : this.props.medicineListState.payload}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    medicineListState: state.medicineListState,
    searchMedicineState: state.searchMedicineState,
    checkPincodeState: state.checkPincodeState,
    cartState: state.cartState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getRelatedMedicinesLoading,
        searchMedicineLoading,
        incrementCartItemLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(MedicineList)))
