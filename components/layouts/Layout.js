import Header from './headerV2'
import Footer from './footer'
import Router from 'next/router'

import Head from 'next/head'
import * as gtag from '../../utils/gaTag'

Router.onRouteChangeComplete = url => gtag.pageview(url)

const Layout = props => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Header
      addToCartHandler={props.addToCartHandler}
      authentication={props.authentication}
      path={props.path}
      isHomePage={props.isHomePage}
    />
    {props.children}
    <Footer />
  </div>
)

export default Layout
