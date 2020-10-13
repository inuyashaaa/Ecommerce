/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import {
  StyleSheet, View, TouchableOpacity, Dimensions,
} from 'react-native'
import PropTypes from 'prop-types'
import { Colors, TextStyles } from '../../assets/styles'
import Text from './Text'

const { width } = Dimensions.get('window')
const MainTitle = ({
  title, buttonTitle, onRightButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        {title}
      </Text>

      {buttonTitle ? <TouchableOpacity
        onPress={onRightButtonPress}
      >
        <Text style={styles.textButton}>
          {buttonTitle}
        </Text>
      </TouchableOpacity> : null}
    </View>
  )
}

MainTitle.defaultProps = {
  buttonTitle: '',
  onRightButtonPress: () => { },
}

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
  onRightButtonPress: PropTypes.func,
}

export default MainTitle

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16 / 375 * width,
    alignItems: 'center',
  },
  textTitle: {
    ...TextStyles.heading5,
    color: Colors.neutralDark,
  },
  textButton: {
    ...TextStyles.linkNormal,
    color: Colors.primaryBlue,
    marginRight: 16 / 375 * width,
  },
})
