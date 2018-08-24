import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'

class TextErrorMessage extends Component {
  render () {
    return (
      <Typography
        variant='caption'
        className={this.props.customStyle}
      >
        {this.props.errorMessage}
      </Typography>
    )
  }
}

export default TextErrorMessage
