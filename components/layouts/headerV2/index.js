import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import RouteLoader from './RouteLoader'

import AppBar from '@material-ui/core/AppBar'
import Button from '../../button'
import SearchMedicine from '../../../containers/searchMedicine'
import Subheader from './Subheader'
import CartIcon from '../../CartIcon'
import Login from '../../../containers/login'
import MenuWrapper from '../../../containers/menu'
import {
  searchMedicineLoading,
  resetSearchMedicineState
} from '../../../containers/searchMedicine/searchMedicineAction'
import GoToCartSnackbar from '../../../containers/cartDetails/GoToCartSnackbar'
import Toolbar from '@material-ui/core/Toolbar'
import Search from './Search'

import {
  getAnonymousCartIdLoading,
  updateIsCartOpenLoginFlag,
  updateIsCartOpenRegisterModalFlag,
  goToCartSnackbar,
  uploadPrescriptionLoading,
  updateShowNoCartIdDialogFlag
} from '../../../containers/cartDetails/cartActions'

import Link from 'next/link'

import {
  resetIsNewUserFlag,
  resetLoginState
} from '../../../containers/login/loginActions'

import { HOME_PAGE } from '../../../routes/RouteConstant'

import { Grid } from '@material-ui/core'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.common.white
  },
  appBar: {
    paddingLeft: theme.spacing.unit * 4.375,
    paddingRight: theme.spacing.unit * 4.375,
    width: '100%',
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  gridStyle: {
    alignItems: 'center',
    display: 'flex'
  },
  button: {
    color: 'white',
    flexGrow: 0,
    borderRadius: theme.spacing.unit * 4
  },
  lifcareLogoStyle: {
    width: theme.spacing.unit * 10,
    cursor: 'pointer'
  },
  wrapCart: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  searchWrapper: {
    display: 'none'
  },
  toolbar: {
    marginBottom: 0,
    height: theme.spacing.unit * 7.5,
    display: 'flex',
    justifyContent: 'space-between'
  },
  orTextStyle: {
    ...theme.typography.caption,
    color: theme.palette.common.black,
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing.unit * 1.25,
    marginRight: theme.spacing.unit * 1.25
  }
})

