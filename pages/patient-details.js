import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import PatientDetailsWrapper from '../containers/patientDetails'

import Paper from '@material-ui/core/Paper'

import { rootEpic } from '../redux/epics'
import { of } from 'rxjs/observable/of'

import {
  getPatientDetailsListLoading,
  savePatientSelected
} from '../containers/patientDetails/patientDetailsActions'

import {
  savePatientToCartLoading
} from '../containers/cartDetails/cartActions'

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
        <Header />
        <div>
          <Paper className={this.props.classes.root} elevation={1}>
            <PatientDetailsWrapper
              patientDetailsState={this.props.patientDetailsState}
              savePatientSelected={this.props.actions.savePatientSelected}
              savePatientToCartLoading={this.props.actions.savePatientToCartLoading}
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
        savePatientToCartLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(PatientDetails)))
