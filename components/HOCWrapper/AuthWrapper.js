import React, { Component } from 'react'

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import Router from 'next/router'

import { HOME_PAGE } from '../../routes/RouteConstant'

export default function withAuth (WrappedComponent) {
  class AuthenticationWrapper extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //     isLoading: true
    //   };
    // }

    componentDidMount () {
      if (!this.props.loginState.isAuthenticated) {
        Router.replace(
          `${HOME_PAGE}?authentication=false&path=${Router.asPath}`
        )
      }
    }

    render () {
      return (
        <div>
          {!this.props.loginState.isAuthenticated ? (
            <div />
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </div>
      )
    }
  }

  function mapStateToProps (state) {
    return {
      loginState: state.loginState
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
      actions: bindActionCreators({}, dispatch)
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthenticationWrapper)
}
