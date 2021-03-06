import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import MenuItem from '@material-ui/core/MenuItem'

import Router from 'next/router'
import {
  ORDER,
  PRESCRIPTION,
  CARE_POINTS,
  ADDRESS_LIST,
  PATIENT_LIST,
  REFILL_PATIENTS
} from '../routes/RouteConstant'

import { getReplacedString } from '../utils/replaceConstants'

const styles = theme => {
  return {
    orderStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 6.75,
      color: theme.palette.customGrey.grey500,
      marginTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit / 2,
      paddingTop: 0
    },
    menuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 6.75,
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit * 0,
      paddingBottom: theme.spacing.unit / 2
    },
    listWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    },
    logoutStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 6.75,
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit * 0,
      marginBottom: theme.spacing.unit * 2
    }
  }
}

class MenuItems extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedItem: ''
    }
  }
  redirectToPath (path) {
    this.setState({
      selectedItem: path
    })

    const url = getReplacedString(path)
    Router.push(url)
  }

  render () {
    let orderStyle = this.props.isSideMenu
      ? this.props.customOrderStyle
      : this.props.classes.orderStyle

    let menuStyle = this.props.isSideMenu
      ? this.props.customMenuStyle
      : this.props.classes.menuStyle

    let logout = this.props.isSideMenu
      ? this.props.customMenuStyle
      : this.props.classes.logoutStyle

    return (
      <div className={this.props.classes.listWrapper}>
        <MenuItem
          className={orderStyle}
          selected={ORDER === this.state.selectedItem}
          onClick={this.redirectToPath.bind(this, ORDER)}
        >
          Orders
        </MenuItem>
        <MenuItem
          className={menuStyle}
          selected={PATIENT_LIST === this.state.selectedItem}
          onClick={this.redirectToPath.bind(this, PATIENT_LIST)}
        >
          Patients
        </MenuItem>
        <MenuItem
          className={menuStyle}
          selected={ADDRESS_LIST === this.state.selectedItem}
          onClick={this.redirectToPath.bind(this, ADDRESS_LIST)}
        >
          Addresses
        </MenuItem>
        <MenuItem
          className={menuStyle}
          selected={PRESCRIPTION === this.state.selectedItem}
          onClick={this.redirectToPath.bind(this, PRESCRIPTION)}
        >
          Prescriptions
        </MenuItem>
        <MenuItem
          className={menuStyle}
          selected={REFILL_PATIENTS === this.state.selectedItem}
          onClick={this.redirectToPath.bind(this, REFILL_PATIENTS)}
        >
          Past Medicines
        </MenuItem>
        <MenuItem
          className={menuStyle}
          selected={CARE_POINTS === this.state.selectedItem}
          onClick={this.redirectToPath.bind(this, CARE_POINTS)}
        >
          Care Points
        </MenuItem>
        {/* {!this.props.isSideMenu &&
          <MenuItem className={menuStyle}>Content</MenuItem>}
        {!this.props.isSideMenu &&
          <MenuItem className={menuStyle}>Bookmarks</MenuItem>} */}
        <MenuItem className={logout} onClick={this.props.logout}>
          Log out
        </MenuItem>
      </div>
    )
  }
}

export default withStyles(styles)(MenuItems)
