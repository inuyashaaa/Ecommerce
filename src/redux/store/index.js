import { createStore } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'
import rootReducer from '../reducers'
import Reactotron from '../../configs/ReactotronConfig'

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key',
  onError(error) {
    console.log(error)
  },
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, Reactotron.createEnhancer())
persistStore(store)
export default store
