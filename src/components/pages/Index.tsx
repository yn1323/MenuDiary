import * as React from 'react'
import { useSelector } from 'react-redux'
import { Icon, Text } from 'native-base'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import { RouteState } from '../../store/routes'

// type
import { State } from '../../types'

// コンポーネント
import Detail from './Detail'

// ドロワーボタン
import BackButton from '../atoms/BackButton'
import EditButton from '../atoms/EditButton'
import SaveButton from '../atoms/SaveButton'

import globalStyles, { secondary, inactive } from '../../styles/global'

export default (): JSX.Element => {
  const routes = useSelector((state: State) => state.routes)

  const mapPages = (): JSX.Element => {
    return (
      <Tabs
        key="main"
        swipeEnabled
        animationEnabled
        activeTintColor={secondary}
        inactiveTintColor={inactive}
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
      </Scene>
    </Router>
  )
}
