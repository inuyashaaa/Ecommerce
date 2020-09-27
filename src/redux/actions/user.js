import { userTypes } from '../types'

export const registerUser = (data) => {
  return {
    type: userTypes.REGISTER_USER,
    payload: { data },
  }
}
export const loginUser = (data) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: { data },
  }
}
