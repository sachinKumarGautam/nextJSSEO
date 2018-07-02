import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  avatarWrapper: {
    borderBottom: '1px solid #eee',
    padding: theme.spacing.unit * 2.5
  }
});

class Avatar extends Component {
  render () {
    return (
      <div className={this.props.classes.avatarWrapper}>
        <Typography>
          Jyoti Arora
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Avatar)
