import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'
import { useSelector } from 'react-redux'
import { SCREEN_NAME } from '../configs'

const SplashScreen = (props) => {
  const { navigation } = props
  const user = useSelector((state) => state.user)
  useEffect(() => {
    SplashScreenLib.hide()
    if (!user?.token) {
      navigation.navigate(SCREEN_NAME.LoginScreen)
      return
    }
    navigation.navigate(SCREEN_NAME.HomeScreen)
  }, [])

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen
