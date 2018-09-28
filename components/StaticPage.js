import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  pageWrapper: {
    marginLeft: theme.spacing.unit * 12,
    marginRight: theme.spacing.unit * 12,
    paddingTop: theme.spacing.unit * 9.125,
    marginBottom: theme.spacing.unit * 12
  },
  title: {
    ...theme.typography.headline,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 0.83,
    marginBottom: theme.spacing.unit * 5.75
  }
})

class StaticPage extends Component {
  render () {
    return (
      <div className={this.props.classes.pageWrapper}>
        <Typography
          variant='headline'
          className={this.props.classes.title}
        >
          {this.props.title}
        </Typography>
        <div>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(StaticPage)
