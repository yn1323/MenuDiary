import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import { useSelector } from 'react-redux'
import { Router, Scene, Drawer } from 'react-native-router-flux'
import SideBar from '../containers/parts/SideBar'
import { RouteState } from '../store/routes'
import { State } from '../types'

// コンポーネント
import Detail from './Detail'
import PostEdit from './PostEdit'
import SearchList from './SearchList'

import BackButton from '../containers/fragments/BackButton'

export default (): JSX.Element => {
  const title = 'Menu Diary'
  const routes = useSelector((state: State) =>
    state.routes.filter((route: RouteState) => route.showInDrawer),
  )

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
        {/* ドロワー表示ページ */}
        <Drawer
          initial
          key="drawer"
          drawerWidth={300}
          contentComponent={SideBar}
          drawerIcon={() => <Icon name="menu" style={{ color: '#eee' }}></Icon>}
        >
          {mapPages()}
        </Drawer>
        {/* タイムラインからの詳細表示 */}
        <Scene key="Post">
          <Scene
            key="Detail"
            renderLeftButton={BackButton}
            component={Detail}
            initial
          />
          <Scene
            key="PostEdit"
            component={PostEdit}
            // ↓がないとbackButtonTintColorが反映されない
            backButtonTextStyle={{ color: 'purple' }}
            backButtonTintColor="#eee"
          />
        </Scene>
        {/* 検索からの詳細表示 */}
        <Scene key="Search">
          <Scene
            key="SearchList"
            renderLeftButton={BackButton}
            component={SearchList}
            initial
          />
          <Scene
            key="Detail"
            component={Detail}
            backButtonTextStyle={{ color: '#eee' }}
            backButtonTintColor="#eee"
          />
          <Scene
            key="PostEdit"
            component={PostEdit}
            backButtonTextStyle={{ color: '#eee' }}
            backButtonTintColor="#eee"
          />
        </Scene>
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3F51B5',
  },
  header_text: {
    color: '#eee',
  },
})
