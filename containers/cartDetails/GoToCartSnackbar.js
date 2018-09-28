import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Link from 'next/link'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { withStyles } from '@material-ui/core/styles'
import Router from 'next/router'
import { CART_DETAILS } from '../../routes/RouteConstant'
// import IconButton from '@material-ui/core/IconButton'
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { ITEM_ADDED_TO_CART } from '../../containers/messages/cartMessages'
import { SNACK_BAR_DURATION } from '../../components/constants/Constants'
import Button from '../../components/button'
import Typography from '@material-ui/core/Typography'

import { getReplacedString } from '../../utils/replaceConstants'

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
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    // marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.main,
    alignItems: 'center'
  },
  snackbarSuccess: {
    backgroundColor: theme.palette.customGreen.green400
  },
  anchorOriginBottomCenter: {
    marginBottom: theme.spacing.unit * 2
  }
})

class GoToCartSnackbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      vertical: 'top',
      horizontal: 'right'
    }
  }

  handleClose = () => {
    this.props.goToCartSnackbar(
      this.props.cartState,
      false,
      this.props.cartState.snackbarMsg
    )
  }

  render () {
    const { classes, cartState } = this.props
    const href = getReplacedString(CART_DETAILS)
    const snackbarMsg = cartState.snackbarMsg
    const isCartPage = Router.pathname === '/cart-details'
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          classes={{
            anchorOriginBottomCenter: classes.anchorOriginBottomCenter
          }}
          autoHideDuration={SNACK_BAR_DURATION}
          open={this.props.cartState.showAddToCartSnackBar}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'cart-items'
          }}
        >
          <SnackbarContent
            className={classes.snackbarSuccess}
            aria-describedby='client-snackbar'
            message={
              <div
                onMouseEnter={() => {
                  Router.prefetch(href)
                }}
                className={classes.buttonWrapper}
              >
                <Typography variant='caption' className={classes.text}>
                  {snackbarMsg}
                </Typography>
                {!isCartPage &&
                  <Link href={href}>
                    <Button
                      size='small'
                      variant='flat'
                      color={'primary'}
                      className={classes.editButton}
                      classes={{
                        label: classes.editButtonLabel
                      }}
                      label={'Go To Cart'}
                      onClick={this.handleClose}
                    />
                  </Link>}
              </div>
            }
          />
        </Snackbar>
      </div>
    )
  }
}

export default withStyles(styles)(GoToCartSnackbar)
