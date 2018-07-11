import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  userIconStyle: {
    marginLeft: theme.spacing.unit * 3.625,
    marginTop: theme.spacing.unit * 2.5,
    marginBottom: theme.spacing.unit * 1.625
  },
  userName: {
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3.25,
    marginBottom: theme.spacing.unit * 2.75
  }
})

class Avatar extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <img
              src='/static/images/profileCart.svg'
              className={this.props.classes.userIconStyle}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography className={this.props.classes.userName}>
              {this.props.cartState.payload.patient_full_name}
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Avatar)
