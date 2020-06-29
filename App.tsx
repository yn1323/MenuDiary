import React, { Component } from 'react'
import { View } from 'react-native'
import Index from './src/pages/Index'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
// import Spinner from 'react-native-loading-spinner-overlay'
// import { Container, Content, Grid, Col, Button } from 'native-base'

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
      return <Index />
    }
  }
}
