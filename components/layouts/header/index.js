import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import Head from './Head'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import AutosuggestSearch from '../../AutosuggestSearch'
import Subheader from './Subheader'
import CartIcon from '../../CartIcon'

function Header (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar elevation={'1'} className={classes.appBar} position='fixed'>
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
            <CartIcon />
            <Button
              classes={{
                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                label: classes.label // class name, e.g. `classes-nesting-label-x`
              }}
              variant='raised'
              size='medium'
              color='primary'
              aria-label='login'
              className={classes.button}
            >Login / Register</Button>
          </Toolbar>
          <Subheader />
        </div>
      </AppBar>
    </div>
  )
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
    borderRadius: theme.spacing.unit * 4,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
  }
})

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
