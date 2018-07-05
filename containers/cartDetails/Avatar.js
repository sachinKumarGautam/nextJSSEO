import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  avatarWrapper: {
    borderBottom: `1px solid ${theme.palette.customGrey.grey800}`,
    padding: theme.spacing.unit * 2.5
  },
  userName: {
    marginTop: theme.spacing.unit * 0.75
  }
});

class Avatar extends Component {
  render () {
    return (
      <div className={this.props.classes.avatarWrapper}>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <img src='/static/images/profileCart.svg' />
          </Grid>
          <Grid item xs={4}>
            <Typography className={this.props.classes.userName}>
              Jyoti Arora
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Avatar)
