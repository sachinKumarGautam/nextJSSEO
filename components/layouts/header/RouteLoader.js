import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import LinearProgress from '@material-ui/core/LinearProgress'

// import '../../../routeLoader.css'

function LinearIndeterminate (props) {
  const { classes } = props
  return (
    <div>
      <LinearProgress />
    </div>
  )
}

Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    </Head>
  </div>
)
