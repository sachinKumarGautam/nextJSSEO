import React, { Component } from 'react'
// dependencies
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import Layout from '../components/layouts/Layout'
import withRoot from '../src/withRoot'
import RefillPatientsWrapper from '../containers/refillPatients'

import {
  getPatientDetailsListLoading
} from '../containers/patientDetails/patientDetailsActions'

// page title
import { refillPatient } from '../components/constants/PageTitle'

// activity indicator
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

class RefillPatient extends Component {
  componentDidMount () {
    // let customerId = this.props.customerState.payload.id
    const { query } = Router

    // if (query.id === this.props.customerState.payload.id) {
    //   customerId = query.id
    // }

    this.props.actions.getPatientDetailsListLoading(
      this.props.patientDetailsState,
      query.customer_id, // pass customer id,
      { isRefillPatients: true }
    )
  }

  tryAgain () {
    const { query } = Router

    this.props.actions.getPatientDetailsListLoading(
      this.props.patientDetailsState,
      query.customer_id, // pass customer id,
      { isRefillPatients: true }
    )
  }

  render () {
    const { addToCartHandler, classes } = this.props

    return (
      <Layout
        title={refillPatient.title}
        addToCartHandler={addToCartHandler}
      >
        <div className={classes.wrapperStyle}>
          <ActivityIndicator
            isError={this.props.patientDetailsState.errorState.isError}
            ErrorComp={
              <FullPageError
                error={this.props.patientDetailsState.errorState.error}
                tryAgain={this.tryAgain.bind(this)}
              />
            }
          >
            <Paper className={classes.root} elevation={1}>
              <RefillPatientsWrapper
                addToCartHandler={this.props.addToCartHandler}
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(RefillPatient))
)
