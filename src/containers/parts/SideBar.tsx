import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Button, List, ListItem, Text, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { State } from '../../types'
import { RouteState } from '../../store/routes'

export default (): JSX.Element => {
  const routes = useSelector((state: State) =>
    state.routes.filter((route: RouteState) => route.showInDrawer),
  )
  // const dispatch = useDispatch()

  const handleClick = (key: string) => {
    // ページの移動
    Actions[key]()
    // 選択状態の変更
    // ドロワーがカクつくので使用しない
    // dispatch(setSelected(key))
  }

  const lists = (): JSX.Element => (
    <>
      {routes.map((route: RouteState) => (
        <ListItem
          key={route.key}
          onPress={() => handleClick(route.key)}
          // selectedを変更しようとすると、state.routes全体の更新が必要
          // ドロワーがカクつくかもしれないので、使用しない
          // selected={route.selected}
        >
          <Text>{route.title}</Text>
        </ListItem>
      ))}
    </>
  )

  return (
    <View style={styles.view}>
      <Button style={styles.button} transparent onPress={() => Actions.pop()}>
        <Icon name="arrow-back"></Icon>
      </Button>
      <List>{lists()}</List>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: 300,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
})
