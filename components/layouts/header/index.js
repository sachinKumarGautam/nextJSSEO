import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PropTypes from 'prop-types'
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
    this.setState({
      openLoginDialog: false
    })
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
              <img src='/static/images/logo-green.svg' />
              <SearchMedicine
                searchMedicineState={searchMedicineState}
                checkPincodeState={checkPincodeState}
                checkPincodeLoading={this.props.actions.checkPincodeLoading}
                searchMedicineLoading={actions.searchMedicineLoading}
                updateInProgressMedicineState={actions.updateInProgressMedicineState}
              />
              <CartIcon />
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
              {this.state.openLoginDialog && <Login
                openLoginDialog={this.state.openLoginDialog}
                openLoginModal={this.openLoginModal}
                closeLoginModal={this.closeLoginModal}
                loginState={loginState}
                customerState={customerState}
              />}
            </Toolbar>
            <Subheader />
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
    checkPincodeState: state.checkPincodeState,
    searchMedicineState: state.searchMedicineState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        searchMedicineLoading,
        checkPincodeLoading,        
        updateInProgressMedicineState
      },
      dispatch
    )
  }
}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))
