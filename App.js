/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import {
  TouchableOpacity, View, Image, SafeAreaView, StyleSheet,
} from 'react-native'
import {
  SplashScreen, LoginScreen,
  RegisterScreen, HomeScreen,
  ExploreScreen, CartScreen,
  OfferScreen, AccountScreen,
} from './src/screens'
import { SCREEN_NAME, TAB_DATA } from './src/configs'
import store from './src/redux/store'
import { Colors, TextStyles } from './assets/styles'
import { navigationRef } from './src/utils/NavigationHelpers'
import { Text } from './src/components'
import {
  home, explore, cart, offer, account,
} from './assets/images'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.backgroundWhite }}>
      <View style={{
        flexDirection: 'row',
        borderTopColor: Colors.neutralLight,
        borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: Colors.backgroundWhite,
      }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          return (
            <TouchableOpacity
              onPress={onPress}
              style={{
                flex: 1, height: 60, alignItems: 'center', justifyContent: 'flex-end',
              }}
            >
              <Image
                source={TAB_DATA[index].image}
                style={{
                  width: 24,
                  height: 24,
                  marginBottom: 4,
                  tintColor: isFocused ? Colors.primaryBlue : Colors.neutralGrey,
                }}
                resizeMode="contain"
              />
              <Text
                style={
                  !isFocused
                    ? { ...TextStyles.captionNormalTextRegular, color: Colors.neutralGrey }
                    : { ...TextStyles.captionNormalTextBold, color: Colors.primaryBlue }
                }
              >
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name={SCREEN_NAME.HomeScreen}
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name={SCREEN_NAME.ExploreScreen}
        component={ExploreScreen}
        options={{ title: 'Explore' }}
      />
      <Tab.Screen
        name={SCREEN_NAME.CartScreen}
        component={CartScreen}
        options={{ title: 'Cart' }}
      />
      <Tab.Screen
        name={SCREEN_NAME.OfferScreen}
        component={OfferScreen}
        options={{ title: 'Offer' }}
      />
      <Tab.Screen
        name={SCREEN_NAME.AccountScreen}
        component={AccountScreen}
        options={{ title: 'Account' }}
      />
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
