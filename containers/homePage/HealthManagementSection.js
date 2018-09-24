import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TeleConsultationDetail from './TeleConsultationDetail'
import HealthCoachDetail from './HealthCoachDetail'

const styles = theme => {
  return {
    healthWrapper: {
      backgroundColor: theme.palette.customGrey.grey50,
      paddingLeft: theme.spacing.unit * 12.375,
      paddingRight: theme.spacing.unit * 12.375
    },
    title: {
      fontSize: theme.typography.pxToRem(26),
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: theme.spacing.unit * 6.5
    },
    subTitle: {
      ...theme.typography.body2,
      fontSize: theme.typography.pxToRem(18),
      paddingBottom: theme.spacing.unit * 2.675,
      paddingBottom: theme.spacing.unit * 4.25
    },
    description: {
      ...theme.typography.body2,
      paddingBottom: theme.spacing.unit * 2.675
    }
  }
}

class HealthManagementSection extends Component {
  render() {
    return (
      <div className={this.props.classes.healthWrapper}>
        <Typography
          variant='headline'
          className={this.props.classes.title}
        >
          Health Management
        </Typography>
        <Typography
          variant='body2'
          className={this.props.classes.subTitle}
        >
          A better way to manage your health.
        </Typography>
        <Typography
          variant='body2'
          className={this.props.classes.description}
        >
          Diet, Lifestyle and Doctors play a significant role in determining your health outcomes. Once you enrol and re-order your medicines from us, we provide a Life Coach and doctor tele-consultation service, Absolutely Free!
        </Typography>
        <TeleConsultationDetail />
        <HealthCoachDetail />
      </div>
    )
  }
}

export default withStyles(styles)(HealthManagementSection)
