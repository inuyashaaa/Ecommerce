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
