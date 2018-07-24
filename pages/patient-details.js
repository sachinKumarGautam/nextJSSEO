import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import PatientDetailsWrapper from '../containers/patientDetails'

import Paper from '@material-ui/core/Paper'

import {
  getPatientDetailsListLoading,
  savePatientSelected,
  submitPatientDetailsLoading
} from '../containers/patientDetails/patientDetailsActions'

import {
  patientDetails
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

class PatientDetails extends React.Component {
  componentDidMount () {
    // Represents to get patient details.
    this.props.actions.getPatientDetailsListLoading(
      this.props.patientDetailsState,
      this.props.customerState.payload.id // pass customer id
    )
  }

  render () {
    return (
      <div>
        <Header title={patientDetails.title} />
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <PatientDetailsWrapper
              patientDetailsState={this.props.patientDetailsState}
              savePatientSelected={this.props.actions.savePatientSelected}
              submitPatientDetailsLoading={this.props.actions.submitPatientDetailsLoading}
              customerState={this.props.customerState}
              cartState={this.props.cartState}
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
    cartState: state.cartState,
    patientDetailsState: state.patientDetailsState,
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getPatientDetailsListLoading,
        savePatientSelected,
        submitPatientDetailsLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(PatientDetails)))
