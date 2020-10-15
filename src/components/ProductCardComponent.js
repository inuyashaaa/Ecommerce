/* eslint-disable react/forbid-prop-types */
import React from 'react'
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import { Colors, TextStyles } from '../../assets/styles'
import Text from './Text'
import { product4 } from '../../assets/images'

const ProductCardComponent = (props) => {
  const {
    imageSource, title, currentPrice, defaultPrice, saleOffvalue, onPress,
  } = props

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={{
        width: 141,
        height: 238,
        padding: 16,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.neutralLight,
        marginRight: 16,
      }}
      >
        <FastImage
          source={imageSource ? { uri: imageSource } : product4}
          style={{
            width: 109,
            height: 109,
            borderRadius: 5,
            marginBottom: 8,
          }}
          resizeMode="cover"
        />

        <Text style={{ ...TextStyles.heading6, color: Colors.neutralDark }} numberOfLines={2}>{title}</Text>
        <Text style={{ ...TextStyles.bodyNormalTextBold, color: Colors.primaryBlue, marginVertical: 8 }}>{currentPrice}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ ...TextStyles.captionNormalRegularLine, color: Colors.neutralGrey, marginRight: 8 }}>{defaultPrice}</Text>
          <Text style={{ ...TextStyles.captionNormalTextBold, color: Colors.primaryRed }}>{saleOffvalue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

ProductCardComponent.propTypes = {
  imageSource: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  currentPrice: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired,
  saleOffvalue: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default ProductCardComponent
