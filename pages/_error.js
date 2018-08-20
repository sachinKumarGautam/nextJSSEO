import React from 'react'
import PageNotFound from '../components/activityIndicator/error/PageNotFound'
import Layout from '../components/layouts/Layout'
import SnackbarErrorMessage from '../components/activityIndicator/error/SnackbarErrorMessage'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <Layout
        addToCartHandler={this.props.addToCartHandler}
      >
        <div>
          {
            (this.props.statusCode === 404 ||
            this.props.statusCode === 500 ||
            this.props.statusCode === 502)
            ? <PageNotFound/>
            : <SnackbarErrorMessage/>}
        </div>
      </Layout>
    )
  }
}
