import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../../assets/styles'

const HomeScreen = () => {
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.backgroundWhite,
    }}
    >
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen
