/* eslint-disable no-shadow */
import React from 'react'
import {
  View, StyleSheet, SafeAreaView, TouchableOpacity,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { product4 } from '../../../assets/images'
import { Colors, TextStyles } from '../../../assets/styles'
import { Text, ProductCardComponent, MainTitle } from '../../components'
import { SCREEN_NAME } from '../../configs'
import { NavigationHelpers } from '../../utils'

const HomeScreen = () => {
  const token = useSelector(createSelector((state) => state.user, (user) => user.token))
  const products = useSelector(createSelector((state) => state.products, (products) => products))
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))

  const handlePressMoreCategory = () => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ExploreScreen)
  }

  const handleViewProductDetail = (product) => {
    NavigationHelpers.navigateToScreen(SCREEN_NAME.ProductDetailScreen, { product })
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
        <MainTitle
          title="Category"
          buttonTitle="More Category"
          onRightButtonPress={handlePressMoreCategory}
        />
        <FlatList
          style={{ marginBottom: 24, marginTop: 12 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          extraData={categories}
          keyExtractor={(item) => `list-category-${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <View style={{ alignItems: 'center', marginRight: 12, marginLeft: index === 0 ? 16 : 0 }}>
                  <View style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: Colors.neutralLight,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <FastImage
                      source={{ uri: `https://huymanh.dev/ecommerce-cms/uploads/${item.category_image_file}` }}
                      style={{ width: 24, height: 24 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={{ ...TextStyles.captionNormalTextRegular, color: Colors.neutralGrey, marginTop: 8 }}>{item.name}</Text>
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
          data={products}
          extraData={products}
          keyExtractor={(item) => `list-product-${item?.id}`}
          renderItem={({ item, index }) => {
            return (
              <ProductCardComponent
                onPress={() => handleViewProductDetail(item)}
                imageSource={product4}
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
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
})
