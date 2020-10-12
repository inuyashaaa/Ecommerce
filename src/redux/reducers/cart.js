/* eslint-disable no-case-declarations */
import _ from 'lodash'
import { cartTypes } from '../types'

const initState = []

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT_TO_CART:
      const newSate = _.unionBy(state, [action?.payload?.data], 'id')
      return [...newSate]
    default:
      return state
  }
}

export default cartReducer
