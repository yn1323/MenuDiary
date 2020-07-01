import React, { Component } from 'react'
import { View } from 'react-native'
import Index from './src/pages/Index'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import { Provider } from 'react-redux'
import store from './src/store'

// Androidではnativebaseのフォントがないので、ここで読み込む
// ComponentWillMountが必要なのでクラスコンポーネントでないといけない？？
export default class App extends Component {
  state = { isReady: false }

  async componentDidMount(): Promise<void> {
    await Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ isReady: true })
  }

  render(): JSX.Element {
    if (!this.state.isReady) {
      return <View />
    } else {
      return (
        <Provider store={store}>
          <Index />
        </Provider>
      )
    }
  }
}
