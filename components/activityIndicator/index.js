import React from 'react'

class ActivityIndicator extends React.Component {
  render () {
    const { isLoading, LoaderComp, bottomLoader } = this.props
    return (
      <React.Fragment>
        {!bottomLoader && !isLoading && this.props.children}
        {bottomLoader && this.props.children}
        {isLoading && (LoaderComp || null)}
      </React.Fragment>
    )
  }
}

export default ActivityIndicator
