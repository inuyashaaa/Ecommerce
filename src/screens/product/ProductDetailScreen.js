import React, { useState } from 'react'
import {
  View, StyleSheet, Image, SafeAreaView, Dimensions, TouchableOpacity, FlatList, ScrollView, Alert,
} from 'react-native'
import { useDispatch } from 'react-redux'
import {
  back, search, more, nikeRed, heart, startActive, starDefault, avatar, product1, product2, product3, product4, product5,
} from '../../../assets/images'
import {
  Colors, Fonts, TextStyles, mainPaddingH,
} from '../../../assets/styles'
import {
  Text, SelectSizeComponent, SelectColorComponent, ProductCardComponent, MainButton,
} from '../../components'

import { sizeData, colorData } from '../../configs'
import { cartActions } from '../../redux/actions'
import { NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')

const ProductDetailScreen = (props) => {
  const dispatch = useDispatch()
  const currentProduct = props?.route?.params?.product
  const [currentSize, setCurrentSize] = useState('6')
  const [currentColor, setCurrentColor] = useState(Colors.primaryYellow)

  const handlePressBack = () => {
    NavigationHelpers.navigateBack()
  }

  const handleAddProductToCart = () => {
    dispatch(cartActions.addProductToCart(currentProduct))
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 26, paddingHorizontal: 16,
      }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={handlePressBack}
            hitSlop={{
              top: 10, left: 10, right: 10, bottom: 10,
            }}
          >
            <Image
              source={back}
              style={{
                width: 24,
                height: 24,
                marginLeft: 12,
                marginRight: 12,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Text
            style={[{
              color: Colors.neutralDark,
              ...TextStyles.heading4,
              width: 200,
            }]}
            numberOfLines={1}
          >
            {currentProduct.name}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={search}
            style={{ width: 24, height: 24, marginRight: 16 }}
            resizeMode="contain"
          />
          <Image
            source={more}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Image
          source={{ uri: currentProduct.product_image_file }}
          style={{
            width,
            height: 238,
          }}
          resizeMode="cover"
        />

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: mainPaddingH,
          paddingTop: 16,
          paddingBottom: 8,
        }}
        >
          <Text style={{ ...TextStyles.heading3, color: Colors.neutralDark, width: 275 / 375 * width }}>{currentProduct.name}</Text>
          <Image
            source={heart}
            style={{ width: 24, height: 24 }}
          />
        </View>

        <View style={{ flexDirection: 'row', paddingHorizontal: mainPaddingH, marginBottom: 16 }}>
          <Image
            source={startActive}
            style={{ width: 16, height: 16, marginRight: 4 }}
            resizeMode="contain"
          />
          <Image
            source={startActive}
            style={{ width: 16, height: 16, marginRight: 4 }}
            resizeMode="contain"
          />
          <Image
            source={startActive}
            style={{ width: 16, height: 16, marginRight: 4 }}
            resizeMode="contain"
          />
          <Image
            source={startActive}
            style={{ width: 16, height: 16, marginRight: 4 }}
            resizeMode="contain"
          />
          <Image
            source={starDefault}
            style={{ width: 16, height: 16 }}
            resizeMode="contain"
          />
        </View>

        <View style={{ flex: 1, paddingLeft: mainPaddingH }}>
          <Text style={{
            ...TextStyles.heading3,
            color: Colors.primaryBlue,
          }}
          >
            {currentProduct.price}
          </Text>

          <Text style={styles.textSectionTitle}>Select Size</Text>

          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={sizeData}
              keyExtractor={(item, index) => `list-size-${index}`}
              renderItem={({ item, index }) => {
                return (
                  <SelectSizeComponent
                    sizeValue={item}
                    onPress={(sizeValue) => {
                      setCurrentSize(sizeValue)
                    }}
                    isActive={currentSize === item}
                  />
                )
              }}
            />
          </View>

          <Text style={styles.textSectionTitle}>
            Select Color
          </Text>

          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={colorData}
              keyExtractor={(item, index) => `list-color-${index}`}
              renderItem={({ item, index }) => {
                return (

                  <SelectColorComponent
                    color={item}
                    onPress={(color) => {
                      setCurrentColor(color)
                    }}
                    isActive={currentColor === item}
                  />
                )
              }}
            />
          </View>

          <Text style={styles.textSectionTitle}>Specification</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', paddingRight: 16, paddingTop: 12,
          }}
          >
            <Text style={{ color: Colors.neutralDark }}>Shown:</Text>
            <Text style={{ textAlign: 'right' }}>{currentProduct.shown.split('\n').join('\n')}</Text>
          </View>

          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', paddingRight: 16, paddingVertical: 16,
          }}
          >
            <Text style={{ color: Colors.neutralDark }}>Style:</Text>
            <Text style={{ textAlign: 'right' }}>CD0113-400</Text>
          </View>
          <Text>{currentProduct.style}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 16 }}>
            <Text style={styles.textSectionTitle}>Review Product</Text>
            <Text style={[styles.textSectionTitle, { color: Colors.primaryBlue }]}>See More</Text>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 16, alignItems: 'center' }}>
            <Image
              source={startActive}
              style={{ width: 16, height: 16, marginRight: 4 }}
              resizeMode="contain"
            />
            <Image
              source={startActive}
              style={{ width: 16, height: 16, marginRight: 4 }}
              resizeMode="contain"
            />
            <Image
              source={startActive}
              style={{ width: 16, height: 16, marginRight: 4 }}
              resizeMode="contain"
            />
            <Image
              source={startActive}
              style={{ width: 16, height: 16, marginRight: 4 }}
              resizeMode="contain"
            />
            <Image
              source={starDefault}
              style={{ width: 16, height: 16, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text style={{ ...TextStyles.captionNormalTextBold }}>
              {'4.5 '}
              <Text style={{ ...TextStyles.captionNormalTextRegular }}>( 5 reviews )</Text>
            </Text>
          </View>

          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <Image
                source={avatar}
                style={{
                  width: 48,
                  height: 48,
                  marginRight: 16,
                }}
              />

              <View>
                <Text style={[styles.textSectionTitle, { marginTop: 0, marginBottom: 4 }]}>James Lawson</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={startActive}
                    style={{ width: 16, height: 16, marginRight: 4 }}
                    resizeMode="contain"
                  />
                  <Image
                    source={startActive}
                    style={{ width: 16, height: 16, marginRight: 4 }}
                    resizeMode="contain"
                  />
                  <Image
                    source={startActive}
                    style={{ width: 16, height: 16, marginRight: 4 }}
                    resizeMode="contain"
                  />
                  <Image
                    source={startActive}
                    style={{ width: 16, height: 16, marginRight: 4 }}
                    resizeMode="contain"
                  />
                  <Image
                    source={starDefault}
                    style={{ width: 16, height: 16, marginRight: 8 }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
            <Text>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</Text>

            <View style={{ flexDirection: 'row', paddingVertical: 16 }}>
              <Image
                source={product1}
                style={{ width: 72, height: 72, marginRight: 12 }}
              />
              <Image
                source={product2}
                style={{ width: 72, height: 72, marginRight: 12 }}
              />
              <Image
                source={product3}
                style={{ width: 72, height: 72, marginRight: 12 }}
              />
            </View>
            <Text style={{ ...TextStyles.captionNormalTextRegular }}>December 10, 2016</Text>
          </View>

          <View>
            <Text style={styles.textSectionTitle}>You Might Also Like</Text>
            <View style={{ flexDirection: 'row' }}>
              <ProductCardComponent
                onPress={() => { }}
                title="FS - Nike Air Max 270 React..."
                currentPrice="$299,43"
                defaultPrice="$534,33"
                saleOffvalue={`${24}% Off`}
              />

              <ProductCardComponent
                onPress={() => { }}
                title="FS - QUILTED MAXI CROS..."
                currentPrice="$299,43"
                defaultPrice="$534,33"
                saleOffvalue="24% Off"
              />

              <ProductCardComponent
                onPress={() => { }}
                title="FS - Nike Air Max 270 React..."
                currentPrice="$299,43"
                defaultPrice="$534,33"
                saleOffvalue="24% Off"
              />
            </View>
          </View>

        </View>
        {__DEV__ ? <View style={{ height: 100 }} /> : null}
      </ScrollView>
      <View style={{
        position: 'absolute', bottom: 0, width, alignItems: 'center',
      }}
      >
        <MainButton
          onPress={handleAddProductToCart}
          title="Add To Cart"
        />
        <SafeAreaView />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  textSectionTitle: {
    ...TextStyles.heading5,
    color: Colors.neutralDark,
    marginTop: 24,
    marginBottom: 14,
  },
})

export default ProductDetailScreen
