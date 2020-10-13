import { showMessage } from 'react-native-flash-message'
import { MessageStyle } from '../../assets/styles'

export const showMess = (message, type = 'error') => {
  if (type === 'success') {
    return showMessage({
      message,
      ...MessageStyle.success,
    })
  }
  if (type === 'info') {
    return showMessage({
      message,
      ...MessageStyle.success,
    })
  }
  return showMessage({
    message,
    ...MessageStyle.error,
  })
}

export const secondsToStringTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8).split(':')
}
