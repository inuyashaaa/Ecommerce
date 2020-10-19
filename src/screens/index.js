import HOC from './HOC'

import SplashScreen from './SplashScreen'

// AUTH
import LoginScreen from './auth/LoginScreen'
import RegisterScreen from './auth/RegisterScreen'

// MAIN TAB
import HomeScreen from './main/HomeScreen'
import ExploreScreen from './main/ExploreScreen'
import CartScreen from './main/CartScreen'
import OfferScreen from './main/OfferScreen'
import AccountScreen from './main/AccountScreen'

// PRODUCT
import ProductDetailScreen from './product/ProductDetailScreen'

export default {
  SplashScreen: HOC(SplashScreen),
  LoginScreen: HOC(LoginScreen),
  RegisterScreen: HOC(RegisterScreen),
  HomeScreen: HOC(HomeScreen),
  ExploreScreen: HOC(ExploreScreen),
  CartScreen: HOC(CartScreen),
  OfferScreen: HOC(OfferScreen),
  AccountScreen: HOC(AccountScreen),
  ProductDetailScreen: HOC(ProductDetailScreen),
}
