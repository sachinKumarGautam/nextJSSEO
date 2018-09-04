import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fade from '@material-ui/core/Fade'
import Login from './Login'
import Register from './Register'
import OTP from './OTP'
import { sendOtpLoading, verifyOtpLoading } from './loginActions'
import {
  customerRegisterLoading,
  checkReferralCodeLoading,
  resetCustomerFormState
} from '../user/customer/customerActions'

import ActivityIndicator from '../../components/activityIndicator/index'
import SnackbarErrorMessage
  from '../../components/activityIndicator/error/SnackbarErrorMessage'

/*
    index.js
      Login.js
      Register.js
 */

const styles = theme => ({
  paper: {
    width: '100%',
    maxWidth: theme.spacing.unit * 59,
    borderRadius: theme.spacing.unit / 2,
    backgroundColor: theme.palette.common.white,
    border: `solid 1px ${theme.palette.customGrey.grey250}`,
    minHeight: theme.spacing.unit * 22
  },
  dialogTitle: {
    ...theme.typography.title,
    textAlign: 'center',
    color: theme.palette.primary.main
  }
})

function Transition (props) {
  return <Fade {...props} />
}

class LoginWrapper extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      modalName: 'login'
    }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm (name) {
    this.setState({
      modalName: name
    })
  }

  componentDidMount () {
    if (this.props.isCartOpenRegisterDialog) {
      this.setState({
        modalName: 'register'
      })
    } else {
      this.setState({
        modalName: 'login'
      })
    }
  }

  resetState () {
    this.props.actions.resetCustomerFormState()
  }

  getModal (name) {
    switch (name) {
      case 'login':
        return (
          <Login
            toggleForm={this.toggleForm}
            closeLoginModal={this.props.closeLoginModal}
            sendOtpLoading={this.props.actions.sendOtpLoading}
            loginState={this.props.loginState}
          />
        )

      case 'register':
        return (
          <Register
            toggleForm={this.toggleForm}
            closeLoginModal={this.props.closeLoginModal}
            loginState={this.props.loginState}
            customerState={this.props.customerState}
            checkReferralCodeLoading={
              this.props.actions.checkReferralCodeLoading
            }
            customerRegisterLoading={this.props.actions.customerRegisterLoading}
          />
        )

      case 'otp':
        return (
          <OTP
            toggleForm={this.toggleForm}
            closeLoginModal={this.props.closeLoginModal}
            loginState={this.props.loginState}
            verifyOtpLoading={this.props.actions.verifyOtpLoading}
          />
        )
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <ActivityIndicator
          isError={
            this.props.customerState.errorStateCustomerRegister.isError ||
              this.props.customerState.payload.membership_code.errorState
                .isError ||
              this.props.customerState.payload.referral_code.errorState.isError
          }
          ErrorComp={
            <SnackbarErrorMessage
              error={
                this.props.customerState.errorStateCustomerRegister.error ||
                  this.props.customerState.payload.membership_code.errorState
                    .error ||
                  this.props.customerState.payload.referral_code.errorState
                    .error
              }
              resetState={this.resetState.bind(this)}
            />
          }
          bottomError
        >
          <Dialog
            open={this.props.openLoginDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.props.closeLoginModal}
            aria-labelledby='login-to-order-medicine'
            classes={{
              paper: classes.paper
            }}
          >
            <DialogTitle
              id='modal'
              disableTypography
              classes={{
                root: classes.dialogTitle
              }}
            >
              {this.state.modalName.toUpperCase()}
            </DialogTitle>
            <DialogContent>
              {this.getModal(this.state.modalName)}
            </DialogContent>
          </Dialog>
        </ActivityIndicator>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loginState: state.loginState,
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        sendOtpLoading,
        verifyOtpLoading,
        customerRegisterLoading,
        checkReferralCodeLoading,
        resetCustomerFormState
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(LoginWrapper)
)
