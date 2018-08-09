import { withCommonWrapper } from '../components/HOCWrapper/CommonWrapper'

const WrapperComp = props => {
  const { Component, pageProps } = props
  return (
    <div>
      <Component {...pageProps} addToCartHandler={props.addToCartHandler} />
    </div>
  )
}

export default withCommonWrapper(WrapperComp)
