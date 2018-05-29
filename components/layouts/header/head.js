import Head from 'next/head'
export default (props) => (
  <div>
    <Head>
      <title>{props.pageTitle}</title>
      {/* <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' /> */}
    </Head>
    <p>Hello world!</p>
  </div>
)
