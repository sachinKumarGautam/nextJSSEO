import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'
import {
  REFILL_PATIENT_DIALOGUE_MSG
} from '../messages/refillPatientMessage'

const styles = theme => ({
  refillPatientWrapper: {
    marginTop: theme.spacing.unit * 2.25,
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 2
  },
  refillPatientButtonRoot: {
    border: 'none',
    borderRadius: 0
  },
  refillPatientApplyButtonLabel: {
    color: theme.palette.customGrey.grey500
  },
  refillPatientCancelButtonLabel: {
    color: theme.palette.customGreen.green300
  },
  paper: {
    width: theme.spacing.unit * 40
  },
  refillContent: {
    ...theme.typography.body2,
    color: theme.palette.customGrey.grey600,
    textAlign: 'left'
  }
})

class RefillPatientDialogue extends Component {
  render () {
    return (
      <div className={this.props.classes.refillPatientWrapper}>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby='form-dialog-title'
          classes={{
            paper: this.props.classes.paper
          }}
        >
          <DialogTitle id='form-dialog-title'>Refill Order</DialogTitle>
          <DialogContent>
            <Typography
              varaint='caption'
              className={this.props.classes.refillContent}
            >
              {REFILL_PATIENT_DIALOGUE_MSG}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              size='small'
              color='primary'
              onClick={this.props.handleClose}
              classes={{
                root: this.props.classes.refillPatientButtonRoot,
                label: this.props.classes.refillPatientApplyButtonLabel
              }}
              label={'Cancel'}
            />
            <Button
              size='small'
              color='primary'
              onClick={this.props.onClickOfOk}
              classes={{
                root: this.props.classes.refillPatientButtonRoot,
                label: this.props.classes.refillPatientCancelButtonLabel
              }}
              label={'Ok'}
            />
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(RefillPatientDialogue)
