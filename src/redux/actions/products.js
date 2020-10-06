import { productTypes } from '../types'

export const getProducts = (data, callback) => {
  return {
    type: productTypes.GET_PRODUCTS,
    payload: { data, callback },
  }
}
