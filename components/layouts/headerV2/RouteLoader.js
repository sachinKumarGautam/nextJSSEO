import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
Router.beforePopState = () => console.log('sachin sachin')

// Router.beforePopState(({ url, as, options }) => {
//   // // I only want to allow these two routes!
//   // if (as !== "/" || as !== "/other") {
//   //   // Have SSR render bad routes as a 404.
//   //   window.location.href = as
//   //   return false
//   // }

//   console.log('Sachin Kumar')

//   return true
// })

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    </Head>
  </div>
)
