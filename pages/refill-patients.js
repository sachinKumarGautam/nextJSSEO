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
import { withCommonWrapper } from '../components/HOCWrapper/CommonWrapper'

import {
  refillPatient
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

class RefillPatient extends Component {
  componentDidMount () {
    this.props.actions.getPatientDetailsListLoading(
      this.props.patientDetailsState,
      this.props.customerState.payload.id, // pass customer id,
      { isRefillPatients: true }
    )
  }

  render () {
    return (
      <div>
        <Header title={refillPatient.title} />
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <RefillPatientsWrapper
              addToCartHandler={this.props.addToCartHandler}
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
        getPatientDetailsListLoading
      },
      dispatch
    )
  }
}

export default withCommonWrapper(
  connect(mapStateToProps, mapDispatchToProps)(
    withRoot(withStyles(styles)(RefillPatient))
  )
)
