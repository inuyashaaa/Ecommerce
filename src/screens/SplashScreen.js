import React, { useEffect } from 'react'
import { View } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'
import { useSelector, useDispatch } from 'react-redux'
import { SCREEN_NAME } from '../configs'
import { productActions, categoryActions } from '../redux/actions'
import { NavigationHelpers } from '../utils'

const SplashScreen = (props) => {
  const dispatch = useDispatch()
  const { navigation } = props
  const user = useSelector((state) => state.user)
  const persist = useSelector((state) => state._persist)
  useEffect(() => {
    if (persist.rehydrated) {
      if (!user?.token) {
        SplashScreenLib.hide()
        const timout = setTimeout(() => {
          clearTimeout(timout)
          NavigationHelpers.navigateToScreenAndReplace(SCREEN_NAME.LoginScreen)
        }, 0)
        return
      }

      dispatch(categoryActions.getCategories({
        token: user?.token,
      }, (response) => {
      }))

      dispatch(productActions.getProducts({
        token: user?.token,
      }, (response) => {
        if (!response?.success) {
          SplashScreenLib.hide()
          NavigationHelpers.navigateToScreenAndReplace(SCREEN_NAME.LoginScreen)
          return
        }
        SplashScreenLib.hide()
        navigation.navigate(SCREEN_NAME.MAIN_TAB, { screen: SCREEN_NAME.HomeScreen })
      }))
    }
  }, [persist.rehydrated])

  return (
    <View />
  )
}

export default SplashScreen
