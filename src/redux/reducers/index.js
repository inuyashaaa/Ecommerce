import { combineReducers } from 'redux'
import userReducer from './user'
import productReducer from './products'
import categoryReducer from './categories'
import cartReducer from './cart'

const appReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
