/* eslint-disable react/forbid-prop-types */
import React from 'react'
import {
  StyleSheet, View, TouchableOpacity, Dimensions,
} from 'react-native'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { Colors, TextStyles } from '../../assets/styles'
import Text from './Text'

const { width } = Dimensions.get('window')
const MainButton = (props) => {
  const {
    onPress, title, style,
  } = props

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={{
        width: 343 / 375 * width,
        height: 57 / 375 * width,
        borderRadius: 5 / 375 * width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryBlue,
        ...style,
      }}
      >
        <Text style={{ ...TextStyles.heading5, color: Colors.backgroundWhite }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default MainButton
