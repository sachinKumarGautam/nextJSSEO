import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import JssProvider from 'react-jss/lib/JssProvider'
import flush from 'styled-jsx/server'
import getPageContext from '../src/getPageContext'
import { GA_TRACKING_ID } from '../utils/gaTag'
import { homePage } from '../components/constants/PageTitle'

class MyDocument extends Document {
  render () {
    const { pageContext } = this.props

    return (
      <html lang='en' dir='ltr'>
        <Head>
          <title>{homePage.title}</title>
          {/* <meta charSet='utf-8' /> */}
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content={
              'user-scalable=0, initial-scale=1, ' +
                'minimum-scale=1, width=device-width, height=device-height'
            }
          />

          {/* PWA primary color */}
          <meta
            name='theme-color'
            content={pageContext.theme.palette.primary.main}
          />
          <link
            rel='icon'
            type='image/png'
            href={'/static/images/favicon.png'}
          />
          <link
            href='https://fonts.googleapis.com/css?family=Lato'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.0.13/css/all.css'
            integrity='sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp'
            crossOrigin='anonymous'
          />
          <link
            rel='stylesheet'
            type='text/css'
            // charset='UTF-8'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />

          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          /> */}

          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
          <script src='https://gist.github.com/mstijak/715fa2dd3f495a98386c3ebbadbabb8c' />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script src='https://checkout.razorpay.com/v1/checkout.js' async />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context of the page to collected side effects.
  const pageContext = getPageContext()
  const page = ctx.renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ))

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString()
          }}
        />
        {flush() || null}
      </React.Fragment>
    )
  }
}

export default MyDocument
