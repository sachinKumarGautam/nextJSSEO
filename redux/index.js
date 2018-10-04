import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import reducer from './reducer'
import { rootEpic } from './epics'
import errorReporter from '../utils/errorReporter'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { migrations } from './persistMigration'

const composeEnhancers =
  (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export let config = null
export let store = null

function makeConfiguredStore (rootReducer, initialState) {
  const epicMiddleware = createEpicMiddleware(rootEpic)
  // const logger = createLogger({ collapsed: true }) // log every action to see what's happening behind the scenes.
  const reduxMiddleware = composeEnhancers(
    applyMiddleware(thunkMiddleware, epicMiddleware, errorReporter)
  )

  return createStore(rootReducer, initialState, reduxMiddleware)
}

export default function initStore (
  initialState,
  { isServer, req, debug, storeKey }
) {
  if (isServer) {
    // initialState = initialState || {fromServer: 'foo'}

    store = makeConfiguredStore(reducer, initialState)
    return store
  } else {
    // we need it only on client side
    const {
      persistStore,
      createMigrate,
      persistReducer
    } = require('redux-persist')
    const storage = require('redux-persist/es/storage').default

    const persistConfig = {
      key: 'lifcareSite1.0.0',
      version: 0,
      debug: false,
      stateReconciler: autoMergeLevel2,
      blacklist: [
        'medicineListState',
        'orderListState',
        'prescriptionState',
        'deliveryDetailsState',
        'patientDetailsState',
        'thankYouState'
      ],
      migrate: createMigrate(migrations, { debug: false }),
      storage
    }

    config = persistConfig

    const persistedReducer = persistReducer(persistConfig, reducer)
    store = makeConfiguredStore(persistedReducer, initialState)

    store.__persistor = persistStore(store) // Nasty hack

    return store
  }
}
