import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import reducer from './reducer'
import { rootEpic } from './epics'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default function initStore (initialState) {
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const logger = createLogger({ collapsed: true }) // log every action to see what's happening behind the scenes.
  const reduxMiddleware = composeEnhancers(applyMiddleware(thunkMiddleware, epicMiddleware))

  return createStore(reducer, initialState, reduxMiddleware)
};
