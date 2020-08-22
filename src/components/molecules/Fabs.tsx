import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, Alert } from 'react-native'
import { Fab, Button, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'
import store from '../../store'

import { removePost } from '../../store/post'

export default (): JSX.Element => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)

  const deletePost = () => {
    Alert.alert(
      '確認',
      '本当に削除しますか？',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: del },
      ],
      { cancelable: false },
    )
  }
  const del = () => {
    dispatch(removePost(store.getState().edit.id))
    Actions.Timeline()
  }

  return (
    <Fab
      active={active}
      direction="up"
      containerStyle={styles.space}
      style={styles.fab}
      position="bottomRight"
      onPress={deletePost}
    >
      <Icon name="trash" />
      {/* <Button style={[styles.btn]}>
        <Icon name="logo-whatsapp" />
      </Button>
      <Button style={styles.btn}>
        <Icon name="logo-facebook" />
      </Button>
      <Button style={styles.btn}>
        <Icon name="mail" />
      </Button> */}
    </Fab>
  )
}
const fab = 70
const btn = 45
const styles = StyleSheet.create({
  space: {
    marginRight: 5,
  },
  view: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  fab: {
    width: fab,
    height: fab,
    borderRadius: fab / 2,
    backgroundColor: '#DA6272',
  },
  btn: {
    width: btn,
    height: btn,
    borderRadius: btn / 2,
    backgroundColor: '#5067FF',
  },
})
