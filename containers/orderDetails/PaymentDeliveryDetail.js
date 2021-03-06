import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ReactTooltip from 'react-tooltip'

import {
  LF_ASSURED_TEXT,
  UREGNT_DELIVERY_TEXT,
  VERIFICATION_RX,
  LF_ASSURED_DETAIL,
  EXPRESS_DELIVERY_DETAIL
} from '../messages/cartMessages'

import {
  SERVICE_TYPE_LFASSURED,
  DELIVERY_OPTION_URGENT
} from '../../components/constants/Constants'

import { getReplacedString } from '../../utils/replaceConstants'

const styles = theme => ({
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.unit * 3
  },
  text: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey200,
    textAlign: 'left',
    marginLeft: theme.spacing.unit,
    fontSize: theme.spacing.unit * 1.75
  },
  mainWrapper: {
    marginLeft: theme.spacing.unit * 2.5,
    marginTop: theme.spacing.unit * 2
  },
  asssuredText: {
    ...theme.typography.body3,
    textAlign: 'left',
    marginLeft: theme.spacing.unit * 1.5,
    fontSize: theme.spacing.unit * 2
  },
  checkboxRoot: {
    width: theme.spacing.unit * 2,
    height: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 1.25
  },
  rxImageStyle: {
    width: theme.spacing.unit * 2.75,
    height: theme.spacing.unit * 2.75
  },
  paper: {
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 34,
    backgroundColor: `${theme.palette.customGrey.grey50} !important`,
    pointerEvents: 'auto !important',
    '&:after': {
      borderRightColor: `${theme.palette.customGrey.grey50} !important`
    },
    '&:hover': {
      visibility: 'visible !important',
      opacity: '1 !important'
    },
    opacity: '1 !important',
    borderRadius: '4px'
  },
  tooltipIconInage: {
    height: theme.spacing.unit * 1.5,
    marginLeft: theme.spacing.unit * 0.75,
    width: theme.spacing.unit * 1.5,
    marginTop: theme.spacing.unit
  }
})

class PaymentDeliveryDetail extends Component {
  render () {
    const constantsPayload = this.props.constantsState.constants.payload

    return (
      <div className={this.props.classes.mainWrapper}>
        {this.props.serviceType === SERVICE_TYPE_LFASSURED &&
          <div className={this.props.classes.textWrapper}>
            <img
              src='/static/images/assured-service.svg'
              className={this.props.classes.rxImageStyle}
            />
            <Typography
              varaint='caption'
              className={this.props.classes.asssuredText}
            >
              {LF_ASSURED_DETAIL}
            </Typography>
            <a href='#' data-tip data-for='assured'>
              <img
                src='/static/images/info-outline.svg'
                className={this.props.classes.tooltipIconInage}
              />
              <ReactTooltip
                id='assured'
                effect='solid'
                place='right'
                className={this.props.classes.paper}
                // delayHide={1000}
                delayShow={500}
              >
                <Typography variant='caption'>
                  {getReplacedString(LF_ASSURED_TEXT, constantsPayload)}
                </Typography>
              </ReactTooltip>
            </a>
          </div>}
        {this.props.deliveryOption === DELIVERY_OPTION_URGENT &&
          <div className={this.props.classes.textWrapper}>
            <img
              src='/static/images/express-delivery-icon.svg'
              className={this.props.classes.rxImageStyle}
            />
            <Typography
              varaint='caption'
              className={this.props.classes.asssuredText}
            >
              {EXPRESS_DELIVERY_DETAIL}
            </Typography>
            <a href='#' data-tip data-for='urgent_delivery'>
              <img
                src='/static/images/info-outline.svg'
                className={this.props.classes.tooltipIconInage}
              />
              <ReactTooltip
                id='urgent_delivery'
                effect='solid'
                place='right'
                className={this.props.classes.paper}
                // delayHide={1000}
                delayShow={500}
              >
                <Typography variant='caption'>
                  {getReplacedString(UREGNT_DELIVERY_TEXT, constantsPayload)}
                </Typography>
              </ReactTooltip>
            </a>
          </div>}
        {this.props.serviceType === SERVICE_TYPE_LFASSURED &&
          <div className={this.props.classes.textWrapper}>
            <img
              src='/static/images/rx-pending.svg'
              className={this.props.classes.rxImageStyle}
            />
            <Typography varaint='caption' className={this.props.classes.text}>
              {VERIFICATION_RX}
            </Typography>
          </div>}
      </div>
    )
  }
}

export default withStyles(styles)(PaymentDeliveryDetail)
