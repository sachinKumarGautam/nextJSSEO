import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => {
  return {
    languageSubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      paddingTop: 0,
      paddingBottom: theme.spacing.unit / 2,
      marginTop: theme.spacing.unit * 4
    },
    secondSubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      paddingTop: 0,
      paddingBottom: theme.spacing.unit / 2
    },
    privacySubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      marginBottom: theme.spacing.unit * 2,
      paddingTop: 0,
      paddingBottom: theme.spacing.unit / 2
    },
    listWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    }
  }
}

const SubMenuList = (props) => {
  return (
    <div className={props.classes.listWrapper}>
      <MenuItem className={props.classes.languageSubMenuStyle}>Languages (Hindi/English)</MenuItem>
      <MenuItem className={props.classes.secondSubMenuStyle}>About us</MenuItem>
      <MenuItem className={props.classes.secondSubMenuStyle}>Careers</MenuItem>
      <MenuItem className={props.classes.secondSubMenuStyle}>Contact us</MenuItem>
      <MenuItem className={props.classes.secondSubMenuStyle}>FAQ</MenuItem>
      <MenuItem className={props.classes.privacySubMenuStyle}>Privacy Policy</MenuItem>
    </div>
  )
}

export default withStyles(styles)(SubMenuList)
