import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PincodeDialog from '../../containers/location/pincode/PincodeDialog'

import {
  incrementCartItemLoading,
  getAnonymousCartIdLoading,
  resetCartState,
  resetCartItemErrorState,
  resetCartLoadingState,
  updateShowNoCartIdDialogFlag
} from '../../containers/cartDetails/cartActions'

import { handleSessionExpiration } from '../../containers/login/loginActions'

import {
  openPincodeDialog,
  checkPincodeLoading,
  resetPincodeState,
  changePincodeValue
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
  INVALID_CART_DESCRIPTION,
  NO_CART_ID_TEXT,
  NO_CART_ID_DESCRIPTION
} from '../../containers/messages/errorMessages'

import {
  SESSION_EXPIRED,
  SESSION_EXPIRED_CONTENT
} from '../../containers/messages/commonMsg'

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
      this.state = {
        inProgressCartItem: {}
      }
    }

    componentDidMount () {
      this.props.actions.resetCartLoadingState(this.props.cartState)
      this.props.actions.changePincodeValue(
        this.props.checkPincodeState,
        this.props.checkPincodeState.payload.pincode
      )
    }

    addToCartHandler (inProgressCartItem, event) {
      if (!this.props.cartState.payload.uid) {
        const isShowNoCartIdDialog = true

        this.props.actions.updateShowNoCartIdDialogFlag(
          this.props.cartState,
          isShowNoCartIdDialog
        )
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
      this.props.actions.resetPincodeState(this.props.checkPincodeState)
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

    handleShowNoCartIdDialogOk () {
      const isShowNoCartIdDialog = false

      this.props.actions.updateShowNoCartIdDialogFlag(
        this.props.cartState,
        isShowNoCartIdDialog
      )

      this.props.actions.getAnonymousCartIdLoading(
        this.props.cartState,
        this.props.checkPincodeState.payload.source,
        this.props.checkPincodeState.payload.id
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
      } else if (this.props.cartState.isShowNoCartIdDialog) {
        return (
          <DialogueErrorMessage
            dialogueTitle={NO_CART_ID_TEXT}
            dialogueContent={NO_CART_ID_DESCRIPTION}
            isShowNoCartIdDialog={this.props.cartState.isShowNoCartIdDialog}
            onClickOk={this.handleShowNoCartIdDialogOk.bind(this)}
          />
        )
      } else if (this.props.cartState.errorState.isError) {
        return (
          <SnackbarErrorMessage
            error={this.props.cartState.errorState.error}
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
      const isShowNoCartIdDialog = cartState.isShowNoCartIdDialog

      return (
        <React.Fragment>
          <ActivityIndicator
            isLoading={this.props.cartState.isLoading}
            LoaderComp={<Loader isLoading loaderType={'fullPageSpinner'} />}
            isError={
              cartState.payload.cart_items.errorState.isError ||
                isCartInvalid ||
                isSessionExpired ||
                isShowNoCartIdDialog ||
                cartState.errorState.isError
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
            changePincodeValue={actions.changePincodeValue}
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
          resetPincodeState,
          updateShowNoCartIdDialogFlag,
          changePincodeValue
        },
        dispatch
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRoot(CommonWrapper))
}
