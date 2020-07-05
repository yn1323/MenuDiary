import React, { Component } from 'react'
import Index from './src/pages/Index'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { Ionicons } from '@expo/vector-icons'

import { Provider } from 'react-redux'
import store from './src/store'

// カスタムテーマ
import getTheme from './native-base-theme/components'
import commonColor from './native-base-theme/variables/commonColor'
import { StyleProvider } from 'native-base'

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
      return <AppLoading />
    } else {
      return (
        <StyleProvider style={getTheme(commonColor)}>
          <Provider store={store}>
            <Index />
          </Provider>
        </StyleProvider>
      )
    }
  }
}
