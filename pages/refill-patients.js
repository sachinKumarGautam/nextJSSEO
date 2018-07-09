import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'
import Paper from '@material-ui/core/Paper'

import RefillPatientsWrapper from '../containers/refillPatients'

import {
  getPatientDetailsListLoading
} from '../containers/patientDetails/patientDetailsActions'

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

class RefillPatient extends Component {
  componentDidMount () {
    this.props.actions.getPatientDetailsListLoading(
      this.props.patientDetailsState,
      this.props.customerState.payload.id // pass customer id
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div>
          <Paper className={this.props.classes.root} elevation={1}>
            <RefillPatientsWrapper />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    patientDetailsState: state.patientDetailsState,
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getPatientDetailsListLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(RefillPatient)))
