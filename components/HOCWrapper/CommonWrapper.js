import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PincodeDialog from '../../containers/location/pincode/PincodeDialog'

import {
  incrementCartItemLoading,
  getAnonymousCartIdLoading,
  resetCartState,
  resetCartItemErrorState
} from '../../containers/cartDetails/cartActions'
import {
  openPincodeDialog,
  checkPincodeLoading
} from '../../containers/location/pincode/pincodeAction'

import withRoot from '../../src/withRoot'

import ActivityIndicator from '../activityIndicator/index'
import SnackbarErrorMessage from '../activityIndicator/error/SnackbarErrorMessage'
import DialogueErrorMessage from '../activityIndicator/error/DialogueErrorMessage'

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

    addToCartHandler (inProgressCartItem, event) {
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

    handleClose = () =>
      this.props.actions.openPincodeDialog(this.props.checkPincodeState, false)

    handleCartInvalid () {
      this.props.resetCartState()
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

    render () {
      const { checkPincodeState, actions } = this.props

      const { inProgressCartItem } = this.state
      return (
        <React.Fragment>
          <ActivityIndicator
            isError={
              this.props.cartState.payload.cart_items.errorState.isError ||
              this.props.cartState.payload.is_cart_invalid
            }
            ErrorComp={
              this.props.cartState.payload.is_cart_invalid
                ? <DialogueErrorMessage
                  dialogueTitle={'Invalid Cart'}
                  dialogueContent={'This cart became invalid as you have already placed this order!'}
                  handleCartInvalid={this.handleCartInvalid.bind(this)}
                />
                : <SnackbarErrorMessage
                  error={this.props.cartState.payload.cart_items.errorState.error}
                  resetState={this.resetState.bind(this)}
                />
            }
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
        </React.Fragment>
      )
    }
  }

  function mapStateToProps (state) {
    return {
      checkPincodeState: state.checkPincodeState,
      searchMedicineState: state.searchMedicineState,
      cartState: state.cartState
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
          resetCartItemErrorState
        },
        dispatch
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRoot(CommonWrapper))
}
