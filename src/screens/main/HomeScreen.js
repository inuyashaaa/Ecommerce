/* eslint-disable no-shadow */
import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { product4 } from '../../../assets/images'
import { Colors, TextStyles } from '../../../assets/styles'
import { Text, ProductCardComponent } from '../../components'

const HomeScreen = () => {
  const token = useSelector(createSelector((state) => state.user, (user) => user.token))
  const products = useSelector(createSelector((state) => state.products, (products) => products))
  console.tron.log({ token })
  console.tron.log({ products })
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 16, alignItems: 'center',
      }}
      >
        <Text style={{
          ...TextStyles.heading5,
          color: Colors.neutralDark,
        }}
        >
          Flash Sale
        </Text>
        <Text style={{
          ...TextStyles.linkNormal,
          color: Colors.primaryBlue,
        }}
        >
          See More
        </Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={products}
          extraData={products}
          keyExtractor={(item) => `list-product-${item?.id}`}
          renderItem={({ item, index }) => {
            return (
              <ProductCardComponent
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
