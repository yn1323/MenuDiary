import React, { useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Button, Form, Item, Label, Input, Text, View } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'

// reducer
import { setUserInfo } from '../store/user'

// component
import Scroll from '../templates/Scroll'

// type
import { State } from '../types/state'

const height = Dimensions.get('window').height - 100

export default (): JSX.Element => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state: State) => state.user)
  const [name, setName] = useState(userInfo.name)
  const onChangeText = (text: string, setter: any) => {
    setter(text)
  }

  const onSubmit = () => {
    if (!name.length) {
      alert('ユーザー名を入力してください。')
      setName(userInfo.name)

      return
    }
    dispatch(setUserInfo({ name }))
  }

  return (
    <Scroll disableScroll>
      <Form style={styles.form}>
        <View>
          <Item stackedLabel>
            <Label>ユーザー名</Label>
            <Input
              onChangeText={(text) => onChangeText(text, setName)}
              value={name}
              maxLength={128}
            />
          </Item>
        </View>
        <View>
          <Button block onPress={onSubmit}>
            <Text>保存</Text>
          </Button>
        </View>
      </Form>
    </Scroll>
  )
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height,
  },
})
