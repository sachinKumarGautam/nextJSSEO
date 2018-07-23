import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey200,
    textAlign: 'left',
    marginLeft: theme.spacing.unit
  },
  imageStyle: {
    height: theme.spacing.unit * 1.625,
    width: theme.spacing.unit * 1.75,
    marginTop: theme.spacing.unit / 4,
    marginRight: theme.spacing.unit / 4,
    marginLeft: theme.spacing.unit * 0.625
  },
  handshakeImageStyle: {
    height: theme.spacing.unit * 2.75,
    width: theme.spacing.unit * 2.75
  },
  deliveryImageStyle: {
    height: theme.spacing.unit * 1.5,
    width: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 8,
    marginLeft: theme.spacing.unit * 0.625
  },
  mainWrapper: {
    marginLeft: theme.spacing.unit * 5.5,
    marginTop: theme.spacing.unit * 2
  },
  soldTextMapping: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey200,
    textAlign: 'left',
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 0.375
  }
})

class TermsAndCondition extends Component {
  render () {
    return (
      <div className={this.props.classes.mainWrapper}>
        <div className={this.props.classes.textWrapper}>
          <img
            src='/static/images/ic_page_1@2x.png'
            className={this.props.classes.imageStyle}
          />
          <Typography
            varaint='caption'
            className={this.props.classes.text}
          >
            100% Genuine Medicines
          </Typography>
        </div>
        <div className={this.props.classes.textWrapper}>
          <img
            src='/static/images/ic_hand_shake.png'
            className={this.props.classes.handshakeImageStyle}
          />
          <Typography
            varaint='caption'
            className={this.props.classes.soldTextMapping}
          >
            Sold by (Name of retail entity), fulfilled by LifCare
          </Typography>
        </div>
        <div className={this.props.classes.textWrapper}>
          <img
            src='/static/images/ic_delivery_truck@2x.png'
            className={this.props.classes.deliveryImageStyle}
          />
          <Typography
            varaint='caption'
            className={this.props.classes.text}
          >
            Free Delivery at your door step* *T&C apply
          </Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TermsAndCondition)
