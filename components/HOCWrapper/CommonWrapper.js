import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PincodeDialog from '../../containers/location/pincode/PincodeDialog'

import {
  incrementCartItemLoading,
  getAnonymousCartIdLoading,
  resetCartState,
  resetCartItemErrorState,
  resetCartLoadingState
} from '../../containers/cartDetails/cartActions'

import { handleSessionExpiration } from '../../containers/login/loginActions'

import {
  openPincodeDialog,
  checkPincodeLoading,
  resetPincodeState
} from '../../containers/location/pincode/pincodeAction'

import withRoot from '../../src/withRoot'

import ActivityIndicator from '../activityIndicator/index'
import SnackbarErrorMessage
  from '../activityIndicator/error/SnackbarErrorMessage'
import DialogueErrorMessage
  from '../activityIndicator/error/DialogueErrorMessage'
import Loader from '../activityIndicator/loader'

import {
  INVALID_CART_TEXT,
  INVALID_CART_DESCRIPTION
} from '../../containers/messages/errorMessages'

import {
  SESSION_EXPIRED,
  SESSION_EXPIRED_CONTENT
} from '../../containers/messages/commonMsg'

import {
  MEDICINE_QUANTITY_ALERT
} from '../../containers/messages/cartMessages'

import Snackbar from '@material-ui/core/Snackbar'

export function withCommonWrapper (Page) {
  class CommonWrapper extends React.Component {
    static getInitialProps (ctx) {
      if (Page.getInitialProps) {
        return Page.getInitialProps(ctx)
      }
    }

    constructor (props) {
      super(props)
      this.addToCartHandler = this.addToCartHandler.bind(this)
      this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this)
      this.state = {
        inProgressCartItem: {},
        openSnackbar: false
      }
    }

    componentDidMount () {
      this.props.actions.resetCartLoadingState(this.props.cartState)
    }

    handleCloseSnackbar = () => (
      this.setState({
        openSnackbar: !this.state.openSnackbar
      })
    )

    addToCartHandler (inProgressCartItem, event) {
      if (inProgressCartItem.max_order_quantity &&
        inProgressCartItem.quantity >= inProgressCartItem.max_order_quantity) {
        this.handleCloseSnackbar()
      } else {
        if (this.props.checkPincodeState.payload.pincode) {
          this.props.actions.incrementCartItemLoading(
            this.props.cartState,
            inProgressCartItem
          )
        } else {
          this.setState({
            inProgressCartItem
          })

          this.props.actions.openPincodeDialog(this.props.checkPincodeState, {
            isOpen: true
          })
        }
      }
    }

    handleClose = () => {
      this.props.actions.openPincodeDialog(this.props.checkPincodeState, false)
      this.props.actions.resetPincodeState()
    }

    handleDialogOk () {
      this.props.actions.resetCartState()
      this.props.actions.getAnonymousCartIdLoading(
        this.props.cartState,
        this.props.checkPincodeState.payload.source,
        this.props.checkPincodeState.payload.id,
        ''
      )
    }

    resetState () {
      this.props.actions.resetCartItemErrorState()
    }

    getErrorComp = (isCartInvalid, isSessionExpired) => {
      if (isSessionExpired) {
        // this.props.actions.handleSessionExpiration(this.props.loginState, false)
        return (
          <DialogueErrorMessage
            dialogKey={'sessionExpired'}
            handleSessionExpiration={this.props.actions.handleSessionExpiration}
            loginState={this.props.loginState}
            isSessionExpired={isSessionExpired}
            dialogueTitle={SESSION_EXPIRED}
            dialogueContent={SESSION_EXPIRED_CONTENT}
            onClickOk={this.handleDialogOk.bind(this)}
          />
        )
      } else if (isCartInvalid) {
        return (
          <DialogueErrorMessage
            dialogueTitle={INVALID_CART_TEXT}
            dialogueContent={INVALID_CART_DESCRIPTION}
            onClickOk={this.handleDialogOk.bind(this)}
          />
        )
      } else {
        return (
          <SnackbarErrorMessage
            error={this.props.cartState.payload.cart_items.errorState.error}
            resetState={this.resetState.bind(this)}
          />
        )
      }
    }

    render () {
      const { checkPincodeState, cartState, actions, loginState } = this.props
      const { inProgressCartItem } = this.state
      const isSessionExpired = loginState.isSessionExpired
      const isCartInvalid = cartState.payload.is_cart_invalid
      return (
        <React.Fragment>
          <ActivityIndicator
            isLoading={this.props.cartState.isLoading}
            LoaderComp={<Loader isLoading loaderType={'fullPageSpinner'} />}
            isError={
              cartState.payload.cart_items.errorState.isError ||
              isCartInvalid ||
              isSessionExpired
            }
            ErrorComp={this.getErrorComp(isCartInvalid, isSessionExpired)}
            bottomError
          >
            <Page {...this.props} addToCartHandler={this.addToCartHandler} />
          </ActivityIndicator>
          <PincodeDialog
            {...this.props}
            open={checkPincodeState.isPincodeDialogOpen}
            onSubmit={actions.checkPincodeLoading}
            incrementCartItemLoading={actions.incrementCartItemLoading}
            inProgressCartItem={inProgressCartItem}
            handleClose={this.handleClose}
            checkPincodeState={checkPincodeState}
          />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={this.state.openSnackbar}
            autoHideDuration={6000}
            onClose={this.handleCloseSnackbar}
            ContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id='message-id'>{MEDICINE_QUANTITY_ALERT}</span>}
          />
        </React.Fragment>
      )
    }
  }

  function mapStateToProps (state) {
    return {
      checkPincodeState: state.checkPincodeState,
      searchMedicineState: state.searchMedicineState,
      cartState: state.cartState,
      loginState: state.loginState
    }
  }

  function mapDispatchToProps (dispatch) {
    return {
      actions: bindActionCreators(
        {
          incrementCartItemLoading,
          openPincodeDialog,
          checkPincodeLoading,
          getAnonymousCartIdLoading,
          resetCartItemErrorState,
          resetCartState,
          resetCartLoadingState,
          handleSessionExpiration,
          resetPincodeState
        },
        dispatch
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRoot(CommonWrapper))
}
