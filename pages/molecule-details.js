import React from 'react'

import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import { bindActionCreators } from 'redux'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer/Footer'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import MoleculeDetailsWrapper from '../containers/moleculeDetails'

import {
  getMoleculeSummaryLoading
} from '../containers/moleculeDetails/moleculeActions'

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

const MoleculeDetails = (props) => (
  <div>
    <Header />
    <div>
      <Paper className={props.classes.root} elevation={1}>
        <MoleculeDetailsWrapper />
      </Paper>
    </div>
    <Footer />
  </div>
)

// static async getInitialProps ({ store, isServer }) {
//   const resultAction = await rootEpic(
//     of(actions.fetchCharacter(isServer)),
//     store
//   ).toPromise() // we need to convert Observable to Promise
//   store.dispatch(resultAction)

//   return { isServer }
// }

MoleculeDetails.getInitialProps = async function () {
  // const resultAction = await props.getMoleculeSummaryLoading()
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // const data = await res.json()

  // console.log(`Show data fetched. Count: ${data.length}`)

  // return {
  //   shows: data
  // }
}

function mapStateToProps (state) {
  return {
    moleculeDetailsState: state.moleculeDetailsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getMoleculeSummaryLoading
      },
      dispatch
    )
  }
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(MoleculeDetails)))
