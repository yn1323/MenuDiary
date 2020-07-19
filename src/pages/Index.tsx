import * as React from 'react'
import { useSelector } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import { RouteState } from '../store/routes'

// type
import { State } from '../types'

// コンポーネント
import Detail from './Detail'
import TagSelect from './TagSelect'
// import SearchList from './SearchResult'

// ドロワーボタン
import BackButton from '../containers/fragments/BackButton'

import globalStyles from '../styles/global'

export default (): JSX.Element => {
  const routes = useSelector((state: State) => state.routes)

  const mapPages = (): JSX.Element => {
    return (
      <>
        {routes.map((route: RouteState) => (
          <Scene
            key={route.key}
            component={route.component}
            title={route.key}
            titleStyle={globalStyles.headline}
            initial={route.initial}
          />
        ))}
      </>
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
            title="Detail"
            renderLeftButton={BackButton}
            component={Detail}
          />
        </Scene>
        <Scene key="TagSelect">
          <Scene
            key="TagSelect"
            title="TagSelect"
            renderLeftButton={BackButton}
            component={TagSelect}
          />
        </Scene>
      </Scene>
    </Router>
  )
}
