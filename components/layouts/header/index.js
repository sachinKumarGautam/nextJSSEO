import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import withRoot from '../../../src/withRoot'

// import Head from './Head'
import AppBar from '@material-ui/core/AppBar'
import Button from '../../button'
import Toolbar from '@material-ui/core/Toolbar'
import AutosuggestSearch from '../../AutosuggestSearch'
import Subheader from './Subheader'
import CartIcon from '../../CartIcon'
import Login from '../../../containers/login'
import getPageContext from '../../../src/getPageContext'
import MenuWrapper from '../../../containers/menu'

import {
  updateIsCartOpenLoginFlag
} from '../../../containers/cartDetails/cartActions'

class Header extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.pageContext = getPageContext()
    this.openLoginModal = this.openLoginModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
    this.state = {
      openLoginDialog: false
    }
  }

  openLoginModal () {
    this.setState({
      openLoginDialog: true
    })
  }

  closeLoginModal () {
    const isCartOpenLoginDialog = false

    this.setState({
      openLoginDialog: false
    })

    this.props.actions.updateIsCartOpenLoginFlag(
      this.props.cartState,
      isCartOpenLoginDialog
    )
  }

  render () {
    const { classes, loginState, customerState } = this.props
    return (
      <div className={classes.root}>
        <AppBar elevation={1} className={classes.appBar} position='fixed'>
          {/* <Head
          pageTitle={'Lifcare Product Details Page'}
        /> */}
          <div className={classes.appBarInnerComp}>
            <Toolbar
              classes={{
                root: classes.toolbar
              }}
              disableGutters
            >
              <img src='/static/images/logo-green.svg' />
              <AutosuggestSearch />
              <CartIcon
                cartState={this.props.cartState}
              />
              {loginState.isAuthenticated && <MenuWrapper />}
              { !loginState.isAuthenticated &&
                <Button
                  variant='raised'
                  size='medium'
                  color='primary'
                  aria-label='login'
                  onClick={this.openLoginModal}
                  className={classes.button}
                  label={'Login / Register'}
                />}
              {
                (
                  this.state.openLoginDialog ||
                  this.props.cartState.isCartOpenLoginDialog
                ) &&
                <Login
                  openLoginDialog={
                    this.state.openLoginDialog ||
                    this.props.cartState.isCartOpenLoginDialog
                  }
                  openLoginModal={this.openLoginModal}
                  closeLoginModal={this.closeLoginModal}
                  loginState={loginState}
                  customerState={customerState}
                />
              }
            </Toolbar>
            <Subheader />
          </div>
        </AppBar>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#fff'
  },
  appBarInnerComp: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.lg,
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    paddingLeft: '56px',
    paddingRight: '36px'
  },
  toolbar: {
    // margin: `0 ${theme.spacing.unit * 3}px`,
    marginBottom: 0,
    height: theme.spacing.unit * 7.5,
    display: 'flex',
    // width: '100%',
    justifyContent: 'space-between'
  },
  button: {
    color: 'white',
    flexGrow: 0,
    borderRadius: theme.spacing.unit * 4
  }
})

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    loginState: state.loginState,
    customerState: state.customerState,
    cartState: state.cartState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateIsCartOpenLoginFlag
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(Header)))
