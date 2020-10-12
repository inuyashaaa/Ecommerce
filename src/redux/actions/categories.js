import { categoryTypes } from '../types'

export const getCategories = (data, callback) => {
  return {
    type: categoryTypes.GET_CATEGORIES,
    payload: { data, callback },
  }
}
