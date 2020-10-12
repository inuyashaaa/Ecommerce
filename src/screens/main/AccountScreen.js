import React, { useRef, useState } from 'react'
import {
  View, StyleSheet, Modal, Dimensions,
  SafeAreaView, TouchableOpacity, Animated,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useDispatch } from 'react-redux'
import { Colors, Shadows, TextStyles } from '../../../assets/styles'
import { Text } from '../../components'
import {
  profile, order, address, payment, close, logoutIcon,
} from '../../../assets/images'
import { NavigationHelpers } from '../../utils'
import { SCREEN_NAME } from '../../configs'

const { width } = Dimensions.get('window')

const AccountScreen = () => {
  const dispatch = useDispatch()
  const [isShowModalLogout, setIsShowModalLogout] = useState(false)
  const aniShowModal = useRef(new Animated.Value(0)).current

  const handleShowModalLogout = () => {
    setIsShowModalLogout(true)
    Animated.spring(aniShowModal, {
      toValue: 1,
      tension: 60,
      useNativeDriver: true,
    }).start()
  }
  const handleHideModalLogout = () => {
    setIsShowModalLogout(false)

    Animated.spring(aniShowModal, {
      toValue: 0,
      tension: 60,
      useNativeDriver: true,
    }).start(() => { })
  }

  const tranY = aniShowModal.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0],
  })

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{
        paddingHorizontal: 16 / 375 * width,
        paddingVertical: 28 / 375 * width,
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.neutralLight,
      }}
      >
        <Text style={{
          ...TextStyles.heading4,
          color: Colors.neutralDark,
        }}
        >
          Account
        </Text>
      </View>

      <TouchableOpacity>
        <View style={{ flexDirection: 'row', padding: 16 / 375 * width, alignItems: 'center' }}>
          <FastImage
            source={profile}
            style={{ width: 24 / 375 * width, height: 24 / 375 * width, marginRight: 16 / 375 * width }}
          />
          <Text style={{
            ...TextStyles.heading6,
            color: Colors.neutralDark,
          }}
          >
            Profile
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ flexDirection: 'row', padding: 16 / 375 * width, alignItems: 'center' }}>
          <FastImage
            source={order}
            style={{ width: 24 / 375 * width, height: 24 / 375 * width, marginRight: 16 / 375 * width }}
          />
          <Text style={{
            ...TextStyles.heading6,
            color: Colors.neutralDark,
          }}
          >
            Order
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ flexDirection: 'row', padding: 16 / 375 * width, alignItems: 'center' }}>
          <FastImage
            source={address}
            style={{ width: 24 / 375 * width, height: 24 / 375 * width, marginRight: 16 / 375 * width }}
          />
          <Text style={{
            ...TextStyles.heading6,
            color: Colors.neutralDark,
          }}
          >
            Address
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ flexDirection: 'row', padding: 16 / 375 * width, alignItems: 'center' }}>
          <FastImage
            source={payment}
            style={{ width: 24 / 375 * width, height: 24 / 375 * width, marginRight: 16 / 375 * width }}
          />
          <Text style={{
            ...TextStyles.heading6,
            color: Colors.neutralDark,
          }}
          >
            Payment
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleShowModalLogout}
      >
        <View style={{ flexDirection: 'row', padding: 16 / 375 * width, alignItems: 'center' }}>
          <Text style={{
            ...TextStyles.heading5,
            color: Colors.primaryRed,
          }}
          >
            Log Out
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        transparent
        visible={isShowModalLogout}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.7)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Animated.View style={[{
            width: 330 / 375 * width,
            height: 250 / 375 * width,
            backgroundColor: Colors.backgroundWhite,
            borderRadius: 10 / 375 * width,
            alignItems: 'center',
            padding: 15,
          },
          {
            transform: [{
              translateY: tranY,
            }],
          },
          ]}
          >
            <View style={{ alignSelf: 'flex-end' }}>
              <TouchableOpacity
                onPress={handleHideModalLogout}
              >
                <FastImage
                  source={close}
                  style={{ width: 15 / 375 * width, height: 15 / 375 * width }}
                />
              </TouchableOpacity>
            </View>

            <FastImage
              source={logoutIcon}
              style={{ width: 55 / 375 * width, height: 55 / 375 * width, marginBottom: 15 / 375 * width }}
            />
            <Text style={{
              ...TextStyles.heading4,
              color: Colors.neutralDark,
            }}
            >
              We’re sad to see you go!
            </Text>
            <Text style={{
              ...TextStyles.heading6,
              color: Colors.neutralDark,
              marginTop: 19 / 375 * width,
              marginBottom: 24 / 375 * width,
            }}
            >
              Are you sure you want to log out now?
            </Text>

            <TouchableOpacity
              onPress={() => {
                dispatch({ type: 'USER_LOGOUT' })
                handleHideModalLogout()
                NavigationHelpers.navigateToScreenAndReplace(SCREEN_NAME.LoginScreen)
              }}
            >
              <View style={{
                width: 250 / 375 * width,
                height: 40 / 375 * width,
                backgroundColor: Colors.primaryRed,
                borderRadius: 5 / 375 * width,
                justifyContent: 'center',
                alignItems: 'center',
                ...Shadows.buttonShadow,
                marginHorizontal: 10,
                marginBottom: 10,
              }}
              >
                <Text style={{
                  ...TextStyles.heading6,
                  color: Colors.backgroundWhite,
                }}
                >
                  Log Out
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
})
