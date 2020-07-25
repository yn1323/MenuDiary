import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Image } from 'react-native'
import { Button, Text, View, Item, Input, Textarea, Icon } from 'native-base'

// component
import Hr from '../atoms/Hr'
import Scroll from '../templates/Scroll'
import RegisterDate from '../molecules/RegisterDate'
import CommentHeadline from '../molecules/CommentHeadline'
import PhotoUpload from '../molecules/PhotoUpload'
// style
import globalStyle, { gray } from '../../styles/global'

import { State } from '../../types'

import { now } from '../../helpers/common'
import { setEdit } from '../../store/edit'

export default (): JSX.Element => {
  const dispatch = useDispatch()
  const store = useSelector((state: State) => state.edit)
  const [title, setTitle] = useState(store.title)
  const [tag, setTag] = useState(store.tag)
  const [comment, setComment] = useState(store.comment)
  const [uri, setUri] = useState(store.uri)
  const regDate = now()

  // 2回目以降useStateで正しくセットされないため
  if (title !== store.title) {
    setTitle(store.title)
    setTag(store.tag)
    setComment(store.comment)
    setUri(store.uri)
  }

  // 編集時
  useEffect(() => {
    dispatch(
      setEdit({
        id: '3',
        title,
        uri,
        comment,
        tag,
        regDate,
      }),
    )
  }, [title, tag, comment, uri])

  return (
    <Scroll extraMargin={50}>
      {/* タイトル */}
      <View style={[globalStyle.center_vh, { height: 50 }]}>
        <Item style={{ width: '90%' }}>
          <Icon name="restaurant" style={styles.titieIcon} />
          <Input
            placeholder="料理名"
            value={title}
            onChangeText={(t) => setTitle(t)}
            maxLength={128}
          />
        </Item>
      </View>

      {/* タグ & 作成日 */}
      <View style={styles.tagDate}>
        {/* タグ */}
        <Button small>
          <Icon name="pricetag" />
          <Text>{tag || 'タグを選択'}</Text>
        </Button>
        <View style={globalStyle.center_v}>
          <RegisterDate regDate={regDate} />
        </View>
      </View>

      {/* 画像 */}
      <View>
        {uri ? (
          <Image
            source={require('../../../assets/img/meat.jpg')}
            style={styles.img}
            resizeMode="contain"
          />
        ) : (
          <PhotoUpload />
        )}
      </View>

      <Hr marginBottom={10} marginTop={10} />
      {/* コメント */}
      <CommentHeadline />

      <View style={globalStyle.center_vh}>
        <Item style={{ width: '90%' }}>
          <Textarea
            placeholder="タップで入力"
            rowSpan={8}
            value={comment}
            onChangeText={(t) => setComment(t)}
            maxLength={1280}
          />
        </Item>
      </View>
    </Scroll>
  )
}

const styles = StyleSheet.create({
  titieIcon: {
    color: gray,
  },
  title: {
    color: gray,
  },
  tagDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 15,
  },
  tags: {
    flexDirection: 'row',
    flexGrow: 3.5,
    paddingLeft: 5,
  },
  img: {
    height: 280,
    width: '100%',
  },
})
