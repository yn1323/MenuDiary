import React, { Component } from 'react'
import Index from './src/pages/Index'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

// Fonts
import Roboto from './node_modules/native-base/Fonts/Roboto.ttf'
import Roboto_medium from './node_modules/native-base/Fonts/Roboto_medium.ttf'
import Ionicons from './node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'

import { Provider } from 'react-redux'
import store from './src/store'

// カスタムテーマ
import getTheme from './native-base-theme/components'
import commonColor from './native-base-theme/variables/commonColor'
import { StyleProvider, View, Text, Icon } from 'native-base'

// import Icon from 'react-native-vector-icons/dist/Ionicons'

// Androidではnativebaseのフォントがないので、ここで読み込む
// ComponentWillMountが必要なのでクラスコンポーネントでないといけない？？
export default class App extends Component {
  state = { isReady: false }

  async componentDidMount(): Promise<void> {
    await Font.loadAsync({
      Roboto: {
        uri: Roboto,
        fontDisplay: Font.FontDisplay.SWAP,
      },
      Roboto_medium: {
        uri: Roboto_medium,
        fontDisplay: Font.FontDisplay.SWAP,
      },
      Ionicons: {
        uri: Ionicons,
        fontDisplay: Font.FontDisplay.SWAP,
      },
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
