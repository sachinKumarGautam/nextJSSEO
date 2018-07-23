import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'

import Head from 'next/head'

import withRoot from '../src/withRoot'

import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'

import CarePointWrapper from '../containers/carePoint'

import {
  getCarePointDetailsLoading
} from '../containers/carePoint/carePointActions'

import {carePoint} from '../components/constants/PageTitle'

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

class CarePoints extends React.Component {
  componentDidMount () {
    // Represents to get care point with customer Id.
    this.props.actions.getCarePointDetailsLoading(
      this.props.carePointState,
      this.props.customerState.payload.id,
      'all'
    )
  }

  render () {
    return (
      <div>
        <Head>
          <title>{carePoint.title}</title>
        </Head>
        <Header />
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <CarePointWrapper />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    carePointState: state.carePointState,
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getCarePointDetailsLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(CarePoints)))
