import React from 'react'

import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer/Footer'
import MoleculeDetailsWrapper from '../containers/moleculeDetails'

import Paper from '@material-ui/core/Paper'

import {
  getMoleculeSummaryLoading
} from '../containers/moleculeDetails/moleculeActions'

import {
  getRelatedMedicinesLoading
} from '../containers/medicineList/medicineListActions'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
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

class MoleculeDetails extends React.Component {
  // static async getInitialProps ({ store, isServer }) {
  //   const resultAction = await store.dispatch(getMoleculeSummaryLoading())
  //   console.log('result', resultAction)

  //   return { payload: resultAction }
  // }

  componentDidMount () {
    // Represents to get molecule details.
    this.props.actions.getMoleculeSummaryLoading(
      this.props.moleculeDetailsState,
      '5a61a295ae8bdc26685f2b09' // pass salt id
    )

    // Represents to get medicine list with page size and size per page.
    this.props.actions.getRelatedMedicinesLoading(
      this.props.medicineListState,
      'Multivitamin', // pass salt name
      0, // page number
      3 // page size
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div>
          <Paper className={this.props.classes.root} elevation={1}>
            <MoleculeDetailsWrapper />
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
    medicineListState: state.medicineListState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getMoleculeSummaryLoading,
        getRelatedMedicinesLoading
      },
      dispatch
    )
  }
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(MoleculeDetails)))
