import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AutosuggestSearch from '../../AutosuggestSearch'
import Subheader from './Subheader'

function Header (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography variant='title' color='inherit'>
            Title
          </Typography>
          <AutosuggestSearch />
          <Button variant='raised' size='medium' color='primary' aria-label='add'>Login</Button>
        </Toolbar>
        <Subheader />
      </AppBar>
    </div>
  )
}

const styles = {
  root: {
    flexGrow: 1
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
