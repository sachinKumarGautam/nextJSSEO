import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import compose from 'recompose/compose'
import withRedux from 'next-redux-wrapper'
import initStore from '../../redux'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fade from '@material-ui/core/Fade'
import Login from './Login'
import Register from './Register'
import OTP from './OTP'
import { sendOtpLoading, verifyOtpLoading} from './loginActions'
import { customerRegisterLoading } from '../user/customer/customerActions'

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
    this.setState({
      modalName: 'login'
    })
  }

  getModal (name) {
    switch (name) {
      case 'login':
        return <Login
          toggleForm={this.toggleForm}
          closeLoginModal={this.props.closeLoginModal}
          sendOtpLoading={this.props.actions.sendOtpLoading}
          loginState={this.props.loginState}
        />

      case 'register':
        return <Register
          toggleForm={this.toggleForm}
          closeLoginModal={this.props.closeLoginModal}
          loginState={this.props.loginState}
          customerState={this.props.customerState}
          customerRegisterLoading={this.props.actions.customerRegisterLoading}
        />

      case 'otp':
        return <OTP
          toggleForm={this.toggleForm}
          closeLoginModal={this.props.closeLoginModal}
          loginState={this.props.loginState}
          customerState={this.props.customerState}
          verifyOtpLoading={this.props.actions.verifyOtpLoading}
        />
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div>
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
        customerRegisterLoading
      },
      dispatch
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper)

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginWrapper))
