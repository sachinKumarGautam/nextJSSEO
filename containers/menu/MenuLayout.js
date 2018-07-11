import React, { Component } from 'react'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles'

import UserDetail from './UserDetail'
import MenuItems from '../../components/MenuItems'
import Button from '../../components/button'
import SubMenuList from './SubMenuList'

import { logoutWithReload } from '../../utils/removePersistState'

const styles = theme => {
  return {
    menuPaperProps: {
      width: theme.spacing.unit * 45,
    },
    menuStyle: {
      top: theme.spacing.unit * 4
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      color: theme.palette.primary.main
    },
    buttonStyle: {
      marginLeft: theme.spacing.unit * 7,
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 4
    },
    iconSize: {
      fontSize: theme.spacing.unit * 3.75
    }
  }
}

class MenuLayout extends Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  logout = () => {
    logoutWithReload()
  }

  render () {
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={this.state.anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AccountCircle
            classes={{
              root: this.props.classes.iconSize
            }}
          />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 360
            }
          }}
          className={this.props.classes.menuStyle}
        >
          <MenuItem>{
            <UserDetail
              customerState={this.props.customerState}
            />
          }</MenuItem>
          <Divider/>
          <MenuItems logout={this.logout.bind(this)} />
          <Button
            size='small'
            variant='outlined'
            color='primary'
            classes={{
              root: this.props.classes.buttonRoot,
              label: this.props.classes.buttonLabel
            }}
            className={this.props.classes.buttonStyle}
            onClick={this.handleClickOpen}
            label={'Chat now'}
          />
          <Divider/>
          <SubMenuList/>
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(MenuLayout)
