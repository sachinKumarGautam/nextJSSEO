import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Button from './button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  menuPaperProps: {
    width: theme.spacing.unit * 32
  },
  menuStyle: {
    top: theme.spacing.unit * 5
  },
  summaryStyle: {
    ...theme.typography.body3,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGreen.green300
  },
  itemStyle: {
    ...theme.typography.body3,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGreen.green300
  },
  summaryMenuWrapper: {
    justifyContent: 'space-between',
    paddingTop: 0,
    paddingBottom: theme.spacing.unit
  },
  medicineNameStyle: {
    ...theme.typography.body3,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey700
  },
  priceStyle: {
    ...theme.typography.body4,
    color: theme.palette.customGrey.grey700
  },
  medicineDetailWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
   },
  noItemTextStyle: {
    ...theme.typography.body4,
    color: theme.palette.customGrey.grey200
  },
  buttonRoot: {
    border: `1px solid ${theme.palette.primary.main}`
  },
  buttonLabel: {
    ...theme.typography.body3,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold
  },
  buttonStyle: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
})

class CartIcon extends Component {
  state = {
    anchorEl: null,
    quantity: 4
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
          aria-owns={this.state.anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color='primary'
          className={classes.button}
          aria-label='Add to shopping cart'
        >
          <Badge className={classes.margin} badgeContent={this.state.quantity} color='primary'>
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 256
            }
          }}
          className={classes.menuStyle}
        >
          <MenuItem className={classes.summaryMenuWrapper}>
            <Typography
              variant="caption"
              className={classes.summaryStyle}
            >
              Order Summary
            </Typography>
            <Typography
              variant="caption"
              className={classes.itemStyle}
            >
              2 item(s)
            </Typography>
          </MenuItem>
          <Divider/>
          {/* <MenuItem >

          </MenuItem> */}
          <div className={classes.medicineDetailWrapper}>
            <Typography
              variant="caption"
              className={
                this.state.quantity
                  ? classes.medicineNameStyle : classes.noItemTextStyle
              }
            >
              {
                this.state.quantity  ? 'Glycomet-GP 2 Tablet'
                : 'There is no item in your cart yet'
              }
            </Typography>
            {
              this.state.quantity ?
              <Typography
                variant="caption"
                className={classes.priceStyle}
              >
                Rs. 55.5
              </Typography>
              : null
            }
          </div>
          <div className={classes.buttonStyle}>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: classes.buttonRoot,
                label: classes.buttonLabel
              }}
              onClick={this.handleClickOpen}
              label={'PROCEED TO CART'}
            />
          </div>
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(CartIcon)
