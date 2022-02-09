import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './saga'

const composeEnhancers =
   (process.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      // window.__REDUX_DEVTOOLS_EXTENSION__
      //    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      //    : f => f
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
