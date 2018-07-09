import React from 'react';

import Grid from '@material-ui/core/Grid'

const LoginDetails = props => (
  <div>
    {
      !props.loginState.isAuthenticated &&
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            classes={{
              root: props.buttonRoot,
              label: props.buttonLabel
            }}
            label={'Login'}
            onClick={props.openLoginModal}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            classes={{
              root: props.classes.buttonRoot,
              label: props.classes.buttonLabel
            }}
            label={'Register'}
            onClick={props.openRegisterModal}
          />
        </Grid>
      </Grid>
    }
  </div>
)

export default LoginDetails;
