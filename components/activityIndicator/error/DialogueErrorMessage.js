import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Router from 'next/router'
import { HOME_PAGE } from '../../../routes/RouteConstant'

import { getReplacedString } from '../../../utils/replaceConstants'
import Button from '../../button'
import Typography from '@material-ui/core/Typography'
import { logoutWithReload } from '../../../utils/removePersistState'

const styles = theme => ({
  buttonRoot: {
    paddingLeft: theme.spacing.unit * 8,
    paddingRight: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 2
  },
  cancelButtonLabel: {
    color: theme.palette.secondary.main
  },
  paper: {
    width: theme.spacing.unit * 40
  },
  buttonWrapper: {
    justifyContent: 'center'
  },
  errorIcon: {
    marginRight: theme.spacing.unit * 1.25
  }
})

class DialogueErrorMessage extends Component {
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

  onClickOfOk () {
    this.setState({
      open: false // to close dialog
    })

    if (this.props.dialogKey === 'sessionExpired') {
      logoutWithReload()
    } else if (!this.props.isShowNoCartIdDialog) {
      Router.push(getReplacedString(HOME_PAGE))
    } else {
      this.props.onClickOk()
    }
  }

  render () {
    return (
      <Dialog
        open={this.state.open}
        aria-labelledby='form-dialog-title'
        classes={{
          paper: this.props.classes.paper
        }}
      >
        <DialogTitle id='form-dialog-title'>
          <img
            src='/static/images/precautions_grey.svg'
            className={this.props.classes.errorIcon}
          />
          {this.props.dialogueTitle}
        </DialogTitle>
        <DialogContent>
          <Typography varaint='caption'>
            {this.props.dialogueContent}
          </Typography>
        </DialogContent>
        <DialogActions
          classes={{
            root: this.props.classes.buttonWrapper
          }}
        >
          <Button
            size='small'
            color='primary'
            variant='raised'
            onClick={this.onClickOfOk.bind(this)}
            classes={{
              root: this.props.classes.buttonRoot,
              label: this.props.classes.cancelButtonLabel
            }}
            label={'Ok'}
          />
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(DialogueErrorMessage)
