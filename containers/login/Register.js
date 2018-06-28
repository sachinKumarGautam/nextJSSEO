import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Form from '../../components/forms/index'

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
  }
})

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  handleChange (name, event) {
    this.setState({
      [name]: event.target.value
    })
  }

  render () {
    const { classes, customerRegisterLoading, closeLoginModal, loginState } = this.props
    return (
      <div className={classes.container}>
        <Form
          type={'registerForm'}
          closeLoginModal={closeLoginModal}
          onSubmit={customerRegisterLoading}
          loginState={loginState}
          customerState={this.props.customerState}
        />
        <Typography
          variant='caption'
          className={classes.accountInfo}
          gutterBottom
        >
          Have an account?
          <a
            href='#'
            className={classes.registerLabel}
            onClick={this.props.toggleForm.bind(this, 'login')}
          >
            Login
          </a>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Register)
