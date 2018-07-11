import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'

// import Head from './Head'
import AppBar from '@material-ui/core/AppBar'
import Button from '../../button'
import Toolbar from '@material-ui/core/Toolbar'
import SearchMedicine from '../../../containers/searchMedicine'
import Subheader from './Subheader'
import CartIcon from '../../CartIcon'
import Login from '../../../containers/login'
import getPageContext from '../../../src/getPageContext'
import MenuWrapper from '../../../containers/menu'
import { searchMedicineLoading, updateInProgressMedicineState } from '../../../containers/searchMedicine/searchMedicineAction'
import { checkPincodeLoading } from '../../../containers/location/pincode/pincodeAction'

import GoToCartSnackbar from '../../../containers/cartDetails/GoToCartSnackbar'

import {
  getAnonymousCartIdLoading,
  updateIsCartOpenLoginFlag,
  incrementCartItemLoading,
  updateIsCartOpenRegisterModalFlag,
  goToCartSnackbar
} from '../../../containers/cartDetails/cartActions'

import {
  HOME_PAGE
} from '../../../routes/RouteConstant'

import Router from 'next/router'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: theme.palette.common.white
  },
  appBarInnerComp: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth: theme.breakpoints.values.lg,
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 4.5
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

  componentDidMount () {
    if (!this.props.loginState.isAuthenticated && !this.props.cartState.payload.uid) {
      this.props.actions.getAnonymousCartIdLoading(
        this.props.cartState,
        this.props.checkPincodeState.payload.source,
        this.props.checkPincodeState.payload.id,
        ''
      )
    }
  }

  openLoginModal () {
    this.setState({
      openLoginDialog: true
    })
  }

  closeLoginModal () {
    const isCartOpenLoginDialog = false
    const isCartOpenRegisterDialog = false

    this.setState({
      openLoginDialog: false
    })

    this.props.actions.updateIsCartOpenLoginFlag(
      this.props.cartState,
      isCartOpenLoginDialog
    )

    this.props.actions.updateIsCartOpenRegisterModalFlag(
      this.props.cartState,
      isCartOpenRegisterDialog
    )
  }

  render () {
    const {
      classes,
      searchMedicineState,
      actions,
      loginState,
      customerState,
      checkPincodeState
    } = this.props

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
              <img
                src='/static/images/logo-green.svg'
                onClick={() => { Router.push({ pathname: HOME_PAGE}) }}
              />
              <SearchMedicine
                searchMedicineState={searchMedicineState}
                cartState={this.props.cartState}
                incrementCartItemLoading={this.props.actions.incrementCartItemLoading}
                checkPincodeState={checkPincodeState}
                checkPincodeLoading={this.props.actions.checkPincodeLoading}
                searchMedicineLoading={actions.searchMedicineLoading}
                updateInProgressMedicineState={actions.updateInProgressMedicineState}
              />
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
                  this.props.cartState.isCartOpenLoginDialog ||
                  this.props.cartState.isCartOpenRegisterDialog
                ) &&
                <Login
                  openLoginDialog={
                    this.state.openLoginDialog ||
                    this.props.cartState.isCartOpenLoginDialog ||
                    this.props.cartState.isCartOpenRegisterDialog
                  }
                  openLoginModal={this.openLoginModal}
                  isCartOpenRegisterDialog={this.props.cartState.isCartOpenRegisterDialog}
                  closeLoginModal={this.closeLoginModal}
                  loginState={loginState}
                  customerState={customerState}
                />
              }
            </Toolbar>
            <Subheader
              isAuthenticated={this.props.loginState.isAuthenticated}
            />
            <GoToCartSnackbar
              goToCartSnackbar={this.props.actions.goToCartSnackbar}
              cartState={this.props.cartState}
            />
          </div>
        </AppBar>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loginState: state.loginState,
    customerState: state.customerState,
    cartState: state.cartState,
    checkPincodeState: state.checkPincodeState,
    searchMedicineState: state.searchMedicineState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateIsCartOpenLoginFlag,
        searchMedicineLoading,
        checkPincodeLoading,
        updateInProgressMedicineState,
        getAnonymousCartIdLoading,
        incrementCartItemLoading,
        updateIsCartOpenRegisterModalFlag,
        goToCartSnackbar
      },
      dispatch
    )
  }
}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))
