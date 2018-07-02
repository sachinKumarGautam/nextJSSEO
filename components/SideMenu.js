import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import MenuItems from './MenuItems'

const styles = theme => {
  return {
    nameStyle: {
      ...theme.typography.subheading,
      marginBottom: theme.spacing.unit * 4,
      color: theme.palette.customGrey.grey500
    },
    orderStyle: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      marginTop: theme.spacing.unit * 4
    },
    menuStyle: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit
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
