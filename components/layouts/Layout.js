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
      <meta name='description' content={props.metaDescription} />
      <meta name='keywords' content={props.metaKeywords} />
      {props.metaDescription && <meta name='description' content={props.metaDescription} />}
      {props.metaKeywords && <meta name='keywords' content={props.metaKeywords} />}
      {props.title && <meta name='og:title' content={props.title} />}
      {props.metaDescription && <meta name='og:description' content={props.metaDescription} />}
      {props.canonical && <link rel="canonical" href={props.canonical} />}
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
