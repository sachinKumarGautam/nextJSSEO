import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer/Footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import CartDetailsWrapper from '../containers/cartDetails'

import {
  getAnonymousCartIdLoading
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
  componentDidMount() {
    this.props.actions.getAnonymousCartIdLoading(
      this.props.cartState,
      'MWEB',
      100,
      ''
    )

    this.props.actions.getCartDetailsLoading(
      this.props.cartState,
      this.props.Props.cartState.payload.uid
    )
  }

  render() {
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
        getAnonymousCartIdLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(CartDetails)))
