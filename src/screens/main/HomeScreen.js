/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { product4, backgroundFlashSale } from '../../../assets/images'
import { Colors, TextStyles } from '../../../assets/styles'
import { Text, ProductCardComponent, MainTitle } from '../../components'
import { SCREEN_NAME } from '../../configs'
import { Helpers, NavigationHelpers } from '../../utils'

const HomeScreen = () => {
  const { width } = Dimensions.get('window')
  const [endTime, setEndTime] = useState(3600)
  const token = useSelector(createSelector((state) => state.user, (user) => user.token))
  const products = useSelector(createSelector((state) => state.products, (products) => products))
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))

  useEffect(() => {
    if (endTime > 1) {
      const inter = setInterval(() => {
        setEndTime(endTime - 1)
        clearInterval(inter)
      }, 1000)
    }
  }, [endTime])
  const timeInString = Helpers.secondsToStringTime(endTime)

  const handlePressMoreCategory = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ExploreScreen)
  }

  const handleViewProductDetail = (product) => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ProductDetailScreen, { product })
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={{
          marginHorizontal: 16 / 375 * width,
          marginBottom: 50 / 375 * width,
          marginTop: 16 / 375 * width,
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
        <View>
          <MainTitle
            title="Category"
            buttonTitle="More Category"
            onRightButtonPress={handlePressMoreCategory}
          />
          <FlatList
            style={{ marginBottom: 24 / 375 * width, marginTop: 12 / 375 * width }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            extraData={categories}
            keyExtractor={(item) => `list-category-${item.id}`}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                  <View style={{ alignItems: 'center', marginRight: 12, marginLeft: index === 0 ? 16 / 375 * width : 0 }}>
                    <View style={{
                      width: 70 / 375 * width,
                      height: 70 / 375 * width,
                      borderRadius: 35 / 375 * width,
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: Colors.neutralLight,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    >
                      <FastImage
                        source={{ uri: item.category_image_file }}
                        style={{ width: 24 / 375 * width, height: 24 / 375 * width }}
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={{ ...TextStyles.captionNormalTextRegular, color: Colors.neutralGrey, marginTop: 8 / 375 * width }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View>
          <MainTitle
            title="Flash Sale"
            buttonTitle="See More"
            onRightButtonPress={() => { }}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products.flashSale}
            extraData={products}
            keyExtractor={(item) => `list-product-${item?.id}`}
            renderItem={({ item, index }) => {
              return (
                <ProductCardComponent
                  onPress={() => handleViewProductDetail(item)}
                  imageSource={item.product_image_file}
                  title={item.name}
                  currentPrice={item?.price}
                  defaultPrice={item?.price}
                  saleOffvalue={`${item.sale}% Off`}
                />
              )
            }}
          />
        </View>

        <View style={{ marginTop: 24 }}>
          <MainTitle
            title="Mega Sale"
            buttonTitle="See More"
            onRightButtonPress={() => { }}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products.megaSale}
            extraData={products}
            keyExtractor={(item) => `list-product-${item?.id}`}
            renderItem={({ item, index }) => {
              return (
                <ProductCardComponent
                  onPress={() => handleViewProductDetail(item)}
                  imageSource={item.product_image_file}
                  title={item.name}
                  currentPrice={item?.price}
                  defaultPrice={item?.price}
                  saleOffvalue={`${item.sale}% Off`}
                />
              )
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
})
