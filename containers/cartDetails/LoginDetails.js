import React from 'react'

import Grid from '@material-ui/core/Grid'

import Button from '../../components/button'

const LoginDetails = props => (
  <div>
    {
      !props.loginState.isAuthenticated &&
      <Grid container spacing={24}>
        <Grid item xs={6}>
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
              root: props.buttonRoot,
              label: props.buttonLabel
            }}
            label={'Register'}
            onClick={props.openRegisterModal}
          />
        </Grid>
      </Grid>
    }
  </div>
)

export default LoginDetails
