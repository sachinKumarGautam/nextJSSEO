import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePageDetails from './HomePageDetails'

class HomePageWrapper extends Component {
  render () {
    return (
      <div>
        <HomePageDetails
          homePageState={this.props.homePageState}
        />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
      },
      dispatch
    )
  }
}

function mapStateToProps (state) {
  return {
    homePageState: state.homePageState
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageWrapper)
