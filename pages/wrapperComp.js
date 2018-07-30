import { withCommonWrapper } from '../components/HOCWrapper/CommonWrapper'

const WrapperComp = props => {
  const { Component, pageProps } = props
  return <Component {...pageProps} addToCartHandler={props.addToCartHandler} />
}

export default withCommonWrapper(WrapperComp)
