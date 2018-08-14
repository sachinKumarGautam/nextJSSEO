import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    imageStyle: {
      marginLeft: theme.spacing.unit * 12.5,
      marginTop: theme.spacing.unit * 16.875,
      marginBottom: theme.spacing.unit * 30.5
    },
    textStyle: {
      marginTop: theme.spacing.unit * 24.5,
      marginBottom: theme.spacing.unit * 30.5
    }
  }
}

class PageNotFound extends Component {
  render () {
    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <img src='/static/images/404.svg' className={this.props.classes.imageStyle} />
        </Grid>
        <Grid item xs={8} className={this.props.classes.textStyle}>
          <Typography
            variant='subheading'
          >
            Oops!
          </Typography>
          <Typography
            variant='subheading'
          >
            We can’t seem to find the page your are looking for.
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(PageNotFound)
