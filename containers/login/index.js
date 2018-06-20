
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fade from '@material-ui/core/Fade'
import Login from './Login'
import Register from './Register'
import OTP from './OTP'

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
    border: 'solid 1px #979797',
    minHeight: '176px'
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
        />

      case 'register':
        return <Register
          toggleForm={this.toggleForm}
          closeLoginModal={this.props.closeLoginModal}
        />

      case 'otp':
        return <OTP
          toggleForm={this.toggleForm}
          closeLoginModal={this.props.closeLoginModal}
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

export default withStyles(styles)(LoginWrapper)
