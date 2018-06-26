import React, { Component } from 'react'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import Button from './button'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    menuPaperProps: {
      width: theme.spacing.unit * 54,
    },
    menuStyle: {
      top: theme.spacing.unit * 5
    },
    nameMenuStyle: {
      ...theme.typography.subheading,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGreen.green300,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
    OrderSubMenuStyle: {
      ...theme.typography.body2,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey500,
      marginTop: theme.spacing.unit
    },
    firstSubMenuStyle: {
      ...theme.typography.body2,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit * 0
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      color: theme.palette.primary.main
    },
    buttonStyle: {
      marginLeft: theme.spacing.unit * 7,
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 4
    },
    languageSubMenuStyle: {
      ...theme.typography.body2,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      marginTop: theme.spacing.unit * 5
    },
    secondSubMenuStyle: {
      ...theme.typography.body2,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      paddingTop: theme.spacing.unit * 0
    },
    privacySubMenuStyle: {
      ...theme.typography.body2,
      paddingLeft: theme.spacing.unit * 7,
      color: theme.palette.customGrey.grey300,
      paddingTop: theme.spacing.unit * 0,
      marginBottom: theme.spacing.unit * 3
    }
  }
}

class LoginUserMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={this.state.anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 432
            }
          }}
          className={this.props.classes.menuStyle}
        >
          <MenuItem className={this.props.classes.nameMenuStyle}>
            Hi Shankar
          </MenuItem>
          <Divider />
          <MenuItem className={this.props.classes.OrderSubMenuStyle}>
            Orders
          </MenuItem>
          <MenuItem className={this.props.classes.firstSubMenuStyle}>
            Patients
          </MenuItem>
          <MenuItem className={this.props.classes.firstSubMenuStyle}>
            Addresses
          </MenuItem>
          <MenuItem className={this.props.classes.firstSubMenuStyle}>
            Prescriptions
          </MenuItem>
          <MenuItem className={this.props.classes.firstSubMenuStyle}>
            Care Points / Care Points +
          </MenuItem>
          <MenuItem className={this.props.classes.firstSubMenuStyle}>
            Content
          </MenuItem>
          <MenuItem className={this.props.classes.firstSubMenuStyle}>
            Bookmarks
          </MenuItem>
          <MenuItem className={this.props.classes.firstSubMenuStyle}>
            Log out
          </MenuItem>
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
          <Divider />
          <MenuItem className={this.props.classes.languageSubMenuStyle}>
            Languages (Hindi/English)
          </MenuItem>
          <MenuItem className={this.props.classes.secondSubMenuStyle}>
            About us
          </MenuItem>
          <MenuItem className={this.props.classes.secondSubMenuStyle}>
            Careers
          </MenuItem>
          <MenuItem className={this.props.classes.secondSubMenuStyle}>
            Contact us
          </MenuItem>
          <MenuItem className={this.props.classes.secondSubMenuStyle}>
            FAQ
          </MenuItem>
          <MenuItem className={this.props.classes.privacySubMenuStyle}>
            Privacy Policy
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(LoginUserMenu);
