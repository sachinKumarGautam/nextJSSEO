import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  carePointsWrapper: {
    padding: theme.spacing.unit * 1.25
  }
});

class CarePoints extends Component {
  render () {
    return (
      <div className={this.props.classes.carePointsWrapper}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Typography>
              Care Points :
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              0
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(CarePoints)
