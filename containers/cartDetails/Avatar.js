import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  avatarWrapper: {
    borderBottom: `1px solid ${theme.palette.customGrey.grey800}`,
    padding: theme.spacing.unit * 2.5
  }
});

class Avatar extends Component {
  render () {
    return (
      <div className={this.props.classes.avatarWrapper}>
        <img src='/static/images/profileCart.svg' />
        <Typography>
          Jyoti Arora
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Avatar)
