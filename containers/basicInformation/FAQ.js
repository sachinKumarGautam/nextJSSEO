import React, { Component } from 'react'
import StaticPage from '../../components/StaticPage'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => {
  return {
    question: {
      ...theme.typography.body2,
      lineHeight: 1.29,
      fontWeight: theme.typography.fontWeightBold,
      paddingBottom: theme.spacing.unit * 2
    },
    answer: {
      ...theme.typography.caption,
      lineHeight: 1.29,
      marginBottom: theme.spacing.unit * 4,
      marginLeft: theme.spacing.unit * 2
    }
  }
}

const content = [
  {
    question: '1. What is subscription pharmacy?',
    answer: 'A subscription pharmacy provides medicines to registered customers on a repeated on-going basis. It is ideal for patients with chronic diseases like Diabetes, Hypertension, Cardiac conditions, Cancer, Asthma, Thyroid etc.'
  },
  {
    question: '2. Is LifCare an online pharmacy?',
    answer: 'No, LifCare is not an online pharmacy. We maintain the same infrastructure that a normal pharmacy maintains. Each prescription is physically checked by our pharmacists and verified thoroughly before the orders are delivered to our subscribed members.'
  },
  {
    question: '3. Is LifCare government approved?',
    answer: 'Yes, LifCare is a government approved pharmacy with Drug License No. JPR/2015/N 3954 dated 28th September 2015.'
  },
  {
    question: '4.  What are the quality standards of medicines purchased through LifCare?',
    answer: 'LifCare stores all the medicines in best-in-class warehouse facility as per global practices, and provides last mile cold storage delivery, so the medicines you consume are at its best effectiveness.'
  },
  {
    question: '5. How is a subscription pharmacy beneficial?',
    answer: 'A subscription pharmacy helps patients in staying on track with their treatment by providing them with periodic refills of medicine. This helps in improving their medicine adherence and in reducing their hospitalization risks as well as overall healthcare costs.'
  },
  {
    question: '6. How is LifCare able to provide discounts?',
    answer: 'LifCare is less expensive than a traditional pharmacy due to our centralized dispensing technology and overhead cost saving. We work with a lean team and aim at continuous productivity enhancement.'
  }
]

class FAQWrapper extends Component {
  render () {
    return (
      <StaticPage
        title='FAQ'
        content={
          <div>
            {
              content.map((item) => {
                return (
                  <div>
                    <Typography
                      variant='body2'
                      className={this.props.classes.question}
                    >
                      {item.question}
                    </Typography>
                    <Typography
                      variant='caption'
                      className={this.props.classes.answer}
                    >
                      {item.answer}
                    </Typography>
                  </div>
                )
              })
            }
          </div>
        }
      />
    )
  }
}

export default withStyles(styles)(FAQWrapper)
