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

import {
  sendOtpLoading,
  verifyOtpLoading,
  resetIsNewUserFlag,
  resetLoginState
} from './loginActions'

import {
  customerRegisterLoading,
  checkReferralCodeLoading,
  resetCustomerFormState
} from '../user/customer/customerActions'

import {
  updateIsCartOpenRegisterModalFlag,
  resetCartLoadingState
} from '../cartDetails/cartActions'

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
    fontSize: theme.spacing.unit * 2.25,
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
      modalName: 'login',
      isRegisterClicked: false
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.toggleRegisterClicked = this.toggleRegisterClicked.bind(this)
  }

  componentDidMount () {
    if (this.props.cartState.isCartOpenRegisterDialog) {
      this.setState({
        isRegisterClicked: true
      })
    }
  }

  toggleRegisterClicked (name) {
    if (name === 'loginClick') {
      this.setState({
        isRegisterClicked: false
      })
    } else if (name === 'registerClick') {
      this.setState({
        isRegisterClicked: true
      })
    }
  }

  toggleForm (name) {
    if (name === 'login') {
      this.setState({
        isRegisterClicked: false
      })

      this.props.actions.resetIsNewUserFlag(this.props.loginState)
    }

    this.setState({
      modalName: name
    })
  }

  resetState () {
    this.props.actions.resetCustomerFormState()
    this.props.actions.resetLoginState()
    this.props.actions.resetCartLoadingState()
  }

  getModal (name) {
    switch (name) {
      case 'login':
        return (
          <Login
            toggleForm={this.toggleForm}
            toggleRegisterClicked={this.toggleRegisterClicked}
            closeLoginModal={this.props.closeLoginModal}
            sendOtpLoading={this.props.actions.sendOtpLoading}
            loginState={this.props.loginState}
            isRegisterClicked={this.state.isRegisterClicked}
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
            isRegisterClicked={this.state.isRegisterClicked}
          />
        )

      case 'otp':
        return (
          <OTP
            toggleForm={this.toggleForm}
            closeLoginModal={this.props.closeLoginModal}
            loginState={this.props.loginState}
            verifyOtpLoading={this.props.actions.verifyOtpLoading}
            sendOtpLoading={this.props.actions.sendOtpLoading}
            isRegisterClicked={this.state.isRegisterClicked}
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
            this.props.cartState.errorState.isError
          }
          ErrorComp={
            <SnackbarErrorMessage
              error={this.props.globalErrorState}
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
              {this.state.isRegisterClicked || this.props.loginState.isNewUser
                ? 'REGISTER'
                : 'LOGIN'}
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
    cartState: state.cartState,
    loginState: state.loginState,
    customerState: state.customerState,
    globalErrorState: state.globalErrorState
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
        resetCustomerFormState,
        resetLoginState,
        resetIsNewUserFlag,
        updateIsCartOpenRegisterModalFlag,
        resetCartLoadingState
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(LoginWrapper)
)
