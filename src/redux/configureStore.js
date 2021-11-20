import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import reducer from './reducers'

const composeEnhancers =
   (process.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })) ||
   compose

const sagaMiddleware = createSagaMiddleware()

function configureStore() {
   const middlewares = [sagaMiddleware]
   const enhancers = applyMiddleware(...middlewares)
   const store = createStore(reducer, composeEnhancers(enhancers))
   sagaMiddleware.run(rootSaga)

   return store
}

export default configureStore
