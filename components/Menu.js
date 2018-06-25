import React, { Component } from 'react'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import Button from './button'

const ITEM_HEIGHT = 48;

const secondMenuList = [
  {
    label: 'Orders'
  },{
    label: 'Patients'
  },{
    label: 'Addresses'
  },{
    label: 'Prescriptions'
  },{
    label: 'Care Points / Care Points +'
  },{
    label: 'Content'
  },{
    label: 'Bookmarks'
  },{
    label: 'Log out'
  }
]

const thirdMenuList = [
  {
    label: 'Languages (Hindi/English)'
  },{
    label: 'About us'
  },{
    label: 'Careers'
  },{
    label: 'Contact us'
  },{
    label: 'FAQ'
  },{
    label: 'Privacy Policy'
  }
]

class MenuLayout extends Component {
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
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 360,
            }
          }}
        >
          <MenuItem
            style={{
              paddingLeft: '53px',
              color: '#78b437',
              letterSpacing: '0.2px',
              fontSize: '20px',
              paddingTop: '27px',
              paddingBottom: '20px'
            }}
          >
            Hi Shankar
          </MenuItem>
          <Divider />
          {
            secondMenuList.map((item) => (
              <MenuItem
                style={{
                  paddingLeft: '54px',
                  color: '#4a4a4a',
                  letterSpacing: '0.2px',
                  fontSize: '14px',
                  paddingTop: '4px'
                }}
              >
                {item.label}
              </MenuItem>
            ))
          }
          <MenuItem style={{marginLeft: '54px'}}>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              // classes={{
              //   root: props.classes.buttonRoot,
              //   label: props.classes.buttonLabel
              // }}
              style={{float: 'right'}}
              onClick={this.handleClickOpen}
              label={'Chat now'}
            />
          </MenuItem>
          <Divider />
          {
            thirdMenuList.map((item) => (
              <MenuItem
                style={{
                  paddingLeft: '54px',
                  color: '#bbbbbb',
                  letterSpacing: '0.2px',
                  fontSize: '14px',
                  paddingTop: '0px'
                }}
              >
                {item.label}
              </MenuItem>
            ))
          }
        </Menu>
      </div>
    );
  }
}

export default MenuLayout;
