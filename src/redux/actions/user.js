import { userTypes } from '../types'

export const registerUser = (data) => {
  return {
    type: userTypes.REGISTER_USER,
    payload: { data },
  }
}
