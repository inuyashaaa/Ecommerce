/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { Colors } from '../../assets/styles'
import { Helpers } from '../utils'

const HOC = (WrappedComponent) => {
  const App = (props) => {
    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        if (!state.isConnected) {
          Helpers.showMess('Lost Internet Connection', 'error', {
            autoHide: false,
          })
        } else {
          Helpers.hideMess()
        }
      })

      return () => {
        unsubscribe()
      }
    })

    return (
      <View style={styles.container}>
        <WrappedComponent {...props} />
      </View>
    )
  }

  return App
}

export default HOC
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
})
