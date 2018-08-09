import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import Router from 'next/router'

import withRoot from '../src/withRoot'

import { connect } from 'react-redux'

import MedicineListWrapper from '../containers/medicineList'

import {
  searchMedicineLoading
} from '../containers/searchMedicine/searchMedicineAction'

import {
  getRelatedMedicinesLoading
} from '../containers/medicineList/medicineListActions'

import { medicineList } from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12,
    minHeight: theme.spacing.unit * 100
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class MedicineList extends React.Component {
  componentDidMount () {
    const { query } = Router
    // Represents to get medicine list with page size and size per page.
    if (query.moleculeName) {
      this.props.actions.getRelatedMedicinesLoading(
        this.props.medicineListState,
        query.moleculeName, // pass salt name
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
    const { query } = Router
    const {
      addToCartHandler,
      checkPincodeState,
      searchMedicineState,
      actions,
      medicineListState
    } = this.props
    return (
      <div>
        <Header
          title={medicineList.title}
          addToCartHandler={addToCartHandler}
        />
        <div className={this.props.classes.root}>
          <MedicineListWrapper
            isLoadingRelatedMedicine={medicineListState.isLoading}
            isLoadingSearchMedicine={searchMedicineState.isLoading}
            addToCartHandler={addToCartHandler}
            checkPincodeState={checkPincodeState}
            moleculeName={Router.query.name}
            searchMedicineLoading={actions.searchMedicineLoading}
            query={query}
            getRelatedMedicinesLoading={actions.getRelatedMedicinesLoading}
            medicineState={
              query.productName
                ? searchMedicineState.payload.searchMedicineResult
                : medicineListState.payload
            }
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
    checkPincodeState: state.checkPincodeState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getRelatedMedicinesLoading,
        searchMedicineLoading
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(MedicineList))
)
