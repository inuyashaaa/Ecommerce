/* eslint-disable no-shadow */
import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { Colors, TextStyles } from '../../../assets/styles'
import { Text, MainTitle } from '../../components'

const ExploreScreen = () => {
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
        <MainTitle
          title="Man Fashion"
        />
        <FlatList
          style={{ marginBottom: 24, marginTop: 12 }}
          showsHorizontalScrollIndicator={false}
          data={categories}
          extraData={categories}
          keyExtractor={(item) => `list-category-${item.id}`}
          numColumns={4}
          columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 16 }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
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
      <View style={{ marginTop: 8 }}>
        <MainTitle
          title="Woman Fashion"
        />
        <FlatList
          style={{ marginBottom: 24, marginTop: 12 }}
          showsHorizontalScrollIndicator={false}
          data={categories}
          extraData={categories}
          keyExtractor={(item) => `list-category-${item.id}`}
          numColumns={4}
          columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 16 }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
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
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
})
