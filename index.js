import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import * as Sentry from '@sentry/react-native'
import App from './App'
import { name as appName } from './app.json'

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./src/configs/ReactotronConfig').then(() => console.log('Reactotron Configured'))
} else {
  console.tron = { log: () => true }
  Sentry.init({
    dsn: 'https://436a6b325ce7414fb55ac993b15beb7f@o239354.ingest.sentry.io/5458472',
  })
}

AppRegistry.registerComponent(appName, () => App)
