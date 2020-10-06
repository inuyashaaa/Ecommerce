import {
  account, cart, explore, home, offer,
} from '../../assets/images'

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
}
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
