import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Container, View } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import { Router, Scene, Drawer } from 'react-native-router-flux'
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

// reducer
import { addTag } from '../store/tag'

export default (): JSX.Element => {
  const title = 'Menu Diary'
  const dispatch = useDispatch()
  const routes = useSelector((state: State) =>
    state.routes.filter((route: RouteState) => route.showInDrawer),
  )

  // 個別ファイルに分けられない
  // react-domがhooksに非対応なので、ここに書く
  const AddTagButton = (
    <View style={styles.tagEditMargin} key={0}>
      <Icon
        name="add"
        onPress={() => dispatch(addTag({ tag: '新しいタグ' }))}
        style={styles.tagEditText}
      ></Icon>
    </View>
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
            renderRightButton={route.key === 'TagEdit' ? AddTagButton : <></>}
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
  tagEditText: {
    color: '#eee',
  },
  tagEditMargin: {
    marginRight: 20,
  },
})
