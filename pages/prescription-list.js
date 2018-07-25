import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'

import withRoot from '../src/withRoot'

import { connect } from 'react-redux'

import {
  getPrescriptionListLoading
} from '../containers/prescription/prescriptionActions'

import Paper from '@material-ui/core/Paper'

import PrescriptionDetailsWrapper from '../containers/prescription'

import {
  prescriptionList
} from '../components/constants/PageTitle'

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

class Prescription extends React.Component {
  componentDidMount () {
    // Represents to get prescription list.
    this.props.actions.getPrescriptionListLoading(
      this.props.prescriptionState,
      this.props.customerState.payload.id
    )
  }

  render () {
    return (
      <div>
        <Header title={prescriptionList.title} />
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <PrescriptionDetailsWrapper />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    prescriptionState: state.prescriptionState,
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getPrescriptionListLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(Prescription)))
