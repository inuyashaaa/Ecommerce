import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'
import { useSelector } from 'react-redux'
import { SCREEN_NAME } from '../configs'

const SplashScreen = (props) => {
  const { navigation } = props
  const user = useSelector((state) => state.user)
  const persist = useSelector((state) => state._persist)
  useEffect(() => {
    if (persist.rehydrated) {
      if (!user?.token) {
        SplashScreenLib.hide()
        navigation.navigate(SCREEN_NAME.LoginScreen)
        return
      }
      SplashScreenLib.hide()
      navigation.navigate(SCREEN_NAME.MAIN_TAB, { screen: SCREEN_NAME.HomeScreen })
    }
  }, [persist.rehydrated])

  return (
    <View />
  )
}

export default SplashScreen
