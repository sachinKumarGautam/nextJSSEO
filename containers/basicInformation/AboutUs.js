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
      marginTop: theme.spacing.unit * 1.5,
      marginBottom: theme.spacing.unit * 2
    },
    highlightText: {
      ...theme.typography.body2,
      lineHeight: 1.29,
      marginTop: theme.spacing.unit * 3,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing.unit * 2
    },
    address: {
      ...theme.typography.body2,
      lineHeight: 1.29,
      fontWeight: theme.typography.fontWeightBold
    },
    listStyle: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500,
      lineHeight: 1.29,
      marginLeft: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2
    }
  }
}

const disease = [
  'Diabetes / Sugar',
  'High Blood Pressure / Hypertension',
  'Asthma',
  'Kidney / Renal disorders',
  'Thyroid',
  'Gastric conditions',
  'Heart conditions',
  'Arthritis … and many more'
]

const lifcareProvides = [
  'Proactive medicine refills based on your past orders.',
  'Monthly reminders so you never run out of medicines.',
  'Online medicine free home delivery.',
  'Free verified doctor consultations.',
  'Certified pharmacists to place your order requests.',
  'Full-body health check-ups with home sample collection.',
  'Heart conditions',
  'Free Diet and Lifestyle counselling by professional dietitians.'
]

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
              {`LifCare is a subscription-based online pharmacy that enables all chronic patients with Diabetes, Heart conditions, Hypertension, Renal disorders etc. to place online medicine orders and refill them every month. Being one of the leading online healthcare subscription portals with over 3,00,000 loyal customers, LifCare facilitates hassle-free online medicine purchase through its official mobile app, along with keeping users updated on the latest health tips and trends.`}
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.breakDownText}
            >
              {`LifCare caters to over 3 lakh chronic patients across Delhi NCR, Rajasthan & Uttar Pradesh and provides medicines for chronic conditions like -`}
            </Typography>
            {
              disease.map((item, index) => {
                return (
                  <Typography
                    variant='body2'
                    className={this.props.classes.listStyle}
                  >
                    {index + 1}. {item}
                  </Typography>
                )
              })
            }

            <Typography
              variant='body2'
              className={this.props.classes.highlightText}
            >
              How are we different?
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.description}
            >
              {`LifCare tackles the triple issue of medicine availability, accessibility and affordability that chronic patients in India have to face on an everyday basis. Our primary focus is to allow our subscribed members to conveniently buy all their medicines online at attractive discounts.`}
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.breakDownText}
            >
              LifCare provides:
            </Typography>
            {
              lifcareProvides.map((item, index) => {
                return (
                  <Typography
                    variant='body2'
                    className={this.props.classes.listStyle}
                  >
                    {index + 1}. {item}
                  </Typography>
                )
              })
            }
            <Typography
              variant='body2'
              className={this.props.classes.highlightText}
            >
              Purpose & Procedure
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.description}
            >
              Our goal is to make healthcare in India affordable, accessible and extremely convenient. Our online medicine shopping app allows easy prescription upload which is further validated by in-house doctors, post which the medicines are delivered.
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.breakDownText}
            >
              Medicines are stored in state-of-the-art warehouse facilities. LifCare provides last-mile cold storage delivery to ensure 100% medicine effectiveness.
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.highlightText}
            >
              Value Propositions
            </Typography>
            <Typography
              variant='body2'
              className={this.props.classes.listStyle}
            >
              1. <b>One-Step Refill Module - </b>The LifCare app stores data from your previous orders so that you don’t have to waste time searching up your regular medicines every time. Just click on the refill button to re-order the same monthly medications from the app.<br /><br />
              2. <b>Discounts - </b>You can buy medicines online and get discounts on every order (FLAT 15% OFF on MRP) or become a LifCare member and enjoy our additional perks exclusively handcrafted for our loyal members.<br /><br />
              3. <b>Share and Care - </b>We want to help more and more people get better access to their chronic medications effortlessly. You can help your friends and families get their medicines from us by referring them to LifCare and by doing so, you and your referred members will get additional discounts from us as we thank you for recommending us to them.<br /><br />
              4. <b>Full-Body Home Health Check-ups -</b> Now you can get your full-body tests done for blood sugar, cholesterol, liver, kidney, thyroid, vitamin and iron deficiency etc. from the comfort of your home.  LifCare lab assistants collect samples right from your home at your convenient time and we’ll keep you updated all along and share the test results with you digitally.<br /><br />
            </Typography>
          </div>
        }
      />
    )
  }
}

export default withStyles(styles)(AboutUs)
