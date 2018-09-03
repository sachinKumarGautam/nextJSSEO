// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import HomePageWrapper from '../containers/homePage'

import {
  getBackGroundImagesLoading
} from '../containers/homePage/homePageActions'

import {
  fetchConstantsLoading
} from '../components/constants/constantsAction'

// page title
import { homePage } from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    minHeight: theme.spacing.unit * 100
  }
})

class HomePage extends React.Component {
  static getInitialProps ({ query }) {
    return query
  }

  componentDidMount () {
    // get background images
    this.props.actions.getBackGroundImagesLoading(
      this.props.homePageState,
      'background'
    )

    // fetch app constants
    this.props.actions.fetchConstantsLoading(
      this.props.constantsState
    )
  }

  render () {
    const { addToCartHandler, classes, authentication, path } = this.props
    return (
      <Layout
        title={homePage.title}
        addToCartHandler={addToCartHandler}
        authentication={authentication}
        path={path}
      >
        <div>
          <Paper className={classes.root} elevation={1}>
            <HomePageWrapper />
          </Paper>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  return {
    homePageState: state.homePageState,
    constantsState: state.constantsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getBackGroundImagesLoading,
        fetchConstantsLoading
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(HomePage))
)
