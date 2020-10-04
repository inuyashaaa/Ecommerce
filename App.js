import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import {
  SplashScreen, LoginScreen,
  RegisterScreen, HomeScreen,
  ExploreScreen, CartScreen,
  OfferScreen, AccountScreen,
} from './src/screens'
import { SCREEN_NAME } from './src/configs'
import store from './src/redux/store'
import { Colors, TextStyles } from './assets/styles'
import { navigationRef } from './src/utils/NavigationHelpers'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREEN_NAME.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAME.ExploreScreen} component={ExploreScreen} />
      <Tab.Screen name={SCREEN_NAME.CartScreen} component={CartScreen} />
      <Tab.Screen name={SCREEN_NAME.OfferScreen} component={OfferScreen} />
      <Tab.Screen name={SCREEN_NAME.AccountScreen} component={AccountScreen} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name={SCREEN_NAME.SplashScreen} component={SplashScreen} />
          <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={SCREEN_NAME.RegisterScreen} component={RegisterScreen} />
          <Stack.Screen name={SCREEN_NAME.MAIN_TAB} component={MainTab} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  )
}

export default App
