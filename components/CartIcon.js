import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  menuStyle: {
    top: theme.spacing.unit * 5
  },
  summaryWrapperStyle: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  orderSummary: {
    ...theme.typography.body4,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGreen.green300
  }
})

class CartIcon extends Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  render () {
    const { classes } = this.props
    return (
      <div>
        <IconButton
          aria-owns={this.state.anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color='primary'
          className={classes.button}
          aria-label='Add to shopping cart'
        >
          <Badge className={classes.margin} badgeContent={4} color='primary'>
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 280
            }
          }}
          className={classes.menuStyle}
        >
          <MenuItem>
            <span className={classes.summaryWrapperStyle}>
              <span className={classes.orderSummary}>
                Order Summary
              </span>
              <span className={classes.orderSummary}>
                1 item(s)
              </span>
            </span>
          </MenuItem>
          <Divider/>
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(CartIcon)
