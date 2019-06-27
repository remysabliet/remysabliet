import { createStore } from 'redux'

import rootReducer from 'reducers'

const configureStore = initialState => {
  // createStore takes only 3 arguments, the third is the enhancer.
  const store = createStore(rootReducer, initialState)
  return store
}

export default configureStore
