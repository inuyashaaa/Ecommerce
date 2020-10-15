import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const mainPaddingH = 16 / 375 * width

export const Colors = {
  primaryBlue: '#40BFFF',
  primaryRed: '#FB7181',
  primaryYellow: '#FFC833',
  primaryGreen: '#53D1B6',
  primaryPulple: '#5C61F4',
  neutralDark: '#223263',
  neutralGrey: '#9098B1',
  neutralLight: '#EBF0FF',
  backgroundWhite: '#FFFFFF',
}

export const Fonts = {
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
}

export const TextStyles = {
  heading1: {
    ...Fonts.bold,
    fontSize: 32,
    lineHeight: 1.5,
  },
  heading2: {
    ...Fonts.bold,
    fontSize: 24,
    lineHeight: 1.5,
  },
  heading3: {
    ...Fonts.bold,
    fontSize: 20,
    lineHeight: 1.5,
  },
  heading4: {
    ...Fonts.bold,
    fontSize: 16,
    lineHeight: 1.5,
  },
  heading5: {
    ...Fonts.bold,
    fontSize: 14,
    lineHeight: 1.5,
  },
  heading6: {
    ...Fonts.bold,
    fontSize: 12,
    lineHeight: 1.5,
  },

  bodyLargeTextBold: {
    ...Fonts.bold,
    fontSize: 16,
  },
  bodyLargeTextRegular: {
    ...Fonts.regular,
    fontSize: 16,
  },
  bodyMediumTextBold: {
    ...Fonts.bold,
    fontSize: 14,
  },
  bodyMediumTextRegular: {
    ...Fonts.regular,
    fontSize: 14,
  },
  bodyNormalTextBold: {
    ...Fonts.bold,
    fontSize: 12,
  },
  bodyNormalTextRegular: {
    ...Fonts.regular,
    fontSize: 12,
  },

  captionLargeTextBold: {
    ...Fonts.bold,
    fontSize: 12,
    lineHeight: 1.5,
  },
  captionLargeTextRegular: {
    ...Fonts.regular,
    fontSize: 12,
    lineHeight: 1.5,
  },
  captionNormalTextBold: {
    ...Fonts.bold,
    fontSize: 10,
    lineHeight: 1.5,
  },
  captionNormalTextRegular: {
    ...Fonts.regular,
    fontSize: 10,
    lineHeight: 1.5,
  },
  captionNormalRegularLine: {
    ...Fonts.regular,
    fontSize: 10,
    textDecorationLine: 'line-through',
    lineHeight: 1.5,
  },

  linkNormal: {
    ...Fonts.bold,
    fontSize: 14,
    lineHeight: 1.5,
    color: Colors.primaryBlue,
  },
  linkSmall: {
    ...Fonts.bold,
    fontSize: 12,
    lineHeight: 1.5,
    color: Colors.primaryBlue,
  },
}

export const Shadows = {
  buttonShadow: {
    shadowColor: Colors.primaryRed,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 30,
    elevation: 8,
  },
  mainButtonShadow: {
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 30,
    elevation: 8,
  },
}
export const MessageStyle = {
  success: {
    style: { backgroundColor: Colors.primaryBlue },
    titleStyle: TextStyles.bodyMediumTextBold,
    duration: 3000,
  },
  error: {
    style: { backgroundColor: Colors.primaryRed },
    titleStyle: TextStyles.bodyMediumTextBold,
    duration: 3000,
  },
}
