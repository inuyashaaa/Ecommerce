/* eslint-disable no-case-declarations */
import { userTypes } from '../types'

const initState = {
  token: '',
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userTypes.REGISTER_USER:
      return { ...state }
    case userTypes.LOGIN_USER_SUCCESS:
      const { token } = action?.payload?.data
      return { ...state, token }
    default:
      return state
  }
}

export default userReducer
