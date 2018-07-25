import { withCommonWrapper } from '../components/HOCWrapper/CommonWrapper'

const TestComp = props => {
  const { Component, pageProps } = props
  return <Component {...pageProps} {...props} />
}

export default withCommonWrapper(TestComp)
