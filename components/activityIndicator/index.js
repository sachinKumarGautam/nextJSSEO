import React from 'react'
class ActivityIndicator extends React.Component {
  render () {
    const { isLoading, LoaderComp, bottomLoader } = this.props
    return (
      <React.Fragment>
        {isLoading && (LoaderComp || null)}
        {!bottomLoader && !isLoading && this.props.children}
        {bottomLoader && this.props.children}
      </React.Fragment>
    )
  }
}

export default ActivityIndicator
