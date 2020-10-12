import React, { Component } from 'react'
import {
  Dimensions, StyleSheet, TouchableOpacity, View,
} from 'react-native'
import { Colors, Fonts, TextStyles } from '../../assets/styles'
import Text from './Text'

const { width } = Dimensions.get('window')

class SelectSizeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { color = Colors.primaryBlue, isActive, onPress } = this.props

    return (
      <TouchableOpacity
        onPress={() => onPress(color)}
      >
        <View style={{
          width: 48 / 375 * width,
          height: 48 / 375 * width,
          borderRadius: 24 / 375 * width,
          marginRight: 16 / 375 * width,
          backgroundColor: color,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          {
            isActive ? <View style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: Colors.backgroundWhite,
            }}
            /> : null
          }

        </View>
      </TouchableOpacity>
    )
  }
}

export default SelectSizeComponent
