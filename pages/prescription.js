import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer/Footer'

import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'

import withRoot from '../src/withRoot'

import { connect } from 'react-redux'

import {
  getPrescriptionListLoading
} from '../containers/prescription/prescriptionActions'

import Paper from '@material-ui/core/Paper'

import PrescriptionDetailsWrapper from '../containers/prescription'

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

class Prescription extends React.Component{
  componentDidMount () {
    //Represents to get prescription list.
    this.props.actions.getPrescriptionListLoading(
      this.props.prescriptionState,
      100036079
    )
  }

  render () {
    return (
      <div>
        <Header />
        <div>
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
    prescriptionState: state.prescriptionState
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
