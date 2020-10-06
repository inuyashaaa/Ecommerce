import React from 'react'
import {
  SafeAreaView, View, TouchableOpacity, StyleSheet, Image,
} from 'react-native'
import { Colors, TextStyles } from '../../assets/styles'
import { TAB_DATA } from '../configs'
import Text from './Text'

const MyTabBar = ({ state, descriptors, navigation }) => {
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
              key={`tabbar-${route.key}`}
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

export default MyTabBar
