import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import { SNACK_BAR_DURATION } from '../../constants/Constants'

const styles = theme => {
  return {
    snackbarMessage: {
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.secondary.main,
      borderRadius: theme.spacing.unit / 2,
      marginLeft: theme.spacing.unit,
      marginTop: theme.spacing.unit / 2.5
    },
    anchorOriginBottomCenter: {
      marginBottom: theme.spacing.unit
    },
    snackbarWrapper: {
      display: 'flex',
      flexDirection: 'row'
    }
  }
}

class SnackbarErrorMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  componentDidMount () {
    this.setState({
      open: true
    })
  }

  handleClose () {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          classes={{
            anchorOriginBottomCenter: this.props.classes.anchorOriginBottomCenter
          }}
          autoHideDuration={SNACK_BAR_DURATION}
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          ContentProps={{
            'aria-describedby': 'error-message'
          }}
        >
          <SnackbarContent
            className={this.props.classes.snackbar}
            aria-describedby='client-snackbar'
            message={
              <div className={this.props.classes.snackbarWrapper}>
                <img src='/static/images/error.svg' />
                <Typography
                  variant='caption'
                  className={this.props.classes.snackbarMessage}
                >
                  Oops!! Something went wrong
                </Typography>
              </div>
            }
          />
        </Snackbar>
      </div>
    )
  }
}

export default withStyles(styles)(SnackbarErrorMessage)
