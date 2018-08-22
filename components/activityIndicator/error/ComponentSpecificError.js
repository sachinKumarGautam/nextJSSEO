import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '../../button'
import {
  ERROR_MESSAGE_TEXT,
  ERROR_MESSAGE_DESCRIPTION
} from '../../../containers/messages/errorMessages'

const styles = theme => {
  return {
    textStyle: {
      marginTop: theme.spacing.unit * 6,
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey350
    },
    errorWrapper: {
      textAlign: 'center',
      margin: theme.spacing.unit * 3
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      color: theme.palette.primary.main,
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

class ComponentSpecificError extends Component {
  onClickOfTryAgain = () => {
    this.props.tryAgain()
  }
  render () {
    return (
      <div className={this.props.classes.errorWrapper}>
        <Typography
          variant='subheading'
          className={this.props.classes.textStyle}
        >
          {ERROR_MESSAGE_TEXT}
        </Typography>
        <Typography
          variant='subheading'
          className={this.props.classes.anotherTextStyle}
        >
          {ERROR_MESSAGE_DESCRIPTION}
        </Typography>
        {
          !this.props.noButton &&
          <Button
            size='small'
            color='primary'
            variant='outline'
            classes={{
              root: this.props.classes.buttonRoot,
              label: this.props.classes.buttonLabel
            }}
            className={this.props.classes.buttonStyle}
            onClick={this.onClickOfTryAgain}
            label={'Try Again'}
          />
        }
      </div>
    )
  }
}

export default withStyles(styles)(ComponentSpecificError)
