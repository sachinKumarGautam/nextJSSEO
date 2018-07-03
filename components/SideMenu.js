import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import MenuItems from './MenuItems'

const styles = theme => {
  return {
    nameStyle: {
      ...theme.typography.subheading,
      marginBottom: theme.spacing.unit * 2,
      color: theme.palette.customGrey.grey500
    },
    orderStyle: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      marginTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit * -2
    },
    menuStyle: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit * -2
    }
  }
}

const SideMenu = (props) => {
  return (
    <div>
      <p className={props.classes.nameStyle}>Shankar Krishnamurthy</p>
      <MenuItems
        customOrderStyle={props.classes.orderStyle}
        customMenuStyle={props.classes.menuStyle}
        isSideMenu
      />
    </div>
  )
}

export default withStyles(styles)(SideMenu)
