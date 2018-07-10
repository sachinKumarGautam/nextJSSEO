import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '../../components/button'

const styles = theme => ({
  buttonStyle: {
   ...theme.typography.title,
   fontSize: theme.typography.pxToRem(18)
  },
  buttonRoot: {
    border: `1px dashed ${theme.palette.customGrey.grey200}`,
    borderRadius: 0
  },
  buttonLabel: {
    color: theme.palette.customGrey.grey700,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 2.125,
    paddingBottom: theme.spacing.unit * 2
  },
  couponWrapper: {
    marginTop: theme.spacing.unit * 2.25,
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 2
  },
  couponButtonRoot: {
    border: 'none',
    borderRadius: 0
  },
  couponApplyButtonLabel: {
    color: theme.palette.customGrey.grey500,
  },
  couponCancelButtonLabel: {
    color: theme.palette.customGreen.green300
  },
  paper: {
    maxWidth: theme.spacing.unit * 40
  },
  contentRoot: {
    ...theme.typography.caption
  }
})

class Coupon extends Component {
  constructor(props) {
    super(props)
    this.state={
      open: false
    }
  }

  onClickOfCoupon () {
    this.setState({
      open: true
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <div className={this.props.classes.couponWrapper}>
        <Button
          size='small'
          variant='outlined'
          color='primary'
          classes={{
            root: this.props.classes.buttonRoot,
            label: this.props.classes.buttonLabel
          }}
          className={this.props.classes.buttonStyle}
          onClick={this.onClickOfCoupon.bind(this)}
          label={'Have a coupon code?'}
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="form-dialog-title"
          classes={{
            paper: this.props.classes.paper
          }}
        >
          <DialogTitle id="form-dialog-title">Enter Coupon Code</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              // value={''}
              // onChange={this.handleChange('name')}
            />
            <DialogContentText
              classes={{
                root: this.props.classes.contentRoot
              }}
            >
              Best coupon available is always auto-applied to the order unless specified otherwise
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              size='small'
              color='primary'
              onClick={this.handleClose.bind(this)}
              classes={{
                root: this.props.classes.couponButtonRoot,
                label: this.props.classes.couponApplyButtonLabel
              }}
              label={'Cancel'}
            />
            <Button
              size='small'
              color='primary'
              onClick={this.handleClose.bind(this)}
              classes={{
                root: this.props.classes.couponButtonRoot,
                label: this.props.classes.couponCancelButtonLabel
              }}
              label={'Apply'}
            />
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(Coupon)
