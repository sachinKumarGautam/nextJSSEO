import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import MenuItem from '@material-ui/core/MenuItem'

import Router from 'next/router'
import {
  PRIVACY_POLICY,
  ABOUT_US,
  FAQ,
  TERMS
} from '../../routes/RouteConstant'

import { getReplacedString } from '../../utils/replaceConstants'

const styles = theme => {
  return {
    languageSubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 6.75,
      color: theme.palette.customGrey.grey500,
      paddingTop: 0,
      paddingBottom: theme.spacing.unit / 2,
      marginTop: theme.spacing.unit * 4
    },
    secondSubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 6.75,
      color: theme.palette.customGrey.grey500,
      paddingTop: 0,
      paddingBottom: theme.spacing.unit / 2
    },
    privacySubMenuStyle: {
      ...theme.typography.caption,
      paddingLeft: theme.spacing.unit * 6.75,
      color: theme.palette.customGrey.grey500,
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

class SubMenuList extends React.Component {
  redirectToPath(path) {
    const url = getReplacedString(path)
    Router.push(url)
  }
  render() {
    return (
      <div className={this.props.classes.listWrapper}>
        {/* <MenuItem className={props.classes.languageSubMenuStyle}>Languages (Hindi/English)</MenuItem> */}
        <MenuItem
          className={this.props.classes.languageSubMenuStyle}
          onClick={this.redirectToPath.bind(this, ABOUT_US)}
        >
          About us
        </MenuItem>
        {/* <MenuItem className={props.classes.secondSubMenuStyle}>Careers</MenuItem> */}
        {/* <MenuItem className={props.classes.secondSubMenuStyle}>Contact us</MenuItem> */}
        <MenuItem
          className={this.props.classes.secondSubMenuStyle}
          onClick={this.redirectToPath.bind(this, FAQ)}
        >
          FAQ
        </MenuItem>
        <MenuItem
          className={this.props.classes.secondSubMenuStyle}
          onClick={this.redirectToPath.bind(this, TERMS)}
        >
          Terms & conditions
        </MenuItem>
        <MenuItem
          className={this.props.classes.privacySubMenuStyle}
          onClick={this.redirectToPath.bind(this, PRIVACY_POLICY)}
        >
          Privacy & Data Security
        </MenuItem>
      </div>
    )
  }
}

export default withStyles(styles)(SubMenuList)
