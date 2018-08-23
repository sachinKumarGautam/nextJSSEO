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

    /*
      bottomError: this is defined to check whether component is to be shown
                   while showing error component or not. If bottomError found
                   component will be shown.
      ErrorComp: Which error component to be shown
      isError: to check if error occured or not
    */
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
