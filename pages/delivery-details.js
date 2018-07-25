import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import DeliveryDetailsWrapper from '../containers/deliveryDetails'

import Paper from '@material-ui/core/Paper'

import {
  getDeliveryDetailsListLoading,
  saveDeliveryAddressSelected,
  submitDeliveryDetailsLoading,
  updateAddressFormValue,
  getLocalityDetailListLoading
} from '../containers/deliveryDetails/deliveryDetailsActions'

import {
  checkPincodeLoading
} from '../containers/location/pincode/pincodeAction'

import {
  deliveryDetails
} from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  },
  wrapperStyle: {
    paddingBottom: theme.spacing.unit * 3,
    minHeight: theme.spacing.unit * 100
  }
})

class DeliveryDetails extends React.Component {
  componentDidMount () {
    // Represents to get delivery details.
    this.props.actions.getDeliveryDetailsListLoading(
      this.props.deliveryDetailsState,
      this.props.customerState.payload.id // pass customer id
    )
  }

  render () {
    return (
      <div>
        <Header title={deliveryDetails.title} />
        <div className={this.props.classes.wrapperStyle}>
          <Paper className={this.props.classes.root} elevation={1}>
            <DeliveryDetailsWrapper
              deliveryDetailsState={this.props.deliveryDetailsState}
              saveDeliveryAddressSelected={this.props.actions.saveDeliveryAddressSelected}
              submitDeliveryDetailsLoading={this.props.actions.submitDeliveryDetailsLoading}
              customerState={this.props.customerState}
              checkPincodeLoading={this.props.actions.checkPincodeLoading}
              updateAddressFormValue={this.props.actions.updateAddressFormValue}
              cartState={this.props.cartState}
              getLocalityDetailListLoading={this.props.actions.getLocalityDetailListLoading}
              checkPincodeState={this.props.checkPincodeState}
            />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    deliveryDetailsState: state.deliveryDetailsState,
    customerState: state.customerState,
    checkPincodeState: state.checkPincodeState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getDeliveryDetailsListLoading,
        saveDeliveryAddressSelected,
        submitDeliveryDetailsLoading,
        checkPincodeLoading,
        updateAddressFormValue,
        getLocalityDetailListLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(DeliveryDetails)))
