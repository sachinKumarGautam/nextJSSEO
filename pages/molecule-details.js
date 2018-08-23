// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import MoleculeDetailsWrapper from '../containers/moleculeDetails'

import {
  getMoleculeSummaryLoading
} from '../containers/moleculeDetails/moleculeActions'

import {
  getRelatedMedicinesLoading
} from '../containers/medicineList/medicineListActions'

// page title
import { moleculeList } from '../components/constants/PageTitle'

// activity indicatoe
import ActivityIndicator from '../components/activityIndicator'
import FullPageError from '../components/activityIndicator/error/FullPageError'

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

  static getInitialProps ({ query }) {
    return query
  }

  componentDidMount () {
    // Represents to get molecule details.
    const { query } = Router

    if (Router.query.molecule_id) {
      this.props.actions.getMoleculeSummaryLoading(
        this.props.moleculeDetailsState,
        query.molecule_id // pass salt id // 5a61a295ae8bdc26685f2b09 // query.id
      )

      // Represents to get medicine list with page size and size per page.
      this.props.actions.getRelatedMedicinesLoading(
        this.props.medicineListState,
        query.molecule_id, // pass salt name //query.name
        0, // page number
        3 // page size
      )
    }
  }

  tryAgain () {
    const { query } = Router
    this.props.actions.getMoleculeSummaryLoading(
      this.props.moleculeDetailsState,
      query.molecule_id // pass salt id // 5a61a295ae8bdc26685f2b09 // query.id
    )
  }

  render () {
    const { addToCartHandler, classes } = this.props
    return (
      <Layout
        title={moleculeList.title}
        addToCartHandler={addToCartHandler}
      >
        <div className={classes.wrapperStyle}>
          <ActivityIndicator
            isError={this.props.moleculeDetailsState.errorState.isError}
            ErrorComp={
              <FullPageError
                error={this.props.moleculeDetailsState.errorState.error}
                tryAgain={this.tryAgain.bind(this)}
              />
            }
          >
            <Paper className={classes.root} elevation={1}>
              <MoleculeDetailsWrapper
                checkPincodeState={this.props.checkPincodeState}
                addToCartHandler={addToCartHandler}
              />
            </Paper>
          </ActivityIndicator>
        </div>
      </Layout>
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
        getRelatedMedicinesLoading
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(MoleculeDetails))
)
