import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { userTypes } from '../types'
import { API_URL } from '../../configs'

function* loginUser(action) {
  const { callback, data } = action?.payload
  const { email, password } = data
  try {
    const response = yield call(() => axios.post(`${API_URL}/user/login`, {
      email,
      password,
    }))

    yield put({
      type: userTypes.LOGIN_USER_SUCCESS,
      payload: { data: response?.data?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}

function* registerUser(action) {
  try {
    const response = yield call(() => axios.post(`${API_URL}/user/register`, {
      email: action?.payload?.data?.email,
      password: action?.payload?.data?.password,
      fullname: action?.payload?.data?.fullname,
    }))

    yield put({
      type: userTypes.REGISTER_USER_SUCCESS,
      payload: { data: response.data },
    })
  } catch (error) {
    console.tron.log({ error: error.message })
  }
}

export default function* userSaga() {
  yield takeLatest(userTypes.LOGIN_USER, loginUser)
  yield takeLatest(userTypes.REGISTER_USER, registerUser)
}
