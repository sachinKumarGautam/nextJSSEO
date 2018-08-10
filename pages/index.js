// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Router from 'next/router'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import HomePageWrapper from '../containers/homePage'

import {
  getBackGroundImagesLoading
} from '../containers/homePage/homePageActions'

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
  componentDidMount () {
    this.props.actions.getBackGroundImagesLoading(
      this.props.homePageState,
      'background'
    )
  }

  render () {
    const { addToCartHandler, classes } = this.props
    const { query } = Router
    return (
      <Layout
        title={homePage.title}
        addToCartHandler={addToCartHandler}
        authentication={query.authentication}
        path={query.path}
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
    homePageState: state.homePageState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getBackGroundImagesLoading
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(HomePage))
)
