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
    }
  }
}

class PrivacyPolicy extends Component {
  render () {
    return (
      <StaticPage
        title='Privacy & Data Security'
        content={
          <Typography
            variant='body2'
            className={this.props.classes.description}
          >
            At LifCare, your privacy and data security are extremely important to us. Our technology systems are built on the best global practices that prevent unauthorized access or third-party intrusion into personal information. Privacy policies of third party websites do not fall under LifCare's purview and once you leave the LifCare app/site, use of any information you provide shall be governed by the privacy policy of the third party operator of that website.<br />
            In case, you have any feedback for us please contact us at
            <a className={this.props.classes.linkStyle} href='mailto:care@lifcare.in'> care@lifcare.in.</a>
          </Typography>
        }
      />
    )
  }
}

export default withStyles(styles)(PrivacyPolicy)
