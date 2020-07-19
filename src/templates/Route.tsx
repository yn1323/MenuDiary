import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View,
} from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import SideBar from '../containers/parts/SideBar'
import { RouteState } from '../store/routes'

// type
import { State } from '../types'

// コンポーネント
import Detail from './Detail'
import PostEdit from './PostEdit'
import SearchList from './SearchList'
import Login from './Tutorial'

// ドロワーボタン
import BackButton from '../containers/fragments/BackButton'
import EditButton from '../containers/fragments/EditButton'

export default (): JSX.Element => {
  const mapPages = (): JSX.Element => {
    return (
      <>
        {routes.map((route: RouteState) => (
          <Scene
            key={route.key}
            component={route.component}
            title={title}
            titleStyle={styles.header_text}
            initial={route.initial}
          />
        ))}
      </>
    )
  }

  return (
    <Router navigationBarStyle={styles.header}>
      <Scene key="root" hideNavBar>
        {mapPages()}
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#078080',
  },
  header_text: {
    color: '#eee',
  },
  tagEditText: {
    color: '#eee',
  },
  tagEditMargin: {
    marginRight: 20,
  },
})
