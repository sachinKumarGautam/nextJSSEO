import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import ReactTooltip from 'react-tooltip'

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
    paddingBottom: theme.spacing.unit,
    display: 'flex'
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
    paddingRight: theme.spacing.unit / 2
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
  },
  paper: {
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 25,
    backgroundColor: `${theme.palette.secondary.main} !important`,
    pointerEvents: 'auto !important',
    '&:after': {
      borderBottomColor: `${theme.palette.secondary.main} !important`
    },
    '&:hover': {
      visibility: 'visible !important',
      opacity: '1 !important',
    },
    borderRadius: '4px',
    boxShadow: '0 4px 4px 2px rgba(0, 0, 0, 0.14)'
  },
  moleculeTag: {
    textDecoration: 'none'
  }
})

class CartIcon extends Component {
  state = {
    quantity: 4
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <a
          className={classes.moleculeTag}
          data-tip
          data-for='cartIcon'
        >
          <IconButton
            color='primary'
            className={classes.button}
            aria-label='Add to shopping cart'
          >
            <Badge className={classes.margin} badgeContent={this.state.quantity} color='primary'>
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </a>
        <ReactTooltip
          id='cartIcon'
          effect='solid'
          place='bottom'
          className={classes.paper}
          delayHide={500}
          delayShow={100}
        >
          <div className={classes.summaryMenuWrapper}>
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
          </div>
          <Divider/>
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
        </ReactTooltip>
      </div>
    )
  }
}

export default withStyles(styles)(CartIcon)
