import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import { Provider, useSelector } from 'react-redux'
import store from '../store'
import { Router, Scene, Drawer } from 'react-native-router-flux'
import SideBar from '../containers/parts/SideBar'
import { RouteState } from '../store/routes'
import { State } from '../types'

export default (): JSX.Element => {
  const title = 'Menu Diary'
  const routes = useSelector((state: State) => state.routes)

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
    <Provider store={store}>
      <Router navigationBarStyle={styles.header}>
        <Scene key="root" hideNavBar>
          <Drawer
            initial
            key="drawer"
            drawerWidth={300}
            contentComponent={SideBar}
            drawerIcon={() => (
              <Icon name="menu" style={{ color: '#eee' }}></Icon>
            )}
          >
            {mapPages()}
          </Drawer>
        </Scene>
      </Router>
    </Provider>
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
