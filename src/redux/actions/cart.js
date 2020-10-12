import { cartTypes } from '../types'

export const addProductToCart = (data, callback) => {
  return {
    type: cartTypes.ADD_PRODUCT_TO_CART,
    payload: { data, callback },
  }
}
