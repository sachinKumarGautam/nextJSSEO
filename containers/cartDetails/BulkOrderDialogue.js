import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'

import {BULK_ORDER_QUANTITY_ALERT} from '../messages/cartMessages'

const styles = theme => ({
  bulkOrderWrapper: {
    marginTop: theme.spacing.unit * 2.25,
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 2
  },
  bulkOrderButtonRoot: {
    border: 'none',
    borderRadius: 0
  },
  bulkOrderApplyButtonLabel: {
    color: theme.palette.customGrey.grey500
  },
  bulkOrderCancelButtonLabel: {
    color: theme.palette.customGreen.green300
  },
  paper: {
    width: theme.spacing.unit * 100
  },
  refillContent: {
    ...theme.typography.body2,
    color: theme.palette.customGrey.grey600,
    textAlign: 'left'
  }
})

class BulkOrderDialogue extends Component {
  constructor (props) {
    super(props)
    this.getMessage = this.getMessage.bind(this)
  }
  getMessage () {
    let patientFullName =
      this.props.cartState.payload.customer_full_name
    let messageMedicine =
      this.props.cartState.payload.cart_items.payload.filter(
        (item) => item.bulk_order_quantity && item.excessive_ordered_quantity
      )

    let message =
      messageMedicine.map((item) => {
        return `More than ${item.bulk_order_quantity} items have been ordered for ${item.name} by ${patientFullName} in the past 30 days. `
      })

    return (
      <div>
        {message.map((msg) => (
          <p style={{ textAlign: 'left' }}>
            {msg}
          </p>
        ))}
        <p style={{ textAlign: 'left' }}>
          {BULK_ORDER_QUANTITY_ALERT}
        </p>
      </div>
    )
  }
  render () {
    return (
      <div className={this.props.classes.bulkOrderWrapper}>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby='form-dialog-title'
          classes={{
            paper: this.props.classes.paper
          }}
        >
          <DialogTitle id='form-dialog-title'>
            Bulk Medicine Alert!
          </DialogTitle>
          <DialogContent>
            <Typography
              varaint='caption'
              className={this.props.classes.refillContent}
            >
              {this.getMessage()}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              size='small'
              color='primary'
              onClick={this.props.handleClose}
              classes={{
                root: this.props.classes.bulkOrderButtonRoot,
                label: this.props.classes.bulkOrderCancelButtonLabel
              }}
              label={'Continue'}
            />
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(BulkOrderDialogue)
