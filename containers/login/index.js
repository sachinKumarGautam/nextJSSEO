import Login from './Login'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core'

const styles = theme => ({
  paper: {
    width: '100%',
    maxWidth: theme.spacing.unit * 59,
    height: '272px',
    borderRadius: theme.spacing.unit / 2,
    backgroundColor: theme.palette.common.white,
    border: 'solid 1px #979797'
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
            // className={classes.dialogTitle}
            id='alert-dialog-slide-title'
            disableTypography
            classes={{
              root: classes.dialogTitle
            }}
          >
            {'Login'}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText> */}
            <Login {...this.props} />
          </DialogContent>
          {/* <DialogActions>
            <Button
              variant='contained'
              onClick={this.props.closeLoginModal}
              color='primary'
              label={'Agree'}
            />
          </DialogActions> */}
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(LoginWrapper)
