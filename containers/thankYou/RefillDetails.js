import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Button from '../../components/button'
import {formatDate} from '../../utils/FormatDate'

const styles = theme => ({
  repeatTitle: {
    marginLeft: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 1.37,
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold
  },
  description: {
    marginLeft: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 3.5,
    color: theme.palette.customGrey.grey500,
  },
  buttonRoot: {
    border: `1px dashed ${theme.palette.customGrey.grey200}`
  },
  buttonLabel: {
    color: theme.palette.customGrey.grey700,
    fontWeight: theme.typography.fontWeightBold
  },
  buttonWrapperStyle: {
    marginLeft: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 4.12,
    display: 'flex',
    flexDirection: 'row',
    marginRight: theme.spacing.unit * 11.25
  },
  buttonStyle: {
    ...theme.typography.caption,
    marginRight: theme.spacing.unit * 3
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  }
})

const refillDays = [
  {
    label: '10 Days',
    value: 10
  },
  {
    label: '15 Days',
    value: 15
  },
  {
    label: '20 Days',
    value: 20
  },
  {
    label: '30 Days',
    value: 30
  }
]

class RefillDetails extends Component {
  constructor(props){
    super(props)
    this.state={
      open: false
    }
  }

  onClickOfRefillDay(refillDay) {
    this.props.submitRefillDateLoading(
      this.props.thankYouState,
      this.props.cartState.orderResponse.order_number,
      refillDay.value
    )
  }

  componentDidUpdate(prevProps) {
    if(
      this.props.thankYouState.payload.repeat_day !==
      prevProps.thankYouState.payload.repeat_day
    ){
      this.setState({
        open: true
      })
    }
  }

  handleClose() {
    this.setState({
      open: false
    })
  }

  render () {
    let date = new Date()
    date = date.setDate(date.getDate() + this.props.thankYouState.payload.repeat_day)
    let refillDate = formatDate(date)
    return (
      <div>
        <Typography
          variant='body2'
          className={this.props.classes.repeatTitle}
        >
          Repeat these Medicines
        </Typography>
        <Typography
          variant='body2'
          className={this.props.classes.description}
        >
          We ensure that you never miss you medicines
        </Typography>
        <div className={this.props.classes.buttonWrapperStyle}>
          {
            refillDays.map((item) => {
              return (
                <Button
                  size='small'
                  variant='outlined'
                  color='primary'
                  classes={{
                    root: this.props.classes.buttonRoot,
                    label: this.props.classes.buttonLabel
                  }}
                  className={this.props.classes.buttonStyle}
                  onClick={this.onClickOfRefillDay.bind(this, item)}
                  label={item.label}
                />
              )
            })
          }
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={10000}
          onClose={this.handleClose.bind(this)}
          ContentProps={{
            'aria-describedby': 'refillDate-id',
          }}
          message={
            <span id="message-id">
              We will confirm your refill request on {refillDate} before we process your next order.
            </span>
          }
          action={[
            <IconButton
               key="close"
               aria-label="Close"
               color="inherit"
               className={this.props.classes.close}
               onClick={this.handleClose.bind(this)}
             >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    )
  }
}

export default withStyles(styles)(RefillDetails)
