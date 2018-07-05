import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import CartDetailsWrapper from '../containers/cartDetails'

import {
  getCartDetailsLoading
} from '../containers/cartDetails/cartActions'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class CartDetails extends React.Component {
  componentDidMount () {
    const cartUid = this.props.cartState.payload.uid

    this.props.actions.getCartDetailsLoading(
      this.props.cartState,
      this.props.cartState.payload.uid
    )
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.cartState.payload.uid !== this.props.cartState.payload.uid) {
      const cartUid = nextProps.cartState.payload.uid

      this.props.actions.getCartDetailsLoading(
        nextProps.cartState,
        nextProps.cartState.payload.uid
      )
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div>
          <Paper className={this.props.classes.root} elevation={1}>
            <CartDetailsWrapper />
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getCartDetailsLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(CartDetails)))
