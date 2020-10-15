/* eslint-disable no-case-declarations */
import _ from 'lodash'
import { cartTypes } from '../types'

const initState = []

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT_TO_CART:
      const newProduct = action?.payload?.data
      const indexOfProduct = _.findIndex(state, { id: newProduct.id })
      if (indexOfProduct === -1) {
        newProduct.number = 1
        return [...state, newProduct]
      }
      state[indexOfProduct].number += 1
      return [...state]
    default:
      return state
  }
}

export default cartReducer
