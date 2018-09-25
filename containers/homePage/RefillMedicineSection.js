import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { scrollTo } from '../../utils/scrollToSections'
import Router from 'next/router'
import { REFILL_PATIENTS } from '../../routes/RouteConstant'
import { getReplacedString } from '../../utils/replaceConstants'
import { SCROLL_TO_TOP_HEIGHT } from '../../components/constants/Constants'

const styles = theme => {
  return {
    refillWrapper: {
      marginLeft: theme.spacing.unit * 12.375,
      marginRight: theme.spacing.unit * 12.375
    },
    title: {
      fontSize: theme.typography.pxToRem(26),
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing.unit * 8.375,
      marginBottom: theme.spacing.unit * 4
    },
    description: {
      ...theme.typography.body2,
      marginBottom: theme.spacing.unit * 11.625
    },
    imageWrapperStyle: {
      marginBottom: theme.spacing.unit * 9.625,
      textAlign: 'center'
    },
    imageStyle: {
      ...theme.typography.caption
    },
    button: {
      margin: theme.spacing.unit,
      backgroungColor: theme.palette.primary.main
    },
    buttonlabel: {
      ...theme.typography.caption,
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing.unit * 5.25,
      paddingRight: theme.spacing.unit * 5.25,
      color: theme.palette.secondary.main
    },
    buttonWrapperStyle: {
      marginBottom: theme.spacing.unit * 11.375,
      textAlign: 'center'
    }
  }
}

class RefillMedicineSection extends Component {
  onPlaceOrder () {
    if (!this.props.loginState.isAuthenticated || this.props.loginState.isNewUser) {
      return scrollTo('search-section', SCROLL_TO_TOP_HEIGHT)
    } else {
      const url = getReplacedString(REFILL_PATIENTS)
      return Router.push(url)
    }
  }
  render () {
    return (
      <div className={this.props.classes.refillWrapper}>
        <Typography
          variant='headline'
          className={this.props.classes.title}
        >
          Refill Medicines
        </Typography>
        <Typography
          variant='body2'
          className={this.props.classes.description}
        >
          LifCare saves you all the time and effort to re-visit pharmacies, by proactively refilling your medicines on-time every-time.
        </Typography>
        <div className={this.props.classes.imageWrapperStyle}>
          <img src='/static/images/refillDetail.svg' />
        </div>
        <div className={this.props.classes.buttonWrapperStyle}>
          <Button
            variant='raised'
            color='primary'
            className={this.props.classes.button}
            classes={{
              label: this.props.classes.buttonlabel
            }}
            onClick={this.onPlaceOrder.bind(this)}
          >
            PLACE ORDER
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(RefillMedicineSection)
