import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePageDetails from './HomePageDetails'

class HomePageWrapper extends Component {
  render () {
    return (
      <div>
        <HomePageDetails/>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageWrapper)
