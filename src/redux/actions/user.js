import { userTypes } from '../types'

export const registerUser = (data, callback) => {
  return {
    type: userTypes.REGISTER_USER,
    payload: { data, callback },
  }
}
export const loginUser = (data, callback) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: { data, callback },
  }
}
