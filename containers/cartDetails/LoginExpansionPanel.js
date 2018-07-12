import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'

import LoginDetails from './LoginDetails'

import {
  LOGIN_DESCRIPTION
} from '../messages/cartMessages'

class LoginExpansionPanel extends React.Component {
  openLoginModal () {
    const isCartOpenLoginDialog = true

    this.props.updateIsCartOpenLoginFlag(
      this.props.cartState,
      isCartOpenLoginDialog
    )
  }

  openRegisterModal () {
    const isCartOpenRegisterDialog = true

    this.props.updateIsCartOpenRegisterModalFlag(
      this.props.cartState,
      isCartOpenRegisterDialog
    )
  }

  render () {
    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel1'}
        onChange={
          !this.props.loginState.isAuthenticated
            ? this.props.handleChange
            : null
        }
        className={this.props.expansionPanel}
      >
        <ExpansionPanelSummary expandIcon={<div />}>
          <img src='/static/images/loggedIn.svg' className={this.props.imageIcon}/>
          <Typography component='h1' className={this.props.heading}>
            {
              !this.props.loginState.isAuthenticated
                ? (
                  'Login/Register'
                ) : (
                  this.props.customerState.payload.full_name
                )
            }
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          classes={{
            root: this.props.thankYouWrapper
          }}
        >
          <Typography component='h2' className={this.props.loginDescription}>
            {LOGIN_DESCRIPTION}
          </Typography>
          <div className={this.props.loginDetailsWrapper}>
            <LoginDetails
              loginState={this.props.loginState}
              loginButtonRoot={this.props.loginButtonRoot}
              registerButtonRoot={this.props.registerButtonRoot}
              registerButtonLabel={this.props.registerButtonLabel}
              openLoginModal={this.openLoginModal.bind(this)}
              openRegisterModal={this.openRegisterModal.bind(this)}
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default LoginExpansionPanel
