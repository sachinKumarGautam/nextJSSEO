// pages/_app.js
import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import { PersistGate } from 'redux-persist/integration/react'
import WrapperComp from './wrapperComp'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { HOME_PAGE } from '../routes/RouteConstant'
import { getReplacedString } from '../utils/replaceConstants'
import Router from 'next/router'

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    constructor (props) {
      super(props)
      this.state = {
        isError: false
      }
      this.getErrorComponent = this.getErrorComponent.bind(this)
    }

    onClickOfHome () {
      const url = getReplacedString(HOME_PAGE)
      Router.push(url)
      this.setState({
        isError: false
      })
    }

    componentDidCatch (error, errorInfo) {
      this.setState({
        isError: true
      })
    }

    getErrorComponent () {
      return (
        <div style={{ textAlign: 'center', margin: '25%' }}>
          <Typography variant='subheading'>
            Something went wrong!
          </Typography>
          <Button color='primary' onClick={this.onClickOfHome.bind(this)}>
            Go To Home
          </Button>
        </div>
      )
    }

    static async getInitialProps ({ Component, router, ctx }) {
      let pageProps = {}

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      return { pageProps }
    }

    render () {
      if (this.state.isError) {
        return this.getErrorComponent()
      }
      const { store } = this.props
      return (
        <Container>
          <Provider store={store}>
            <PersistGate persistor={store.__persistor} loading={null}>
              <WrapperComp {...this.props} />
            </PersistGate>
          </Provider>
        </Container>
      )
    }
  }
)
