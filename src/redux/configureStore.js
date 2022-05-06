import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './saga'

const composeEnhancers = compose

const sagaMiddleware = createSagaMiddleware()

function configureStore() {
   const middlewares = [sagaMiddleware]
   const enhancers = applyMiddleware(...middlewares)
   // if it in dev
   const store = createStore(reducer, composeEnhancers(enhancers))
   sagaMiddleware.run(rootSaga)

   return store
}

export default configureStore
