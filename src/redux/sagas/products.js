import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { productTypes } from '../types'
import { API_URL } from '../../configs'

function* getProducts(action) {
  const { callback, data } = action?.payload
  const { token } = data
  try {
    const response = yield call(() => axios.post(`${API_URL}/product`, {
      token,
    }))

    yield put({
      type: productTypes.GET_PRODUCTS_SUCCESS,
      payload: { data: response?.data?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}

export default function* productSaga() {
  yield takeLatest(productTypes.GET_PRODUCTS, getProducts)
}
