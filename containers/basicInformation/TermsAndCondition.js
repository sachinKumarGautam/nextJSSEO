import React, { Component } from 'react'
import StaticPage from '../../components/StaticPage'

import terms from './terms.html'

class TermsAndCondition extends Component {
  render() {
    return (
      <StaticPage
        title='Terms & conditions'
        content={<div dangerouslySetInnerHTML={terms} />}
      />
    )
  }
}

export default TermsAndCondition
