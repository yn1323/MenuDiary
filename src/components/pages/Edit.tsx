import React, { useState } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
  Button,
  Text,
  H3,
  View,
  Item,
  Input,
  Textarea,
  Icon,
} from 'native-base'

// component
import Hr from '../atoms/Hr'
import Scroll from '../templates/Scroll'
import RegisterDate from '../molecules/RegisterDate'
import CommentHeadline from '../molecules/CommentHeadline'
import PhotoUpload from '../molecules/PhotoUpload'
// style
import globalStyle, { gray } from '../../styles/global'

import { now } from '../../helpers/common'

export default (): JSX.Element => {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [comment, setComment] = useState('')
  const [image, setImage] = useState('')
  const regDate = now()

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
        {image ? (
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
