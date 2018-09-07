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
    paddingBottom: theme.spacing.unit * 2,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 7.5,
    width: '100%'
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
        isHomePage
      >
        <div>
          <Paper className={classes.root} elevation={1}>
            <HomePageWrapper
              addToCartHandler={addToCartHandler}
            />
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
