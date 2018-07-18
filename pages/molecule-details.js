import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Router from 'next/router'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import Paper from '@material-ui/core/Paper'

import MoleculeDetailsWrapper from '../containers/moleculeDetails'

import {
  getMoleculeSummaryLoading
} from '../containers/moleculeDetails/moleculeActions'

import {
  getRelatedMedicinesLoading
} from '../containers/medicineList/medicineListActions'

import { checkPincodeLoading } from '../containers/location/pincode/pincodeAction'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  },
  wrapperStyle: {
    paddingBottom: theme.spacing.unit * 3,
    minHeight: theme.spacing.unit * 100
  }
})

class MoleculeDetails extends React.Component {
  // static async getInitialProps ({ store, isServer }) {
  //   const resultAction = await store.dispatch(getMoleculeSummaryLoading())
  //   console.log('result', resultAction)

  //   return { payload: resultAction }

  // }

  static getInitialProps ({query}) {
    return query
  }

  componentDidMount () {
    // Represents to get molecule details.
    const {query} = Router

    if (Router.query.id) {
      this.props.actions.getMoleculeSummaryLoading(
        this.props.moleculeDetailsState,
        query.id// pass salt id // 5a61a295ae8bdc26685f2b09 // query.id
      )
    }

    if (query.name && !this.props.medicineListState.payload.length) {
      // Represents to get medicine list with page size and size per page.
      this.props.actions.getRelatedMedicinesLoading(
        this.props.medicineListState,
        query.name, // pass salt name //query.name
        0, // page number
        3 // page size
      )
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <MoleculeDetailsWrapper
              checkPincodeLoading={this.props.actions.checkPincodeLoading}
              checkPincodeState={this.props.checkPincodeState}
            />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    moleculeDetailsState: state.moleculeDetailsState,
    medicineListState: state.medicineListState,
    checkPincodeState: state.checkPincodeState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getMoleculeSummaryLoading,
        getRelatedMedicinesLoading,
        checkPincodeLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(MoleculeDetails)))
