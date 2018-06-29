import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    orderStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey500,
      marginTop: theme.spacing.unit * 3
    },
    menuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit
    },
    listWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    }
  }
}

const MenuItems = (props) => {
  return (
    <div>
      <ul className={props.classes.listWrapper}>
        <li
          className={
            props.isSideMenu ? props.customOrderStyle : props.classes.orderStyle
          }
        >
          Orders
        </li>
        <li
          className={
            props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
          }
        >
          Patients
        </li>
        <li
          className={
            props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
          }
        >
          Addresses
        </li>
        <li
          className={
            props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
          }
        >
          Prescriptions
        </li>
        <li
          className={
            props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
          }
        >
          Care Points / Care Points +
        </li>
        {
          !props.isSideMenu &&
          <li
            className={
              props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
            }
          >
            Content
          </li>
        }{
          !props.isSideMenu &&
          <li
            className={
              props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
            }
          >
            Bookmarks
          </li>
        }
        <li
          className={
            props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
          }
        >
          Log out
        </li>
      </ul>
    </div>
  )
}

export default withStyles(styles)(MenuItems)
