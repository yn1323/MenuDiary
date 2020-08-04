import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'native-base'
import { Router, Scene, Tabs, Actions } from 'react-native-router-flux'
import { RouteState } from '../../store/routes'
import { addPost } from '../../store/post'
import store from '../../store'

// コンポーネント
import Detail from './Detail'
import TagEdit from '../templates/TagEdit'
import PostEdit from '../templates/PostEdit'
import PostAdd from '../templates/PostAdd'
// import Test from './Test'

// ドロワーボタン
import BackButton from '../molecules/BackButton'
import GoTimelineButton from '../molecules/GoTimelineButton'
import EditButton from '../atoms/EditButton'
import SaveButton from '../atoms/SaveButton'

import globalStyles, { secondary, inactive } from '../../styles/global'

import { resetEdit } from '../../store/edit'
import { resetSearch } from '../../store/search'

import { State } from '../../types'

export default (): JSX.Element => {
  const dispatch = useDispatch()
  const search = useSelector((state: State) => state.search.tag)
  const routes = store.getState().routes

  // 編集画面の確定
  // チェックボタン押下フラグ
  let submit = false
  const clickCheck = () => {
    submit = true
    Actions.Timeline()
  }
  const enterEdit = () => {
    submit = false
  }
  const submitPost = () => {
    if (submit) {
      const { id, title, tag, regDate, uri, comment } = store.getState().edit
      dispatch(
        addPost({
          id,
          title,
          tag,
          regDate,
          uri,
          comment,
        }),
      )
    }
    dispatch(resetEdit())
  }
  // タグ検索からタイムラインに戻る時に使用
  const refreshSearch = () => {
    dispatch(resetSearch())
  }

  const pressTab = ({ navigation }) => {
    if (navigation.state.key === 'Edit') {
      dispatch(resetEdit())
      Actions.PostAdd()

      return
    }
    if (navigation.state.key === 'Timeline') dispatch(resetSearch())
    Actions[navigation.state.key]()
  }

  const mapPages = (): JSX.Element => {
    return (
      <Tabs
        key="main"
        swipeEnabled
        animationEnabled
        activeTintColor={secondary}
        inactiveTintColor={inactive}
        tabBarOnPress={(t: any) => pressTab(t)}
        lazy
      >
        {routes.map((route: RouteState) => (
          <Scene
            key={route.key}
            component={route.component}
            title={
              route.key !== 'Timeline' ? route.title : search || route.title
            }
            titleStyle={globalStyles.headline}
            initial={route.initial}
            tabBarLabel={route.title}
            labelStyle={{ color: 'red' }}
            icon={({ focused }) => (
              <Icon
                active
                name={route.icon}
                style={{ color: focused ? secondary : inactive }}
              />
            )}
            // タグ検索時の戻るボタン
            renderLeftButton={
              route.key === 'Timeline' && search ? (
                GoTimelineButton(refreshSearch)
              ) : (
                <></>
              )
            }
          />
        ))}
      </Tabs>
    )
  }

  return (
    <Router>
      <Scene key="root" hideNavBar initial>
        {mapPages()}

        {/* タイムラインからの詳細表示 */}
        <Scene key="Detail">
          <Scene
            key="Detail"
            renderLeftButton={BackButton}
            renderRightButton={EditButton}
            component={Detail}
          />
        </Scene>
        {/* タグの編集画面 */}
        <Scene key="TagEdit">
          <Scene
            key="TagEdit"
            renderLeftButton={BackButton}
            component={TagEdit}
          />
        </Scene>
        {/* 新規記事編集画面 */}
        <Scene key="PosｔEdit">
          <Scene
            key="PostEdit"
            renderLeftButton={BackButton}
            component={PostEdit}
            renderRightButton={SaveButton(clickCheck)}
            onEnter={enterEdit}
            onExit={submitPost}
          />
        </Scene>
        {/* 保存済みの記事編集画面 */}
        <Scene key="PostAdd">
          <Scene
            key="PostAdd"
            renderLeftButton={BackButton}
            component={PostAdd}
            renderRightButton={SaveButton(clickCheck)}
            onEnter={enterEdit}
            onExit={submitPost}
          />
        </Scene>
        {/* <Scene key="Test" initial component={Test} /> */}
      </Scene>
    </Router>
  )
}
