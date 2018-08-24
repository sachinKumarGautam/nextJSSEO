import FullPageMainLoader from './FullPageMainLoader'

import React from 'react'

import CommonSpinner from './CommonSpinner'

/* spinner props
spinner Type
size
text
toast = bool
isLoading = bool
color = color of spinner
customStyle
* */

class Loader extends React.Component {
  getLoaderType () {
    const {
      loaderType,
      customStyle,
      isLoading,
      text,
      thickness,
      size
    } = this.props

    if (isLoading) {
      switch (loaderType) {
        case 'commonSpinner':
          return (
            <CommonSpinner
              isLoading={isLoading}
              customStyle={customStyle}
              text={text}
              size={size}
              thickness={thickness}
            />
          )

        case 'fullPageSpinner':
          return <FullPageMainLoader />

        default:
          return (
            <CommonSpinner
              loaderStyle={loaderStyle}
              isLoading={isLoading}
              className={className}
              text={text}
              size={size}
              thickness={thickness}
              customLoaderText={customLoaderText}
            />
          )
      }
    } else {
      return null
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.getLoaderType()}
      </React.Fragment>
    )
  }
}

export default Loader
