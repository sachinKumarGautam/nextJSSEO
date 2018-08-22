// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Router from 'next/router'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import MedicineListWrapper from '../containers/medicineList'

import {
  searchMedicineLoading
} from '../containers/searchMedicine/searchMedicineAction'

import {
  getRelatedMedicinesLoading
} from '../containers/medicineList/medicineListActions'

// page title
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
  static getInitialProps ({ query }) {
    return query
  }

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
        query.productName,
        0, // page number
        10 // page size
      )
    }
  }

  render () {
    const {
      addToCartHandler,
      checkPincodeState,
      searchMedicineState,
      actions,
      medicineListState,
      moleculeName,
      productName
    } = this.props
    return (
      <Layout title={medicineList.title} addToCartHandler={addToCartHandler}>
        <div className={this.props.classes.root}>
          <MedicineListWrapper
            isLoadingRelatedMedicine={medicineListState.isLoading}
            isLoadingSearchMedicine={searchMedicineState.isLoading}
            searchMedicineState={searchMedicineState}
            addToCartHandler={addToCartHandler}
            checkPincodeState={checkPincodeState}
            moleculeName={moleculeName}
            productName={productName}
            searchMedicineLoading={actions.searchMedicineLoading}
            getRelatedMedicinesLoading={actions.getRelatedMedicinesLoading}
            medicineState={
              productName
                ? searchMedicineState.payload.searchMedicineResult
                : medicineListState.payload
            }
          />
        </div>
      </Layout>
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
