import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '../../button'
import Router from 'next/router'
import {
  HOME_PAGE
} from '../../../routes/RouteConstant'
import { getReplacedString } from '../../../utils/replaceConstants'

const styles = theme => {
  return {
    imageStyle: {
      marginTop: theme.spacing.unit * 8
    },
    textStyle: {
      marginTop: theme.spacing.unit * 6,
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey350
    },
    errorWrapper: {
      textAlign: 'center',
      marginTop: theme.spacing.unit * 18,
      marginBottom: theme.spacing.unit * 18
    },
    buttonRoot: {
      borderRadius: theme.spacing.unit / 4
    },
    buttonLabel: {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold
    },
    buttonStyle: {
      ...theme.typography.body2,
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      paddingTop: theme.spacing.unit / 4,
      paddingBottom: theme.spacing.unit / 4,
      textAlign: 'center',
      marginTop: theme.spacing.unit * 5
    },
    anotherTextStyle: {
      marginTop: theme.spacing.unit / 2,
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.customGrey.grey400
    }
  }
}

class PageNotFound extends Component {
  onClickOfHome () {
    const url = getReplacedString(HOME_PAGE)
    Router.push(url)
  }
  render () {
    return (
      <div className={this.props.classes.errorWrapper}>
        <img src='/static/images/404.svg' className={this.props.classes.imageStyle} />
        <Typography
          variant='subheading'
          className={this.props.classes.textStyle}
        >
          Oops!
        </Typography>
        <Typography
          variant='subheading'
          className={this.props.classes.anotherTextStyle}
        >
          We can’t seem to find the page your are looking for.
        </Typography>
        <Button
          size='small'
          color='primary'
          variant='raised'
          classes={{
            root: this.props.classes.buttonRoot,
            label: this.props.classes.buttonLabel
          }}
          className={this.props.classes.buttonStyle}
          onClick={this.onClickOfHome.bind(this)}
          label={'Go To Home'}
        />
      </div>
    )
  }
}

export default withStyles(styles)(PageNotFound)
