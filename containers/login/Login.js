import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '../../components/button'
import Typography from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/StayPrimaryPortrait';

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
	}
});

class SignIn extends React.Component {
  state = {
    name: 'Composed TextField',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl} aria-describedby="name-helper-text">
          <Input 
						startAdornment={
							<InputAdornment position="start">
								<AccountCircle color={''} />
							</InputAdornment>
						}
            id="name-helper" 
						type='number'
            value={this.state.name} 
            onChange={this.handleChange}
            placeholder={'Enter registered mobile no.'}
            />
          <FormHelperText 
            id="name-helper-text"
						className={classes.formHelperText}
           >
              We will send you an SMS with an OTP to this number
            </FormHelperText>
            </FormControl>
            <div className={classes.buttonWrapper}>
                <Button 
                  variant='raised' 
                  onClick={this.props.closeLoginModal} 
                  color='primary'
                  label={'Login with OTP'}
                  />
            </div>
						{/* <Typography variant="display4" gutterBottom>
							Don’t have an account? Register
						</Typography> */}
      </div>
    );
  }
}


export default withStyles(styles)(SignIn);
