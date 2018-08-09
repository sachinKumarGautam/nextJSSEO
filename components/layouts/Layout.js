import Header from './header'
import Footer from './footer'

import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Header
      addToCartHandler={props.addToCartHandler}
      authentication={props.authentication}
      path={props.path}
    />
    {props.children}
    <Footer />
  </div>
)

export default Layout
