import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Router from 'next/router'
import {
  PRIVACY_POLICY,
  ABOUT_US,
  FAQ,
  TERMS
} from '../../../../routes/RouteConstant'

import { getReplacedString } from '../../../../utils/replaceConstants'

const styles = theme => ({
  iconWithText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2.125,
    cursor: 'pointer'
  },
  listHeaderText: {
    ...theme.typography.body1,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 2.5,
    fontWeight: theme.typography.fontWeightBold
  },
  listItemText: {
    ...theme.typography.body1,
    color: theme.palette.customGrey.grey200,
    marginLeft: theme.spacing.unit * 1.37
  }
})

class CompanyInfo extends Component {
  redirectToPath (path) {
    const url = getReplacedString(path)
    Router.push(url)
  }
  render () {
    return (
      <div>
        <Typography className={this.props.classes.listHeaderText} variant='headline' color='default'>
          Company
        </Typography>
        <div className={this.props.classes.iconWithText} onClick={this.redirectToPath.bind(this, ABOUT_US)}>
          <img src={'/static/images/info-outline.svg'} />
          <Typography className={this.props.classes.listItemText} variant='subheading' component='h2'>
            About us
          </Typography>
        </div>
        <div className={this.props.classes.iconWithText} onClick={this.redirectToPath.bind(this, FAQ)}>
          <img src={'/static/images/info-outline.svg'} />
          <Typography className={this.props.classes.listItemText} variant='subheading' component='h2'>
            FAQ
          </Typography>
        </div>
        {/* <div className={this.props.classes.iconWithText} onClick={this.redirectToPath.bind(this, TERMS)}>
          <img src={'/static/images/info-outline.svg'} />
          <Typography className={this.props.classes.listItemText} variant='subheading' component='h2'>
            Terms & conditions
          </Typography>
        </div> */}
        <div className={this.props.classes.iconWithText} onClick={this.redirectToPath.bind(this, PRIVACY_POLICY)}>
          <img src={'/static/images/privacy.svg'} />
          <Typography className={this.props.classes.listItemText} variant='subheading' component='h2'>
            Privacy & Data Security
          </Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CompanyInfo)
