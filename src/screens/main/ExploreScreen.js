/* eslint-disable no-shadow */
import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Dimensions,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import _ from 'lodash'
import { Colors, TextStyles } from '../../../assets/styles'
import { Text, MainTitle } from '../../components'

const numColumns = 4
const { width } = Dimensions.get('window')
const calSize = width / numColumns
const ExploreScreen = () => {
  const categories = useSelector(createSelector((state) => state.categories, (categories) => categories))
  const manCategories = _.filter(categories, { gender: 'male' })
  const womenCategories = _.filter(categories, { gender: 'female' })
  console.tron.log({ manCategories })
  console.tron.log({ womenCategories })
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
          data={manCategories}
          extraData={categories}
          keyExtractor={(item) => `list-category-${item.id}`}
          numColumns={numColumns}
          columnWrapperStyle={{ marginBottom: 16 }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <View style={{ alignItems: 'center', width: calSize }}>
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
                      source={{ uri: item.category_image_file }}
                      style={{ width: 24, height: 24 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={{
                    ...TextStyles.captionNormalTextRegular,
                    color: Colors.neutralGrey,
                    marginTop: 8,
                    width: 70,
                    textAlign: 'center',
                  }}
                  >
                    {item.name}
                  </Text>
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
          data={womenCategories}
          extraData={categories}
          keyExtractor={(item) => `list-category-${item.id}`}
          numColumns={numColumns}
          columnWrapperStyle={{ marginBottom: 16 }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <View style={{ alignItems: 'center', width: calSize }}>
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
                      source={{ uri: item.category_image_file }}
                      style={{ width: 24, height: 24 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={{
                    ...TextStyles.captionNormalTextRegular,
                    color: Colors.neutralGrey,
                    marginTop: 8,
                    textAlign: 'center',
                    width: 70,
                  }}
                  >
                    {item.name}
                  </Text>
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
