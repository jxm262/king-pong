import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers/players'
import DevTools from '../containers/DevTools'


const enhancer = compose(
    applyMiddleware(thunkMiddleware, createLogger()),
    DevTools.instrument()
)

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/players', () => {
      const nextRootReducer = require('./reducers/players').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
