import React from 'react'

import Grid from '@material-ui/core/Grid'

import Button from '../../components/button'

const LoginDetails = props => (
  <div>
    {
      !props.loginState.isAuthenticated &&
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Button
            size='small'
            color='primary'
            variant='raised'
            classes={{
              root: props.loginButtonRoot
            }}
            label={'LOGIN'}
            onClick={props.openLoginModal}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            classes={{
              root: props.registerButtonRoot,
              label: props.registerButtonLabel
            }}
            label={'REGISTER'}
            onClick={props.openRegisterModal}
          />
        </Grid>
      </Grid>
    }
  </div>
)

export default LoginDetails
