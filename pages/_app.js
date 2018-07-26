// pages/_app.js
import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import { PersistGate } from 'redux-persist/integration/react'
import WrapperComp from './wrapperComp'

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    render () {
      const { store } = this.props
      return (
        <Container>
          <Provider store={store}>
            <PersistGate
              persistor={store.__persistor}
              loading={<div>Loading</div>}
            >
              <WrapperComp {...this.props} />
            </PersistGate>
          </Provider>
        </Container>
      )
    }
  }
)
