import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import { CART_DETAILS } from '../../routes/RouteConstant'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { ITEM_ADDED_TO_CART } from '../../containers/messages/cartMessages'
import { SNACK_BAR_DURATION } from '../../components/constants/Constants'

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
})

class GoToCartSnackbar extends React.Component {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'right'
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state })
  };

  handleClose = () => {
    this.props.goToCartSnackbar(this.props.cartState, false)
  };

  render () {
    const { vertical, horizontal, open } = this.state
    const { classes } = this.props
    return (
      <div>
        <Link prefetch href={CART_DETAILS}>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            autoHideDuration={SNACK_BAR_DURATION}
            open={this.props.cartState.payload.showAddToCartSnackBar}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'cart-items'
            }}
            action={[
              <IconButton
                key='goToCart'
                aria-label='Close'
                color='inherit'
                className={classes.close}
                onClick={this.handleClose}
              >
                <AddShoppingCartIcon />
              </IconButton>
            ]}
            message={<span>{ITEM_ADDED_TO_CART}</span>}
          />
        </Link>

      </div>
    )
  }
}

export default withStyles(styles)(GoToCartSnackbar)
