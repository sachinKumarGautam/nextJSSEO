import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Head from './Head'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AutosuggestSearch from '../../AutosuggestSearch'
import Subheader from './Subheader'
import CartIcon from '../../CartIcon'

function Header (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Head
          pageTitle={'Lifcare Product Details Page'}
        />
        <Toolbar>
          <Typography variant='dislpay4' color='inherit'>
            LIFCARE ICON
          </Typography>
          <AutosuggestSearch />
          <CartIcon />
          <Button
            variant='raised'
            size='medium'
            color='primary'
            aria-label='login'
            className={classes.button}
          >Login</Button>
        </Toolbar>
        <Subheader />
      </AppBar>
    </div>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    borderRadius: '2em'
  }
})

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
