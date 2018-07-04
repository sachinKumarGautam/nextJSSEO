import React, { Component } from 'react'

import MenuLayout from './MenuLayout'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import withRoot from '../../src/withRoot'

class MenuWrapper extends Component {
  render () {
    return (
      <div>
        <MenuLayout
          customerState={this.props.customerState}
        />
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    customerState: state.customerState
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(MenuWrapper))
