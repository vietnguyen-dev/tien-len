import { createStore } from 'redux'
import gameReducer from '../reducer'

const store = createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store