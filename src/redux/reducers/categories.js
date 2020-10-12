/* eslint-disable no-case-declarations */
import { categoryTypes } from '../types'

const initState = []

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryTypes.GET_CATEGORIES_SUCCESS:
      return action?.payload?.data
    default:
      return state
  }
}

export default categoryReducer
