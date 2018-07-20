import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import { CART_DETAILS } from '../../routes/RouteConstant'
// import IconButton from '@material-ui/core/IconButton'
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { ITEM_ADDED_TO_CART } from '../../containers/messages/cartMessages'
import { SNACK_BAR_DURATION } from '../../components/constants/Constants'
import Button from '../../components/button'
import green from '@material-ui/core/colors/green'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  couponButtonRoot: {
    border: 'none',
    backgroundColor: theme.palette.customGrey.grey200,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.customGrey.grey200
    }
  },
  editButton: {
    textAlign: 'center'
  },
  editButtonLabel: {
    ...theme.typography.caption,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main
  },
  buttonWrappr: {
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.main
  },
  snackbarSuccess: {
    backgroundColor: green[600]
  }
})

class GoToCartSnackbar extends React.Component {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'right'
  }

  handleClick = state => () => {
    this.setState({ open: true, ...state })
  }

  handleClose = () => {
    this.props.goToCartSnackbar(this.props.cartState, false)
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <Link prefetch href={CART_DETAILS}>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            className={classes.snackbarSuccess}
            autoHideDuration={SNACK_BAR_DURATION}
            open={this.props.cartState.payload.showAddToCartSnackBar}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'cart-items'
            }}
            // action={[
            //   <IconButton
            //     key='goToCart'
            //     aria-label='Close'
            //     color='inherit'
            //     className={classes.close}
            //     onClick={this.handleClose}
            //   >
            //     <AddShoppingCartIcon />
            //   </IconButton>
            // ]}
            message={
              <div className={classes.buttonWrappr}>
                <Typography variant='caption' className={classes.text}>
                  {ITEM_ADDED_TO_CART}
                </Typography>
                <Button
                  size='small'
                  variant='success'
                  className={classes.editButton}
                  classes={{
                    root: classes.couponButtonRoot,
                    label: classes.editButtonLabel
                  }}
                  label={'Go To Cart'}
                  onClick={this.handleClose}
                />
              </div>
            }
          />
        </Link>

      </div>
    )
  }
}

export default withStyles(styles)(GoToCartSnackbar)
