import React from 'react'

class ActivityIndicator extends React.Component {
  render () {
    const {
      isLoading,
      LoaderComp,
      bottomLoader,
      isError,
      bottomError,
      ErrorComp
    } = this.props

    return (
      <React.Fragment>
        {((!bottomError && !isError) && (!bottomLoader && !isLoading)) && this.props.children}
        {(bottomError || bottomLoader) && this.props.children}
        {isLoading && (LoaderComp || null)}
        {isError && (ErrorComp || null)}
      </React.Fragment>
    )
  }
}

export default ActivityIndicator
