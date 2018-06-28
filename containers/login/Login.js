import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Form from '../../components/forms/index'
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 3.5,
    width: '180.5px',
    height: '34px',
    margin: '0 auto'
  },
  formHelperText: {
    textAlign: 'center'
  },
  accountInfo: {
    marginTop: theme.spacing.unit * 2.25,
    textAlign: 'center'
  },
  registerLabel: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing.unit,
    textDecoration: 'none'
  },
  container2: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  },
})

class SignIn extends React.Component {
  state = {
    checked: false,
  };

  componentDidUpdate(nextProps) {
    console.log('Authentication check ',nextProps.loginState,  )
    
    if(nextProps.loginState.isAuthenticated !== this.props.loginState.isAuthenticated){
       this.setState({
         checked: true
       })
    }
  }

  render () {
    const { classes } = this.props
    const { checked } = this.state;
    return (
      <div className={classes.container}>
        <Form
          type={'loginForm'}
          onSubmit={this.props.sendOtpLoading}
          toggleForm={this.props.toggleForm}
          loginState={this.props.loginState}
          closeModal={this.props.closeLoginModal} />
        <Typography
          variant='caption'
          className={classes.accountInfo}
          gutterBottom
        >
              Don’t have an account?
          <a
            href='#'
            className={classes.registerLabel}
            onClick={this.props.toggleForm.bind(this, 'register')}
          >
              Register
          </a>
          <div className={classes.container2}>
          <Zoom in={checked}>
            <Paper elevation={4} className={classes.paper}>
              Welcome sachin
            </Paper>
          </Zoom>
          </div>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(SignIn)
