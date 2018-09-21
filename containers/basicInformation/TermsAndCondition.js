import React, { Component } from 'react'
import StaticPage from '../../components/StaticPage'

import { withStyles } from '@material-ui/core/styles'
// import { Typography } from '@material-ui/core'

const styles = theme => {
  return {}
}

class TermsAndCondition extends Component {
  render() {
    return (
      <StaticPage
        title='Terms & conditions'
        content={''}
      />
    )
  }
}

export default withStyles(styles)(TermsAndCondition)
