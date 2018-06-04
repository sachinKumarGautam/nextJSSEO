import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    navWrapper: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 4
    },
    breadCrumb: {
      ...theme.typography.caption,
      textDecoration: 'none'
    },
    breadCrumbArrow: {
      ...theme.typography.caption,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
  }
}

const BreadCrumbs = (props) => (
  <nav>
    <div className={props.classes.navWrapper}>
      <a href='#' className={props.classes.breadCrumb}>First</a>
      <span className={props.classes.breadCrumbArrow}>></span>
      <a href='#' className={props.classes.breadCrumb}>Second</a>
      <span className={props.classes.breadCrumbArrow}>></span>
      <a href='#' className={props.classes.breadCrumb}>Third</a>
    </div>
  </nav>
)

export default withStyles(styles)(BreadCrumbs)