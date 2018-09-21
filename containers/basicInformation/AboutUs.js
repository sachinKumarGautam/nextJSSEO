import React, { Component } from 'react'
import StaticPage from '../../components/StaticPage'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => {
  return {
    description: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500,
      lineHeight: 1.29
    },
    linkStyle: {
      textDecoration: 'none',
      color: theme.palette.primary.main
    },
    breakDownText: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500,
      lineHeight: 1.29,
      marginTop: theme.spacing.unit * 1.5
    },
    highlightText: {
      ...theme.typography.body2,
      lineHeight: 1.29,
      marginTop: theme.spacing.unit * 3,
      fontWeight: theme.typography.fontWeightBold
    },
    address: {
      ...theme.typography.body2,
      lineHeight: 1.29,
      fontWeight: theme.typography.fontWeightBold
    }
  }
}

class AboutUs extends Component {
  render () {
    return (
      <StaticPage
        title='About Us'
        content={
          <div>
            <Typography
              variant='body2'
              className={this.props.classes.description}
            >
              LifCare is India’s largest subscription-pharmacy, helping lakhs of chronic patients with their monthlymedication needs and overall health management. For patients suffering from diseases like Diabetes,Cardiac conditions, Hypertension, renal disorders, thyroid, etc., we provide your ongoing medications on a monthly basis. We ensure our subscribed members never miss their medicines, enabling them to improve on their medicine adherence. All LifCare members get benefits of cost, convenience and care by simply registering with us.
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.breakDownText}
            >
              LifCare is maintained and operated by Corner Store Technologies Pvt. Ltd., having its office at
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.address}
            >
              A-83, Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, 110020.
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.highlightText}
            >
              How to place your first order with us?
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.breakDownText}
            >
              You can place your order for the first time by sharing your valid prescription with our pharmacists. You can simply upload your prescription directly on our app. Our delivery person will check the original prescription at the time of delivery.
              After the first time, LifCare would proactively take care of your medicine needs through reminders and refills based on your doctor's instruction in prescription. Keep us updated about changes in your prescription by sharing the new prescription each time your doctor changes something.
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.highlightText}
            >
              How long does it take for the order to deliver?
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.breakDownText}
            >
              We keep availability and accessibility our priority and deliver medicines within 24-48 hours of placing the order. In case you need medicines the same day, please opt for our express delivery service by paying a small fee. However, do not use the service for emergency delivery of medicines.
            </Typography>
          </div>
        }
      />
    )
  }
}

export default withStyles(styles)(AboutUs)
