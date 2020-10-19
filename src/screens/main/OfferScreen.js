import React, { useEffect, useState } from 'react'
import {
  View, SafeAreaView, StyleSheet, Dimensions,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { Colors, TextStyles } from '../../../assets/styles'
import { Text } from '../../components'
import { backgroundFlashSale } from '../../../assets/images'
import { Helpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375
const OfferScreen = () => {
  const [endTime, setEndTime] = useState(3600)

  useEffect(() => {
    if (endTime > 1) {
      const inter = setInterval(() => {
        setEndTime(endTime - 1)
        clearInterval(inter)
      }, 1000)
    }
  }, [endTime])
  const timeInString = Helpers.secondsToStringTime(endTime)
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <View style={{
        paddingHorizontal: 16 / 375 * width,
        paddingVertical: 28 / 375 * width,
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.neutralLight,
      }}
      >
        <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>Offer</Text>
      </View>
      <View style={{
        backgroundColor: Colors.primaryBlue, width: 343 * rate, height: 80 * rate, marginHorizontal: 16 * rate, marginVertical: 16 * rate,
      }}
      >
        <View style={{
          flexDirection: 'column', height: 48 * rate, width: 212 * rate, marginLeft: 16 * rate, marginTop: 16 * rate,
        }}
        >
          <Text style={{ ...TextStyles.heading4, color: Colors.backgroundWhite }}>
            Use “MEGSL” Cupon For
          </Text>
          <Text style={{ ...TextStyles.heading4, color: Colors.backgroundWhite }}>
            Get 90% off
          </Text>
        </View>
      </View>
      <View style={{
        marginHorizontal: 16 / 375 * width,
        marginBottom: 50 / 375 * width,

      }}
      >
        <FastImage
          source={backgroundFlashSale}
          style={{
            height: 206 / 375 * width,
            width: 343 / 375 * width,
            borderRadius: 5 / 375 * width,
          }}
        />
        <View style={{
          position: 'absolute',
          top: 32 / 375 * width,
          left: 24 / 375 * width,
        }}
        >
          <Text style={{ ...TextStyles.heading2, color: Colors.backgroundWhite, width: 209 / 375 * width }}>Super Flash Sale 50% Off</Text>
          <View style={{ marginTop: 30 / 375 * width, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              backgroundColor: Colors.backgroundWhite,
              width: 42 / 375 * width,
              height: 42 / 375 * width,
              borderRadius: 5 / 375 * width,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Text style={{ color: Colors.neutralDark, ...TextStyles.heading4 }}>
                {timeInString[0]}
              </Text>
            </View>
            <Text style={{ color: Colors.backgroundWhite, ...TextStyles.heading5, marginHorizontal: 5 / 375 * width }}>:</Text>
            <View style={{
              backgroundColor: Colors.backgroundWhite,
              width: 42 / 375 * width,
              height: 42 / 375 * width,
              borderRadius: 5 / 375 * width,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Text style={{ color: Colors.neutralDark, ...TextStyles.heading4 }}>
                {timeInString[1]}
              </Text>
            </View>
            <Text style={{ color: Colors.backgroundWhite, ...TextStyles.heading5, marginHorizontal: 5 / 375 * width }}>:</Text>
            <View style={{
              backgroundColor: Colors.backgroundWhite,
              width: 42 / 375 * width,
              height: 42 / 375 * width,
              borderRadius: 5 / 375 * width,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Text style={{ color: Colors.neutralDark, ...TextStyles.heading4 }}>
                {timeInString[2]}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{
        marginHorizontal: 16 / 375 * width,
        marginBottom: 50 / 375 * width,

      }}
      >
        <FastImage
          source={backgroundFlashSale}
          style={{
            height: 206 / 375 * width,
            width: 343 / 375 * width,
            borderRadius: 5 / 375 * width,
          }}
        />
        <View style={{
          height: 72 * rate,
          width: 295 * rate,
          flexDirection: 'column',
          position: 'absolute',
          marginTop: 32 * rate,
          marginHorizontal: 24 * rate,
        }}
        >
          <Text style={{ ...TextStyles.heading2, color: Colors.backgroundWhite }}>
            09% Off Super Mega Sale
          </Text>

          <Text style={{ ...TextStyles.bodyNormalTextRegular, color: Colors.backgroundWhite }}>
            Special birthday Lafyuu
          </Text>
        </View>
      </View>

    </View>

  )
}

export default OfferScreen
