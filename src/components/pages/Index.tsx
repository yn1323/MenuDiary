import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from 'native-base'
import { Router, Scene, Tabs, Actions } from 'react-native-router-flux'
import { RouteState } from '../../store/routes'

// type
import { State } from '../../types'

// コンポーネント
import Detail from './Detail'
import TagEdit from '../templates/TagEdit'
// import Test from './Test'

// ドロワーボタン
import BackButton from '../atoms/BackButton'
import EditButton from '../atoms/EditButton'
import SaveButton from '../atoms/SaveButton'

import globalStyles, { secondary, inactive } from '../../styles/global'

import { resetEdit } from '../../store/edit'
import { resetSearch } from '../../store/search'

export default (): JSX.Element => {
  const dispatch = useDispatch()
  const routes = useSelector((state: State) => state.routes)

  const pressTab = ({ navigation }) => {
    if (navigation.state.key === 'Edit') dispatch(resetEdit())
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
      >
        {routes.map((route: RouteState) => (
          <Scene
            key={route.key}
            component={route.component}
            title={route.title}
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
            renderRightButton={route.key === 'Edit' ? SaveButton : <></>}
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
        {/* タイムラインからの詳細表示 */}
        <Scene key="TagEdit">
          <Scene
            key="TagEdit"
            renderLeftButton={BackButton}
            component={TagEdit}
          />
        </Scene>
        {/* <Scene key="Test" initial component={Test} /> */}
      </Scene>
    </Router>
  )
}
