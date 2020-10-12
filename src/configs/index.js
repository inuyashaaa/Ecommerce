import {
  account, cart, explore, home, offer,
} from '../../assets/images'
import { Colors } from '../../assets/styles'

export const SCREEN_NAME = {
  MAIN_TAB: 'MAIN_TAB',
  SplashScreen: 'SplashScreen',
  LoginScreen: 'LoginScreen',
  RegisterScreen: 'RegisterScreen',
  HomeScreen: 'HomeScreen',
  ExploreScreen: 'ExploreScreen',
  CartScreen: 'CartScreen',
  OfferScreen: 'OfferScreen',
  AccountScreen: 'AccountScreen',
  ProductDetailScreen: 'ProductDetailScreen',
}
export const sizeData = [
  '6', '6.5', '7', '7.5', '8', '8.5',
]

export const colorData = [
  Colors.primaryYellow,
  Colors.primaryBlue,
  Colors.primaryRed,
  Colors.primaryGreen,
  Colors.primaryPulple,
  Colors.neutralDark,
]

export const TAB_DATA = [
  {
    title: 'Home',
    image: home,
  },
  {
    title: 'Explore',
    image: explore,
  },
  {
    title: 'Cart',
    image: cart,
  },
  {
    title: 'Offer',
    image: offer,
  },
  {
    title: 'Account',
    image: account,
  },
]

export const API_URL = 'https://huymanh.dev/ecommerce/api'
