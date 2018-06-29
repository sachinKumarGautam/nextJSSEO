import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import { bindActionCreators } from 'redux'

import withRoot from '../src/withRoot'

import { rootEpic } from '../redux/epics'
import { of } from 'rxjs/observable/of'

import Paper from '@material-ui/core/Paper'

import MedicineListWrapper from '../containers/medicineList'

import {
  getRelatedMedicinesLoading
} from '../containers/medicineList/medicineListActions'

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
        <div className={this.props.classes.root}>
          <MedicineListWrapper />
        </div>
        <Footer />
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
)(withRoot(withStyles(styles)(MedicineList)))
