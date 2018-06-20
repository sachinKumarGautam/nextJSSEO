import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '../../components/button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

const styles = theme => ({
  paper: {
    minWidth: 500
  }
})

const PincodeDialog = (props) => (
  <div>
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='form-dialog-title'
      classes={{
        paper: props.classes.paper
      }}
    >
      <DialogContent>
        <DialogContentText>
          Enter Delivery Pincode
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Pincode'
          type='number'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleClose}
          color='primary'
          variant='raised'
          label={'Cancel'}
        />
        <Button
          onClick={props.handleClose}
          color='primary'
          label={'Apply'}
          variant='raised' />
      </DialogActions>
    </Dialog>
  </div>
)

export default withStyles(styles)(PincodeDialog)