class Header extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.openLoginModal = this.openLoginModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
    this.state = {
      openLoginDialog: this.props.authentication &&
        !this.props.loginState.isAuthenticated
        ? this.props.authentication
        : false
    }
  }

  componentDidMount () {
    if (
      !this.props.loginState.isAuthenticated &&
      !this.props.cartState.payload.uid
    ) {
      this.props.actions.getAnonymousCartIdLoading(
        this.props.cartState,
        this.props.checkPincodeState.payload.source,
        this.props.checkPincodeState.payload.id,
        ''
      )
    }

    if (
      !this.props.cartState.prescriptionDetails.isHomePage
    ) {
      const isCartOpenLoginDialog = false
      this.props.actions.updateIsCartOpenLoginFlag(
        this.props.cartState,
        isCartOpenLoginDialog
      )
    }
  }

  openLoginModal () {
    if (!this.props.cartState.payload.uid) {
      const isShowNoCartIdDialog = true

      this.props.actions.updateShowNoCartIdDialogFlag(
        this.props.cartState,
        isShowNoCartIdDialog
      )
    } else {
      this.setState({
        openLoginDialog: true
      })
    }
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

    this.props.actions.resetIsNewUserFlag(this.props.loginState)
    this.props.actions.resetLoginState()
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
      <React.Fragment>
        <RouteLoader />
        <AppBar elevation={1} className={classes.root} position='fixed'>
          <div className={classes.appBar}>
            <Toolbar
              classes={{
                root: classes.toolbar
              }}
              disableGutters
            >
              <Grid
                container
                spacing={24}
                className={this.props.classes.gridStyle}
              >
                <Grid item xs={1} lg={1}>
                  <Link href={HOME_PAGE} passHref >
                    <img
                      className={classes.lifcareLogoStyle}
                      src='/static/images/new-logo.svg'
                    />
                  </Link>
                </Grid>
                <Grid
                  item
                  xs={loginState.isAuthenticated ? 6 : 5}
                  lg={loginState.isAuthenticated ? 7 : 6}
                >
                  {!this.props.isHomePage
                    ? <SearchMedicine
                      searchMedicineState={searchMedicineState}
                      checkPincodeState={checkPincodeState}
                      searchMedicineLoading={actions.searchMedicineLoading}
                      addToCartHandler={this.props.addToCartHandler}
                      cartState={this.props.cartState}
                      resetSearchMedicineState={
                        this.props.actions.resetSearchMedicineState
                      }
                      globalErrorState={this.props.globalErrorState}
                    />
                    : null}
                </Grid>
                <Grid item xs={3} lg={3}>
                  <Subheader
                    isAuthenticated={this.props.loginState.isAuthenticated}
                    openLoginModal={this.openLoginModal}
                    isHomePage={this.props.isHomePage}
                  />
                </Grid>
                <Grid
                  item
                  xs={loginState.isAuthenticated ? 2 : 3}
                  lg={loginState.isAuthenticated ? 1 : 2}
                >
                  <div className={this.props.classes.wrapCart}>
                    <CartIcon
                      cartState={this.props.cartState}
                      updateShowNoCartIdDialogFlag={this.props.actions.updateShowNoCartIdDialogFlag}
                    />
                    {
                      loginState.isAuthenticated
                        ? (
                          <MenuWrapper />
                        ) : (
                          <Button
                            variant='raised'
                            size='medium'
                            color='primary'
                            aria-label='login'
                            onClick={this.openLoginModal}
                            className={classes.button}
                            label={'Login / Register'}
                          />
                        )
                    }
                  </div>
                </Grid>
              </Grid>
            </Toolbar>

          </div>
          {(this.state.openLoginDialog ||
            this.props.cartState.isCartOpenLoginDialog ||
            this.props.cartState.isCartOpenRegisterDialog) &&
            <Login
              openLoginDialog={
                this.state.openLoginDialog ||
                this.props.cartState.isCartOpenLoginDialog ||
                this.props.cartState.isCartOpenRegisterDialog
              }
              openLoginModal={this.openLoginModal}
              isCartOpenRegisterDialog={
                this.props.cartState.isCartOpenRegisterDialog
              }
              closeLoginModal={this.closeLoginModal}
              loginState={loginState}
              customerState={customerState}
            />}
          <GoToCartSnackbar
            goToCartSnackbar={this.props.actions.goToCartSnackbar}
            cartState={this.props.cartState}
          />
          {this.props.isHomePage &&
            <div
              id='search-header'
              className={this.props.classes.searchWrapper}
            >
              <Search
                searchMedicineState={searchMedicineState}
                checkPincodeState={checkPincodeState}
                searchMedicineLoading={actions.searchMedicineLoading}
                addToCartHandler={this.props.addToCartHandler}
                cartState={this.props.cartState}
                uploadPrescriptionLoading={
                  this.props.actions.uploadPrescriptionLoading
                }
                orTextStyle={this.props.classes.orTextStyle}
                resetSearchMedicineState={this.props.actions.resetSearchMedicineState}
                updateShowNoCartIdDialogFlag={this.props.actions.updateShowNoCartIdDialogFlag}
                updateIsCartOpenLoginFlag={this.props.actions.updateIsCartOpenLoginFlag}
                loginState={this.props.loginState}
                globalErrorState={this.props.globalErrorState}
              />
            </div>}
        </AppBar>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    loginState: state.loginState,
    customerState: state.customerState,
    cartState: state.cartState,
    checkPincodeState: state.checkPincodeState,
    searchMedicineState: state.searchMedicineState,
    globalErrorState: state.globalErrorState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateIsCartOpenLoginFlag,
        searchMedicineLoading,
        getAnonymousCartIdLoading,
        updateIsCartOpenRegisterModalFlag,
        goToCartSnackbar,
        uploadPrescriptionLoading,
        resetIsNewUserFlag,
        resetLoginState,
        resetSearchMedicineState,
        updateShowNoCartIdDialogFlag
      },
      dispatch
    )
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Header)
)
