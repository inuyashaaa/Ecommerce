import React from 'react'
import { Text, Dimensions, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../assets/styles'

const { width } = Dimensions.get('window')
const TextComponent = (props) => {
  const { style = {}, children } = props
  const flattenStyle = StyleSheet.flatten(style)
  const { fontSize = 12, lineHeight = 1.8 } = flattenStyle
  const fontScale = fontSize / 375 * width

  return (
    <Text
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}

      style={{
        ...Fonts.regular,
        color: Colors.neutralGrey,
        ...flattenStyle,
        lineHeight: fontScale * lineHeight,
        fontSize: fontScale,
      }}

      allowFontScaling={false}
    >
      {children}
    </Text>
  )
}

export default TextComponent
