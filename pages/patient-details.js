// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Router from 'next/router'
import Paper from '@material-ui/core/Paper'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import PatientDetailsWrapper from '../containers/patientDetails'

import {
  getPatientDetailsListLoading,
  savePatientSelected,
  submitPatientDetailsLoading,
  resetPatientSelected,
  updatePatientFormValue,
  resetPatientForm,
  resetIsEditFlag
} from '../containers/patientDetails/patientDetailsActions'

// page title
import { patientDetails } from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 7.5,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md
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
    // let customerId = this.props.customerState.payload.id
    const { query } = Router

    // if (query.id === this.props.customerState.payload.id) {
    //   customerId = query.id
    // }

    // Represents to get patient details.
    this.props.actions.getPatientDetailsListLoading(
      this.props.patientDetailsState,
      query.customer_id // pass customer id
    )
  }

  render () {
    const { addToCartHandler } = this.props
    return (
      <Layout
        title={patientDetails.title}
        addToCartHandler={addToCartHandler}
      >
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <PatientDetailsWrapper
              patientDetailsState={this.props.patientDetailsState}
              savePatientSelected={this.props.actions.savePatientSelected}
              submitPatientDetailsLoading={
                this.props.actions.submitPatientDetailsLoading
              }
              customerState={this.props.customerState}
              cartState={this.props.cartState}
              getPatientDetailsListLoading={this.props.actions.getPatientDetailsListLoading}
              resetPatientSelected={this.props.actions.resetPatientSelected}
              resetPatientForm={this.props.actions.resetPatientForm}
              resetIsEditFlag={this.props.actions.resetIsEditFlag}
              updatePatientFormValue={this.props.actions.updatePatientFormValue}
              globalErrorState={this.props.globalErrorState}
            />
          </Paper>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    patientDetailsState: state.patientDetailsState,
    customerState: state.customerState,
    globalErrorState: state.globalErrorState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getPatientDetailsListLoading,
        savePatientSelected,
        submitPatientDetailsLoading,
        resetPatientSelected,
        resetPatientForm,
        resetIsEditFlag,
        updatePatientFormValue
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(PatientDetails))
)
