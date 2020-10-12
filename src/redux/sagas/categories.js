import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { categoryTypes } from '../types'
import { API_URL } from '../../configs'

function* getCategories(action) {
  const { callback, data } = action?.payload
  const { token } = data
  try {
    const response = yield call(() => axios.post(`${API_URL}/category`, {
      token,
    }))

    yield put({
      type: categoryTypes.GET_CATEGORIES_SUCCESS,
      payload: { data: response?.data?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}

export default function* productSaga() {
  yield takeLatest(categoryTypes.GET_CATEGORIES, getCategories)
}
