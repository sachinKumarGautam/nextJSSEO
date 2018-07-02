import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import MenuItem from '@material-ui/core/MenuItem';

import Link from 'next/link'

const styles = theme => {
  return {
    orderStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey500,
      marginTop: theme.spacing.unit
    },
    menuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit * 0
    },
    listWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    }
  }
}

const MenuItems = (props) => {
  return (
    <div className={props.classes.listWrapper}>
        <MenuItem
          className={
            props.isSideMenu ? props.customOrderStyle : props.classes.orderStyle
          }
          onClick={<Link as={`/orders`}/>}
        >
          Orders
        </MenuItem>

      <MenuItem
        className={
          props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
        }
      >
        Patients
      </MenuItem>
      <MenuItem
        className={
          props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
        }
      >
        Addresses
      </MenuItem>
      <MenuItem
        className={
          props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
        }
      >
        Prescriptions
      </MenuItem>
      {
        !props.isSideMenu &&
        <MenuItem
          className={
            props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
          }
        >
          Content
        </MenuItem>
      }
      {
        !props.isSideMenu &&
        <MenuItem
          className={
            props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
          }
        >
          Bookmarks
        </MenuItem>
      }
      <MenuItem
        className={
          props.isSideMenu ? props.customMenuStyle : props.classes.menuStyle
        }
      >
        Log out
      </MenuItem>
    </div>
  )
}

export default withStyles(styles)(MenuItems)
