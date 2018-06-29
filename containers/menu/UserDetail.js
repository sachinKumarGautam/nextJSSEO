import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    nameMenuStyle: {
      ...theme.typography.subheading,
      paddingLeft: theme.spacing.unit * 5,
      color: theme.palette.customGreen.green300,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }
  }
}

const UserDetail = (props) => {
  return (
    <div className={props.classes.nameMenuStyle}>
      Hi Shankar
    </div>
  )
}

export default withStyles(styles)(UserDetail)
