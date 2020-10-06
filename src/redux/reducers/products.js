/* eslint-disable no-case-declarations */
import { productTypes } from '../types'

const initState = []

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case productTypes.GET_PRODUCTS_SUCCESS:
      return action?.payload?.data
    default:
      return state
  }
}

export default productReducer
