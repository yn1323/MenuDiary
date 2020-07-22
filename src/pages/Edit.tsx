import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'

// component
import Scroll from '../templates/Scroll'
import Hr from '../containers/fragments/Hr'
import RegisterDate from '../containers/fragments/RegisterDate'
// type
import { State } from '../../types'

// style
import globalStyle, { gray } from '../styles/global'

import { now } from '../helpers/common'
const limits = {
  title: {
    length: 128,
  },
  comment: {
    length: 1280,
  },
}

export default (): JSX.Element => {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [comment, setComment] = useState('')
  const [image, setImage] = useState('')
  const regDate = now()

  const upload = () => {
    alert('upload Photo')
  }

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
            maxLength={limits.title.length}
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
            source={require('../../assets/img/meat.jpg')}
            style={styles.img}
            resizeMode="contain"
          />
        ) : (
          <TouchableOpacity
            style={[styles.img, globalStyle.center_vh, styles.noImg]}
            onPress={() => upload()}
            activeOpacity={0.9}
          >
            <Icon name="camera" style={styles.noImgIcon}></Icon>
            <Text style={styles.noImgText}>Upload Photo</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* コメント */}
      <View style={[globalStyle.center_vh, { height: 50 }]}>
        <Icon name="thumbs-up" style={styles.titieIcon} />
        <H3 style={styles.title}> ポイント</H3>
      </View>

      <View style={globalStyle.center_vh}>
        <Item style={{ width: '90%' }}>
          <Textarea
            placeholder="タップで入力"
            rowSpan={8}
            value={comment}
            onChangeText={(t) => setComment(t)}
            maxLength={limits.title.length}
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
  noImg: {
    backgroundColor: '#aaa',
    flexDirection: 'column',
  },
  noImgText: {
    color: '#ddd',
  },
  noImgIcon: {
    color: '#ddd',
    fontSize: 100,
  },
})
