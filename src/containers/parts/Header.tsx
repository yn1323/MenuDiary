import React from 'react'
// import { StyleSheet } from 'react-native'
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Drawer,
} from 'native-base'
// pages
import SideBar from './SideBar'
import { Scene, Router } from 'react-native-router-flux'

const HeaderPart: React.FC = () => {
  const isConfig = useSelector((state) => state.scene.isConfig)
  const dispatch = useDispatch()

  const showDrawer = () => {
    Drawer.drawer._root.open()
  }
  const closeDrawer = () => {
    Drawer.drawer._root.close()
  }

  return (
    <Drawer
      ref={(ref) => (Drawer.drawer = ref)}
      content={<SideBar closeDrawer={closeDrawer} />}
      onClose={closeDrawer}
    >
      <Header noShadow>
        <Left>
          {isConfig ? (
            <Button transparent onPress={() => dispatch(sceneOutConfig())}>
              <Icon name="arrow-back" />
            </Button>
          ) : (
            <Button transparent onPress={showDrawer}>
              <Icon name="menu" />
            </Button>
          )}
        </Left>
        <Body>
          <Title>POG-Portal APP(仮)</Title>
        </Body>
        {/* Rightがないとタイトルがもう少し中央寄せになるため */}
        <Right />
      </Header>
      <Router>
        <Scene>
          <Scene
            key="main"
            component={RecordPerson}
            title="RecordPerson"
          ></Scene>
          <Scene
            key="reacordHorse"
            component={RecordHorse}
            title="RecordHorse"
          ></Scene>
        </Scene>
      </Router>
      {/* {isConfig ? (
        <Config></Config>
      ) : (
        <Tabs>
          <RecordPerson title="人別" />
          <RecordHorse title="馬別" />
          <RecordRace title="レース別" />
        </Tabs>
      )} */}
    </Drawer>
  )
}

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#aaa',
//   },
// })

export default HeaderPart
