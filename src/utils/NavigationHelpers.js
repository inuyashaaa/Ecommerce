import * as React from 'react'
import { StackActions } from '@react-navigation/routers'
import { SCREEN_NAME } from '../configs'

export const navigationRef = React.createRef()

export function navigateToScreen(name, params) {
  navigationRef.current?.navigate(name, params)
}

export function navigateToScreenAndReplace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function navigateToScreenInTab(name, params) {
  navigationRef.current?.navigate(SCREEN_NAME.MAIN_TAB, { screen: name, params })
}

export function navigateBack() {
  navigationRef.current?.goBack()
}
