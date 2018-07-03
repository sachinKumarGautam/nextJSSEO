import Head from 'next/head'
export default ({pageTitle}) => (
  <div>
    <Head>
      <title>{pageTitle}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
    </Head>
  </div>
)
