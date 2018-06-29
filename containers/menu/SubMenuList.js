import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    languageSubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      paddingTop: theme.spacing.unit * 6
    },
    secondSubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      paddingTop: theme.spacing.unit
    },
    privacySubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      marginBottom: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit
    },
    listWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    }
  }
}

const SubMenuList = (props) => {
  return (
    <div>
      <ul className={props.classes.listWrapper}>
        <li className={props.classes.languageSubMenuStyle}>Languages (Hindi/English)</li>
        <li className={props.classes.secondSubMenuStyle}>About us</li>
        <li className={props.classes.secondSubMenuStyle}>Careers</li>
        <li className={props.classes.secondSubMenuStyle}>Contact us</li>
        <li className={props.classes.secondSubMenuStyle}>FAQ</li>
        <li className={props.classes.privacySubMenuStyle}>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default withStyles(styles)(SubMenuList)
