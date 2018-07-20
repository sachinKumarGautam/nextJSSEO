import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PincodeDialog from '../../containers/location/pincode/PincodeDialog';

import { incrementCartItemLoading } from '../../containers/cartDetails/cartActions';
import {
  openPincodeDialog,
  checkPincodeLoading,
} from '../../containers/location/pincode/pincodeAction';

import withRoot from '../../src/withRoot';

export function commonWrapperHOC(Page) {
  class CommomWrapper extends React.Component {
    static getInitialProps(ctx) {
      if (Page.getInitialProps) {
        return Page.getInitialProps(ctx);
      }
    }

    constructor(props) {
      super(props);
      this.addToCartHandler = this.addToCartHandler.bind(this);
      this.state = {
        inProgressCartItem: {},
      };
    }

    addToCartHandler(inProgressCartItem, event) {
      if (this.props.checkPincodeState.payload.pincode) {
        this.props.actions.incrementCartItemLoading(
          this.props.cartState,
          inProgressCartItem
        );
      } else {
        this.setState({
          inProgressCartItem,
        });

        this.props.actions.openPincodeDialog(
          this.props.checkPincodeState,
          true
        );
      }
    }

    handleClose = () =>
      this.props.actions.openPincodeDialog(this.props.checkPincodeState, false);

    render() {
      const { checkPincodeState, actions } = this.props;
      const { inProgressCartItem } = this.state;
      return (
        <React.Fragment>
          <Page {...this.props} addToCartHandler={this.addToCartHandler} />
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
      );
    }
  }

  function mapStateToProps(state) {
    return {
      checkPincodeState: state.checkPincodeState,
      searchMedicineState: state.searchMedicineState,
      cartState: state.cartState,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
          incrementCartItemLoading,
          openPincodeDialog,
          checkPincodeLoading,
        },
        dispatch
      ),
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRoot(CommomWrapper));
}

// export default (mapStateToProps, mapDispatchToProps) => (Page) => {
//   Page = connect(mapStateToProps, mapDispatchToProps)(Page)
//   return commonWrapperHOC(Page)
// }
