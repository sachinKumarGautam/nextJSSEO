import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import CouponMessage from './CouponMessage'
import EditCoupon from './EditCoupon'
import Button from '../../components/button'
import TextErrorMessage from '../../components/activityIndicator/error/TextErrorMessage'

import {
  CUSTOM_MESSGAE_SNACKBAR
} from '../messages/errorMessages'

const styles = theme => ({
  buttonStyle: {
    ...theme.typography.title,
    fontSize: theme.typography.pxToRem(18)
  },
  buttonRoot: {
    border: `1px dashed ${theme.palette.customGrey.grey200}`,
    borderRadius: 0,
    width: '100%'
  },
  buttonLabel: {
    ...theme.typography.body2,
    color: theme.palette.customGrey.grey700,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    textAlign: 'center',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
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
    color: theme.palette.customGrey.grey500
  },
  couponCancelButtonLabel: {
    color: theme.palette.customGreen.green300
  },
  paper: {
    width: theme.spacing.unit * 40
  },
  contentRoot: {
    ...theme.typography.caption,
    color: theme.palette.customRed.red200
  },
  couponDetailWrapper: {
    marginTop: theme.spacing.unit * 2.25,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    border: `1px dashed ${theme.palette.customGrey.grey200}`,
    textAlign: 'left',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  couponCodeStyle: {
    ...theme.typography.body2,
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit
  },
  couponDescriptionStyle: {
    ...theme.typography.caption,
    color: theme.palette.customGrey.grey300,
    paddingLeft: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit
  },
  editButton: {
    textAlign: 'center'
  },
  editButtonLabel: {
    ...theme.typography.caption,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500
  }
})

class Coupon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  onClickOfCoupon () {
    this.setState({
      open: true
    })

    this.props.resetCouponDetail()

    this.props.updateCouponCode(
      this.props.cartState,
      this.props.cartState.couponDetail.payload.coupon_code
    )
  }

  onClickOfApply () {
    this.props.applyCouponCodeLoading(
      this.props.cartState,
      this.props.cartState.payload.uid,
      this.props.cartState.couponDetail.couponCode
    )
  }

  handleClose () {
    this.setState({
      open: false
    })

    if (!this.props.cartState.couponDetail.isCouponApplied) {
      this.props.updateCouponCode(
        this.props.cartState,
        ''
      )
    }
  }

  onChange (event) {
    this.props.updateCouponCode(
      this.props.cartState,
      event.target.value
    )
  }

  onKeyPress = (event) => {
    if (event.charCode === 13) {
      this.props.applyCouponCodeLoading(
        this.props.cartState,
        this.props.cartState.payload.uid,
        this.props.cartState.couponDetail.couponCode
      )
    }
  }

  componentDidUpdate (prevProps) {
    if ((this.props.cartState.couponDetail.isCouponApplied !==
      prevProps.cartState.couponDetail.isCouponApplied) &&
      this.props.cartState.couponDetail.isCouponApplied) {
      this.setState({
        open: false
      })
    }
  }

  render () {
    return (
      <div className={this.props.classes.couponWrapper}>
        <CouponMessage />
        {
          !this.props.cartState.couponDetail.isCouponApplied
            ? <Button
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
            : <EditCoupon
              cartState={this.props.cartState}
              onClickOfCoupon={this.onClickOfCoupon.bind(this)}
            />
        }
        <Dialog
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
          aria-labelledby='form-dialog-title'
          classes={{
            paper: this.props.classes.paper
          }}
        >
          <DialogTitle id='form-dialog-title'>Enter Coupon Code</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              fullWidth
              value={this.props.cartState.couponDetail.couponCode}
              onChange={this.onChange.bind(this)}
              onKeyPress={this.onKeyPress}
            />
            {
              this.props.cartState.couponDetail.errorState.isError
                ? <TextErrorMessage
                  errorMessage={
                    this.props.cartState.couponDetail.errorState.error.response
                      ? this.props.cartState.couponDetail.errorState.error.response.body.error.message
                      : CUSTOM_MESSGAE_SNACKBAR
                  }
                  customStyle={this.props.classes.contentRoot}
                />
                : null
            }
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
              onClick={this.onClickOfApply.bind(this)}
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
