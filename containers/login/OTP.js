import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Form from '../../components/forms/index'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center'
  },
  otpHeading: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit
  },
  phoneNumber: {
    fontSize: theme.typography.fontSize,
    fontWeight: 'bold',
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit
  },
  changePhoneNumber: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing.unit * 2
  }
})

class OTP extends React.Component {
  render () {
    const { classes, toggleForm } = this.props
    return (
      <div className={classes.container}>
        <Typography className={classes.otpHeading}> OTP has been sent on this number </Typography>
        <Typography className={classes.phoneNumber}>
          +919891699153
          <span
            className={classes.changePhoneNumber}
            onClick={toggleForm.bind(this, 'login')}
          >
            Change
          </span>
        </Typography>
        <Form
          type={'OTPForm'}
          closeLoginModal={this.props.closeLoginModal}
          toggleForm={toggleForm}
        />
      </div>
    )
  }
}

export default withStyles(styles)(OTP)
