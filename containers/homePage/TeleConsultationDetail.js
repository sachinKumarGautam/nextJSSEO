import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { scrollTo } from '../../utils/scrollToSections'

import { SCROLL_TO_TOP_HEIGHT } from '../../components/constants/Constants'

const styles = theme => {
  return {
    button: {
      margin: theme.spacing.unit,
      backgroungColor: theme.palette.primary.main,
      float: 'right',
      marginRight: theme.spacing.unit * 7.57
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
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: theme.spacing.unit * 6
    },
    teleconsultTitle: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'right',
      marginRight: theme.spacing.unit * 7.57
    },
    teleconsultDescription: {
      fontSize: theme.typography.pxToRem(16),
      textAlign: 'right',
      marginRight: theme.spacing.unit * 7.57,
      marginBottom: theme.spacing.unit * 4
    }
  }
}

class TeleConsultationDetail extends Component {
  onGetStarted() {
    return scrollTo('search-section', SCROLL_TO_TOP_HEIGHT)
  }
  render() {
    return (
      <div className={this.props.classes.contentWrapper} id='health-management'>
        <div>
          <Typography
            variant='body2'
            className={this.props.classes.teleconsultTitle}
          >
            Doctor Tele-consultation
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.teleconsultDescription}
          >
            Consult the best doctors for your health condition, from the comfort of your home!
          </Typography>
          <Button
            variant='raised'
            color='primary'
            className={this.props.classes.button}
            classes={{
              label: this.props.classes.buttonlabel
            }}
            onClick={this.onGetStarted.bind(this)}
          >
            GET STARTED
          </Button>
        </div>
        <div>
          <img src='/static/images/doctor1.png' />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TeleConsultationDetail)
