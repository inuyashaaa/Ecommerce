import { combineReducers } from 'redux'
import userReducer from './user'
import productReducer from './products'

const appReducer = combineReducers({
  user: userReducer,
  products: productReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
