import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Container } from 'native-base'
import { useSelector } from 'react-redux'
import { Router, Scene, Drawer, Actions } from 'react-native-router-flux'
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
    <Container>
      <Router navigationBarStyle={styles.header}>
        <Scene key="root" hideNavBar>
          {/* ドロワー表示ページ */}
          <Drawer
            key="drawer"
            drawerWidth={300}
            contentComponent={SideBar}
            drawerIcon={() => (
              <Icon name="menu" style={{ color: '#eee' }}></Icon>
            )}
            navigationBarStyle={styles.header}
          >
            {mapPages()}
          </Drawer>
          {/* タイムラインからの詳細表示 */}
          <Scene key="Post">
            <Scene
              key="Detail"
              renderLeftButton={BackButton}
              component={Detail}
              renderRightButton={EditButton}
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
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#078080',
  },
  header_text: {
    color: '#eee',
  },
})
