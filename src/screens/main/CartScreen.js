import React from 'react'
import {
  View, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ScrollView,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Dash from 'react-native-dash'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import {
  product4, love, trash,
} from '../../../assets/images'
import { Colors, Shadows, TextStyles } from '../../../assets/styles'
import { MainButton, Text } from '../../components'
import { Helpers } from '../../utils'

const { width } = Dimensions.get('window')
const CartScreen = () => {
  const carts = useSelector(createSelector((state) => state.cart, (cart) => cart))

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView />
        <View style={{
          paddingHorizontal: 16 / 375 * width,
          paddingVertical: 28 / 375 * width,
          borderBottomWidth: 2 * StyleSheet.hairlineWidth,
          borderBottomColor: Colors.neutralLight,
        }}
        >
          <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>Your Cart</Text>
        </View>

        <View style={{ paddingHorizontal: 16 / 375 * width }}>
          {carts.map((cart) => {
            return (
              <View style={{
                flexDirection: 'row',
                borderRadius: 5 / 375 * width,
                borderWidth: 2 * StyleSheet.hairlineWidth,
                borderColor: Colors.neutralLight,
                padding: 16 / 375 * width,
                marginTop: 16 / 375 * width,
              }}
              >
                <FastImage
                  source={{ uri: cart.product_image_file }}
                  style={{
                    width: 72 / 375 * width,
                    height: 72 / 375 * width,
                    borderRadius: 5 / 375 * width,
                  }}
                  resizeMode="contain"
                />
                <View style={{ marginLeft: 12 / 375 * width, flex: 1, justifyContent: 'space-between' }}>
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                  }}
                  >
                    <Text style={{ ...TextStyles.heading6, color: Colors.neutralDark, width: 160 / 375 * width }}>{cart.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <FastImage
                        source={love}
                        style={{
                          width: 24 / 375 * width,
                          height: 24 / 375 * width,
                          marginRight: 8 / 375 * width,
                        }}
                        resizeMode="contain"
                      />
                      <FastImage
                        source={trash}
                        style={{
                          width: 24 / 375 * width,
                          height: 24 / 375 * width,
                        }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ ...TextStyles.heading6, color: Colors.primaryBlue }}>
                      {
                        Helpers.formatCurrency(parseFloat(cart.saledPrice).toFixed(2).toString())
                      }
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity style={{
                        width: 32 / 375 * width,
                        height: 24 / 375 * width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderColor: Colors.neutralLight,
                        borderWidth: StyleSheet.hairlineWidth,
                      }}
                      >
                        <Text>-</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{
                        width: 40 / 375 * width,
                        height: 24 / 375 * width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: Colors.neutralLight,
                      }}
                      >
                        <Text style={{
                          ...TextStyles.bodyNormalTextRegular,
                          textAlign: 'center',
                        }}
                        >
                          {cart.number}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{
                        width: 32 / 375 * width,
                        height: 24 / 375 * width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        borderColor: Colors.neutralLight,
                        borderWidth: StyleSheet.hairlineWidth,
                      }}
                      >
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          })}

          <View style={{
            flexDirection: 'row',
            marginTop: 32 / 375 * width,
            marginBottom: 16 / 375 * width,
          }}
          >
            <View style={{
              flex: 1,
              justifyContent: 'center',
              borderTopLeftRadius: 5 / 375 * width,
              borderBottomLeftRadius: 5 / 375 * width,
              borderWidth: StyleSheet.hairlineWidth,
              borderRightWidth: 0,
              borderColor: Colors.neutralLight,
              paddingLeft: 16 / 375 * width,
            }}
            >
              <Text>Enter Cupon Code</Text>
            </View>
            <TouchableOpacity
              style={{
                width: 87 / 375 * width,
                height: 56 / 375 * width,
                backgroundColor: Colors.primaryBlue,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5 / 375 * width,
                borderBottomRightRadius: 5 / 375 * width,
              }}
            >
              <Text style={{ ...TextStyles.bodyNormalTextBold, color: Colors.backgroundWhite }}>Apply</Text>
            </TouchableOpacity>
          </View>

          <View style={{
            padding: 16 / 375 * width,
            borderWidth: 2 * StyleSheet.hairlineWidth,
            borderColor: Colors.neutralLight,
            borderRadius: 5 / 375 * width,
          }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 / 375 * width }}>
              <Text style={{ ...TextStyles.bodyNormalTextRegular }}>Items (3)</Text>
              <Text style={{ ...TextStyles.bodyNormalTextRegular, color: Colors.neutralDark }}>$598.86</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 / 375 * width }}>
              <Text style={{ ...TextStyles.bodyNormalTextRegular }}>Shipping</Text>
              <Text style={{ ...TextStyles.bodyNormalTextRegular, color: Colors.neutralDark }}>$40.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 / 375 * width }}>
              <Text style={{ ...TextStyles.bodyNormalTextRegular }}>Import charges</Text>
              <Text style={{ ...TextStyles.bodyNormalTextRegular, color: Colors.neutralDark }}>$128.00</Text>
            </View>

            <Dash
              style={{ width: '100%', height: 2 * StyleSheet.hairlineWidth }}
              dashColor={Colors.neutralLight}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 / 375 * width }}>
              <Text style={{ ...TextStyles.heading6, color: Colors.neutralDark }}>Import charges</Text>
              <Text style={{ ...TextStyles.heading6, color: Colors.primaryBlue }}>$128.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ alignItems: 'center', paddingBottom: 16 / 375 * width }}>
        <MainButton
          style={{ ...Shadows.mainButtonShadow }}
          title="Check Out"
          onPress={() => { }}
        />
      </View>

    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
})
