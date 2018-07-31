import { withCommonWrapper } from '../components/HOCWrapper/CommonWrapper'
import Loader from '../components/loader'

const WrapperComp = props => {
  const { Component, pageProps } = props
  return (
    <div>
      {/* <Loader /> */}
      <Component {...pageProps} addToCartHandler={props.addToCartHandler} />
    </div>
  )
}

export default withCommonWrapper(WrapperComp)
