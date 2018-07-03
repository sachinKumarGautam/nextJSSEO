import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import MenuItems from './MenuItems'
import { logoutWithReload } from '../utils/removePersistState'

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

class SideMenu extends Component {

  logout = () => {
    logoutWithReload()
  }

  render () {
    return (
      <div>
        <p className={this.props.classes.nameStyle}>Shankar Krishnamurthy</p>
        <MenuItems
          customOrderStyle={this.props.classes.orderStyle}
          customMenuStyle={this.props.classes.menuStyle}
          isSideMenu
          logout={this.logout}
        />
      </div>
    )
  }
}

export default withStyles(styles)(SideMenu)
