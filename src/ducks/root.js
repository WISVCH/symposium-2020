import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import window from './window'

export const reducer = combineReducers({
  router,
  window,
})

export default reducer
